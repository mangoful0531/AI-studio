/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { Gamepad, Play, RotateCcw, Volume2, Gamepad2, Layers, Cpu, Flame, Zap, CheckCircle } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export default function GameView() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "GAMEOVER" | "VICTORY">("IDLE");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  // Mini retro-game engine variables inside a ref to prevent re-render glitches
  const gameRef = useRef({
    player: { x: 50, y: 150, width: 22, height: 22, vx: 0, vy: 0, isGrounded: false, color: "#10b981" },
    platforms: [
      { x: 0, y: 220, width: 500, height: 40, type: "ground" },
      { x: 120, y: 160, width: 80, height: 12, type: "standard" },
      { x: 250, y: 110, width: 90, height: 12, type: "standard" },
      { x: 380, y: 150, width: 80, height: 12, type: "standard" },
      { x: 440, y: 70, width: 40, height: 10, type: "goal" }
    ],
    obstacles: [
      { x: 180, y: 205, width: 15, height: 15, type: "spike" },
      { x: 310, y: 205, width: 15, height: 15, type: "spike" }
    ],
    particles: [] as Particle[],
    gravity: 0.35,
    friction: 0.85,
    cameraScroll: 0,
    hasTouchedGoal: false
  });

  // Start/Restart
  const startGame = () => {
    setGameState("PLAYING");
    setScore(0);
    setLevel(1);
    gameRef.current.player.x = 50;
    gameRef.current.player.y = 150;
    gameRef.current.player.vx = 0;
    gameRef.current.player.vy = 0;
    gameRef.current.player.isGrounded = false;
    gameRef.current.particles = [];
    gameRef.current.hasTouchedGoal = false;
  };

  // Particle emission helper
  const emitParticles = (x: number, y: number, color: string, count = 8) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 2.5;
      gameRef.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // slight bias upward
        color,
        size: 2 + Math.random() * 3,
        life: 0,
        maxLife: 20 + Math.random() * 20
      });
    }
  };

  // Handle key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent browser scroll when playing
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", " "].includes(e.key) && gameState === "PLAYING") {
        e.preventDefault();
      }
      setKeys((prev) => ({ ...prev, [e.key]: true }));

      // Space or ArrowUp to Jump
      if ((e.key === "ArrowUp" || e.key === " " || e.key === "Space") && gameState === "PLAYING") {
        const p = gameRef.current.player;
        if (p.isGrounded) {
          p.vy = -7.5;
          p.isGrounded = false;
          emitParticles(p.x + p.width/2, p.y + p.height, "#10b981", 6);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  // Main game loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gameLoop = () => {
      const g = gameRef.current;
      const p = g.player;

      // Reset / Clear
      ctx.fillStyle = "#0c0a09"; // rich slate dark black color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render matrix vertical grid lines
      ctx.strokeStyle = "#1c1917";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      if (gameState === "PLAYING") {
        // 1. Move Player
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) {
          p.vx -= 0.45;
        }
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) {
          p.vx += 0.45;
        }

        // Apply friction
        p.vx *= g.friction;
        p.vy += g.gravity;

        // Keep inside bounds
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) {
          p.x = 0;
          p.vx = 0;
        }
        if (p.x > canvas.width - p.width) {
          p.x = canvas.width - p.width;
          p.vx = 0;
        }

        // Reset grounded status to check collisions
        p.isGrounded = false;

        // 2. Platform Collision Handling via AABB
        g.platforms.forEach((plat) => {
          // Check collision
          const isColliding =
            p.x < plat.x + plat.width &&
            p.x + p.width > plat.x &&
            p.y < plat.y + plat.height &&
            p.y + p.height > plat.y;

          if (isColliding) {
            // Check top collision (landing)
            const overlapX = Math.min(p.x + p.width - plat.x, plat.x + plat.width - p.x);
            const overlapY = Math.min(p.y + p.height - plat.y, plat.y + plat.height - p.y);

            if (overlapY < overlapX) {
              if (p.vy > 0 && p.y + p.height - p.vy <= plat.y + 1) {
                // Landed on top
                p.y = plat.y - p.height;
                p.vy = 0;
                p.isGrounded = true;

                if (plat.type === "goal") {
                  g.hasTouchedGoal = true;
                  p.vx = 0;
                  setGameState("VICTORY");
                  emitParticles(p.x + p.width/2, p.y + p.height/2, "#f59e0b", 30);
                }
              } else if (p.vy < 0 && p.y - p.vy >= plat.y + plat.height - 1) {
                // Hit bottom of platform
                p.y = plat.y + plat.height;
                p.vy = 0;
              }
            } else {
              // Side collisions
              if (p.vx > 0) {
                p.x = plat.x - p.width;
              } else if (p.vx < 0) {
                p.x = plat.x + plat.width;
              }
              p.vx = 0;
            }
          }
        });

        // 3. Obstacle Collision Handling (Spikes)
        g.obstacles.forEach((spike) => {
          const isColliding =
            p.x < spike.x + spike.width &&
            p.x + p.width > spike.x &&
            p.y < spike.y + spike.height &&
            p.y + p.height > spike.y;

          if (isColliding) {
            setGameState("GAMEOVER");
            emitParticles(p.x + p.width/2, p.y + p.height/2, "#ef4444", 25);
          }
        });

        // Check pit fall
        if (p.y > canvas.height) {
          setGameState("GAMEOVER");
        }
      }

      // Draw Goal portal
      const goalPlat = g.platforms.find(p => p.type === "goal");
      if (goalPlat) {
        // Goal visual aura
        const pulse = Math.sin(Date.now() / 150) * 4;
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.arc(goalPlat.x + goalPlat.width/2, goalPlat.y - 15, 8 + pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(goalPlat.x + goalPlat.width/2, goalPlat.y - 15, 14 + pulse, 0, Math.PI * 2);
        ctx.stroke();

        ctx.font = "bold 9px monospace";
        ctx.fillStyle = "#fbbf24";
        ctx.fillText("GOAL", goalPlat.x + goalPlat.width/2 - 12, goalPlat.y - 32);
      }

      // Draw Platforms
      g.platforms.forEach((plat) => {
        if (plat.type === "ground") {
          ctx.fillStyle = "#292524";
          ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
          // green lawn top line
          ctx.fillStyle = "#10b981";
          ctx.fillRect(plat.x, plat.y, plat.width, 4);
        } else if (plat.type === "goal") {
          ctx.fillStyle = "#78350f";
          ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
          ctx.fillStyle = "#fbbf24";
          ctx.fillRect(plat.x, plat.y, plat.width, 2);
        } else {
          ctx.fillStyle = "#44403c";
          ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
          ctx.fillStyle = "#a8a29e";
          ctx.fillRect(plat.x, plat.y, plat.width, 2);
        }
      });

      // Draw Dangerous Spikes
      g.obstacles.forEach((spike) => {
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(spike.x, spike.y + spike.height);
        ctx.lineTo(spike.x + spike.width / 2, spike.y);
        ctx.lineTo(spike.x + spike.width, spike.y + spike.height);
        ctx.closePath();
        ctx.fill();
        // spike glow line
        ctx.strokeStyle = "#fca5a5";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Update and Draw Particles
      g.particles = g.particles.filter((part) => {
        part.x += part.vx;
        part.y += part.vy;
        part.vy += 0.05; // slight gravity pull on particles
        part.life++;

        const opacity = 1 - part.life / part.maxLife;
        ctx.fillStyle = part.color;
        ctx.globalAlpha = opacity;
        ctx.fillRect(part.x, part.y, part.size, part.size);
        ctx.globalAlpha = 1.0;

        return part.life < part.maxLife;
      });

      // Draw Player green square
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.width, p.height);

      // Small eyes inside player square for retro character decoration
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(p.x + p.width - 8, p.y + 4, 3, 3);
      ctx.fillRect(p.x + p.width - 14, p.y + 4, 3, 3);
      ctx.fillStyle = "#000000";
      ctx.fillRect(p.x + p.width - 7, p.y + 5, 2, 2);
      ctx.fillRect(p.x + p.width - 13, p.y + 5, 2, 2);

      // Render Instructions overlay if IDLE
      if (gameState === "IDLE") {
        ctx.fillStyle = "rgba(12, 10, 9, 0.85)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold 13px system-ui";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("NEO-NOSTALGIA PHYSICS SIMULATOR WIP", canvas.width / 2, canvas.height / 2 - 30);

        ctx.font = "10px monospace";
        ctx.fillStyle = "#10b981";
        ctx.fillText("[방향키 좌/우 ◀ ▶]로 이동, [SPACEBAR] 혹은 [▲키]로 점프", canvas.width / 2, canvas.height / 2 + 5);
        ctx.fillText("붉은 가시 미늘 장애물을 피해 노란 Portal 고지에 도착하세요.", canvas.width / 2, canvas.height / 2 + 22);

        ctx.fillStyle = "#f59e0b";
        ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 + 45, 120, 26);
        ctx.fillStyle = "#0c0a09";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("START DEMO", canvas.width / 2, canvas.height / 2 + 61);
      }

      // Render Screen texts for Victory or Loss
      if (gameState === "GAMEOVER") {
        ctx.fillStyle = "rgba(12, 10, 9, 0.9)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold 16px sans-serif";
        ctx.fillStyle = "#ef4444";
        ctx.textAlign = "center";
        ctx.fillText("CRITICAL SYSTEM FAILURE", canvas.width / 2, canvas.height / 2 - 20);

        ctx.font = "10px monospace";
        ctx.fillStyle = "#a8a29e";
        ctx.fillText("물리 충돌 감지! 파실 충격 한계치 초가.", canvas.width / 2, canvas.height / 2 + 5);

        ctx.fillStyle = "#ef4444";
        ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 25, 100, 24);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("TRY AGAIN", canvas.width / 2, canvas.height / 2 + 40);
      }

      if (gameState === "VICTORY") {
        ctx.fillStyle = "rgba(12, 10, 9, 0.92)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold 16px font-serif";
        ctx.fillStyle = "#fbbf24";
        ctx.textAlign = "center";
        ctx.fillText("PROJECT DEMO VICTORY!", canvas.width / 2, canvas.height / 2 - 20);

        ctx.font = "10px monospace";
        ctx.fillStyle = "#10b981";
        ctx.fillText("AABB 물리 판정 통과 및 V-Sync 60FPS 안정성 검증 완료.", canvas.width / 2, canvas.height / 2 + 5);

        ctx.fillStyle = "#fbbf24";
        ctx.fillRect(canvas.width / 2 - 60, canvas.height / 2 + 25, 120, 24);
        ctx.fillStyle = "#0c0a09";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("PLAY AGAIN", canvas.width / 2, canvas.height / 2 + 40);
      }

      // Reset textAlign
      ctx.textAlign = "left";

      // Loop request
      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animId);
  }, [gameState, keys]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    if (gameState === "IDLE") {
      // Check start button click bounds
      const btnX = canvas.width / 2 - 60;
      const btnY = canvas.height / 2 + 45;
      if (clickX >= btnX && clickX <= btnX + 120 && clickY >= btnY && clickY <= btnY + 26) {
        startGame();
      }
    } else if (gameState === "GAMEOVER") {
      // Check try again button bounds
      const btnX = canvas.width / 2 - 50;
      const btnY = canvas.height / 2 + 25;
      if (clickX >= btnX && clickX <= btnX + 100 && clickY >= btnY && clickY <= btnY + 24) {
        startGame();
      }
    } else if (gameState === "VICTORY") {
      const btnX = canvas.width / 2 - 60;
      const btnY = canvas.height / 2 + 25;
      if (clickX >= btnX && clickX <= btnX + 120 && clickY >= btnY && clickY <= btnY + 24) {
        startGame();
      }
    }
  };

  return (
    <div className="w-full pt-18 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* 1. Header Hero Area */}
      <section className="bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-200/50 dark:border-zinc-850 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-505 uppercase">
              PROJECT 01: RETRO GAME
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
              Neo-Nostalgia: 8비트의 재해석
            </h1>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
              C++과 OpenGL 모던 쉐이더 기초를 이용해 구현해 낸 1980년대 클래식 8비트 2D 아케이드 하드웨어의 감성 프로젝트. 효율적인 가상 프레임 버퍼링과 자체 게임 루프를 지향합니다.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                if (gameState === "IDLE") {
                  startGame();
                } else {
                  setGameState("IDLE");
                }
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-xs tracking-wider transition-all hover:scale-102 active:scale-98 shadow-md"
            >
              <Gamepad className="w-4 h-4" />
              PLAY CODES DEMO
            </button>
          </div>
        </div>
      </section>

      {/* 2. Core Stack Section (Overlay vintage hardware desk setup mockup beside side white cards) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Tech Spec Left Block */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/70 dark:border-zinc-850 rounded-2xl p-6 sm:p-8">
            <div>
              <span className="font-mono text-xxs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                01 / DEVELOPMENT CONCEPTS
              </span>
              <h2 className="text-2xl font-display font-medium tracking-tight text-zinc-900 dark:text-white">
                Core Stack Spec
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-4 leading-relaxed">
                클래식 게임보이 및 패미컴 하드웨어 인스턴스 연구를 통해 저수준 비디오 메모리 매핑 구조를 시뮬레이션하였습니다. C++ 객체 단위 런타임 최적화를 실천했습니다.
              </p>
            </div>
            <div className="space-y-3.5 mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Language</span>
                <span className="text-zinc-700 dark:text-zinc-300 font-bold">C++ 17 Standards</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Graphics Library</span>
                <span className="text-emerald-500 font-bold">OpenGL 3.3 Core</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Window Context</span>
                <span className="text-zinc-700 dark:text-zinc-300">GLFW / GLEW Loader</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400">Physics Module</span>
                <span className="text-violet-500 font-bold">Custom AABB Engine</span>
              </div>
            </div>
          </div>

          {/* Core Stack Vintage Hardware Photo Block */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden relative min-h-[300px] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Vintage Nintendo Console mockup"
              className="w-full h-full object-cover brightness-[0.7] dark:brightness-[0.45]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white max-w-sm">
              <p className="text-xxs font-mono text-emerald-400 tracking-wider">NEO-NOSTALGIA HARDWARE RETROSPECTIVE</p>
              <h3 className="text-lg font-serif font-bold mt-2">1980년대 아케이드 주치의 감성</h3>
              <p className="text-xs text-zinc-300 mt-2 font-light leading-relaxed">
                오프라인 칩셋 설계에서 힌트를 얻은 비디오 레지스터 제어 방식, 사각형 형태의 스프라이트 충돌 박스 시스템은 복밀한 지식을 선물했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Visual Identity Section (The Game Interface \& Particle stability) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* Interactive Screen Simulator on Left (Grows on large screens) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-505 bg-zinc-950 p-4 border border-zinc-800 rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>EMULATOR ENGINE WORKPORT : ONLINE</span>
              </div>
              <div className="flex items-center gap-4">
                <span>STAGE: 01</span>
                <span>VSYNC: 60Hz</span>
              </div>
            </div>

            {/* Actually Playable Canvas Container */}
            <div className="relative border-x border-b border-zinc-800 bg-zinc-950 rounded-b-xl overflow-hidden flex flex-col items-center p-3">
              <canvas
                ref={canvasRef}
                style={{ width: "100%", maxWidth: "500px", height: "260px" }}
                width={500}
                height={260}
                onClick={handleCanvasClick}
                className="rounded-lg shadow-inner cursor-pointer"
              />
              <div className="w-full max-w-[500px] flex items-center justify-between mt-3 px-1 text-xxs font-mono text-zinc-505">
                <span>[KEYBOARD] 좌우: Arrow / AD, 점프: Space / Up</span>
                <button 
                  onClick={startGame}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-zinc-850 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Arena
                </button>
              </div>
            </div>
          </div>

          {/* Sprites & Metric information on Right */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SPRITE DETAIL CARD */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40">
              <h4 className="text-xxs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-4">
                PIXEL-ART CHARACTER SPRITE
              </h4>
              <div className="flex items-center gap-4 border border-dashed border-zinc-350 dark:border-zinc-80) rounded-xl p-4 bg-white dark:bg-zinc-950">
                {/* Visual Representation of Pixel character */}
                <div className="w-14 h-14 bg-emerald-500 flex items-center justify-center rounded-xs shadow-md">
                  <div className="w-10 h-10 border-2 border-white/60 relative">
                    <div className="absolute top-2 right-1 w-2.5 h-2 bg-white rounded-xs"></div>
                    <div className="absolute top-2 left-1 w-2.5 h-2 bg-white rounded-xs"></div>
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-zinc-900 dark:text-white">Player: Jade Box</span>
                  <p className="text-xxs text-zinc-400 mt-1 font-mono">Size: 22 x 22 Grid Sprite Sheet</p>
                  <p className="text-xxs text-emerald-500 font-bold mt-1.5">AABB Bound Verified</p>
                </div>
              </div>
            </div>

            {/* 60FPS CERTIFICATE CARD */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40">
              <h4 className="text-xxs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2">
                02 / RENDERING PERFORMANCE
              </h4>
              <h3 className="font-bold text-base text-zinc-950 dark:text-zinc-100 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                60 FPS Stability Card
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light">
                더블 버퍼링 기법 및 메모리 유출 유압 제어를 연동하여, 대량의 잔해 폭발 파티클 유압 연산 시에도 정밀하고 일관적인 60프레임 속도의 초음속 성능 최적화를 구축하였습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 4. 물리 엔진의 정교함 Column list section with workspace keyboard design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                03 / MECHANICAL PHYSICS
              </span>
              <h2 className="text-2.5xl font-display font-medium text-zinc-900 dark:text-white mt-2">
                물리 엔진의 정교함
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-light leading-relaxed">
                상세히 설계한 중력 가속 방정식과 저수준 박스 충돌 체크를 통해 클래식 게임 본연의 타격 조작감을 보강했습니다.
              </p>
            </div>

            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white">Collision Detection (충돌 판정)</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed font-light">
                    축 정렬 장치인 AABB(Axis-Aligned Bounding Box) 충돌 방식을 경량화해 개별 다중 머지 타일 정렬 시 실시간 오차 범위를 0.1ms 이내로 단축해 냈습니다.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white">Dynamic Gravity (동적 중력 제어)</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed font-light">
                    가속 가중 중력 공식과 등속 공식을 보정하여 낙하 시 속력이 자연스레 배가되는 묵직한 가속 조작 메커니즘을 적용했습니다.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white">Particle FX (입자 파티클 공식)</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed font-light">
                    폭파, 대시, 가스 고정 마찰 발생 시 가속 저항값과 수명을 랜덤 연동 제어해 불꽃 파편이 생생하게 흩뿌려지는 이팩트를 보강했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Setup display keyboard art on Right */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xs h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=900"
              alt="Developer workspace workstation keyboard and lights"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 5. Play Demoy Banner area with dark background */}
      <section className="bg-zinc-950 text-white py-20 text-center px-6 border-t border-zinc-900">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <Gamepad2 className="w-10 h-10 text-emerald-500 animate-pulse mb-6" />
          <h3 className="text-xl sm:text-2xl font-display font-medium text-zinc-100">
            지금 바로 에뮬레이터 버그 시뮬레이션을 즐겨 보세요!
          </h3>
          <p className="text-xs text-zinc-400 mt-3 max-w-sm leading-relaxed">
            위로 스크롤하여 에뮬레이터 화면 속 녹색 캐릭터를 조종해 보세요. 물리가 정확하게 연산됩니다!
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                const element = document.getElementById("selected-works");
                window.scrollTo({ top: 380, behavior: "smooth" });
                startGame();
              }}
              className="px-6 py-3 rounded-full bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase hover:bg-zinc-150 transition-colors"
            >
              Restart Simulation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
