/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Page } from "../types";
import { Compass, Users, HeartHandshake, ShieldCheck, Cpu, Lightbulb, BookOpen, Layers, Milestone, ArrowRight } from "lucide-react";

export default function CareerView() {
  const coreValues = [
    {
      title: "사용자 중심 설계 (User Centered)",
      description: "기술의 시작과 끝은 항상 사람이어야 합니다. 사용자의 실제 불편함과 목소리에 진심으로 귀 기울여, 복잡한 기능을 직관적이고 따뜻한 경험으로 변화시키는 것을 지향합니다.",
      icon: Lightbulb,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-200/50 dark:border-amber-900/30",
    },
    {
      title: "지속 가능한 기술 (Sustainable Tech)",
      description: "단순히 작동하는 결과물에 그치지 않고, 가독성이 높고 유지보수하기 쉬우며 중복을 최소화한 설계 원칙을 선호합니다. 사회에 선한 지식과 기술 전파를 실천하고자 노력합니다.",
      icon: Cpu,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-200/50 dark:border-emerald-900/30",
    },
    {
      title: "협업과 성장 (Cooperative Growth)",
      description: "훌륭한 소프트웨어는 기여하는 동료들 간의 깊은 존중과 소통에서 비롯됨을 믿습니다. 탐구한 지식을 동료들에게 아낌없이 깃헙이나 문서로 활발히 공유하며 동반 성장합니다.",
      icon: HeartHandshake,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-200/50 dark:border-blue-900/30",
    },
    {
      title: "신뢰할 수 있는 개발자 (Reliable Developer)",
      description: "코드 설계 시 기한과 안정성을 엄수합니다. 미처 발견하지 못한 엣지 케이스 예외 처리에 만전을 기하고 보안 취약점을 주도적으로 개선해, 사용자에게 신뢰를 배달합니다.",
      icon: ShieldCheck,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-200/50 dark:border-violet-900/30",
    },
  ];

  const timelineEvents = [
    {
      period: "2024.03 - PRESENT",
      title: "청라 급식 도우미 서비스 리드 개발",
      description: "재학생들의 영양 섭취 정보 탐색 편의를 위해 급식 식단 및 일별/주간별 칼로리, 단백질 등을 정밀 파악하고 체질별 특정 유발 항원(알레르기)을 선제 필터링해주는 모바일 위젯 연동형 웹 서비스를 종합 기획하고 핵심 개발을 전담하였습니다.",
      skills: ["React", "Firebase Store", "Firebase Auth", "Tailwind CSS"],
    },
    {
      period: "2023.09 - 2023.12",
      title: "정보보안 동아리 프로젝트 'LockBox'",
      description: "대칭키 AES-256 암호화 알고리즘 설계를 바탕으로 하여, 개인의 민감 자산인 온라인 비밀번호 목록이나 프라이빗 노트를 인트라넷이 없는 오프라인 상태에서도 강력하게 난독화한 뒤 안전하게 SQLite 로컬 데이터베이스에 저장해 두는 경량 메모 보안 솔루션을 제작했습니다.",
      skills: ["Python", "PyQt5", "AES-256", "Cryptography"],
    },
    {
      period: "2023.05",
      title: "교내 레트로 게임 개발 해커톤 은상 수상",
      description: "C++과 그래픽 API인 OpenGL 시스템 프레임워크를 기반으로 모던 조작계를 결합해 탄생시킨 복고풍 SF 2D 슈터. 지형지물 충돌 박스 연산 및 자체 역에너지 가중 중력 식을 정교한 게임 엔진 구조로 독자 구현해 좋은 심사 성적을 획득했습니다.",
      skills: ["C++", "OpenGL", "GLEW/GLFW", "Physics Engine"],
    },
    {
      period: "2022.11 - 2023.02",
      title: "알고리즘 문제 해결 및 자료구조 지식 함양",
      description: "완전 탐색, 이분 탐색, BFS/DFS 등의 그래프 제어 기법을 거쳐 동적 계획법(DP) 및 백트래킹 이론까지 알고리즘 백준(BOJ) 및 프로그래머스 등의 평가 플랫폼 내 200문항 이상을 오답 풀이와 함께 깊이 파헤쳤습니다.",
      skills: ["Python", "C++", "Data Structure", "BOJ Silver+"],
    },
  ];

  return (
    <div className="w-full pt-18">
      {/* 1. Header Hero Panel */}
      <section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-850 px-6 py-20 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              CAREER PATHWAY
            </span>
            <h1 className="text-3xl sm:text-4.5xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
              더 나은 세상을 만드는 기술,<br />
              그 여정의 시작
            </h1>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 mt-5 leading-relaxed">
              단순한 오토 파일럿 코드 작성을 넘어 사용자 경험을 섬세하고 치열하게 고민하고 혁신하여, 실생활에 긍정적인 가치를 안겨 주는 온기 있는 개발 자취를 그려 가고 싶습니다.
            </p>
          </div>
          <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center transform hover:rotate-6 transition-transform shadow-lg">
            <Milestone className="w-16 h-16 text-white dark:text-zinc-900" />
          </div>
        </div>
      </section>

      {/* 2. Core Dev Values Section */}
      <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-medium tracking-widest text-zinc-400 uppercase">
                VALUES & MISSION
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
                진로 핵심 기둥
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
                미래를 설계하는 네 가지 핵심 가치와 구체적인 지향점입니다. 기술적 지식의 완성을 지향하는 동시에, 소통과 나눔을 최우선시하여 팀과 어우러져 움직입니다.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border ${val.borderColor} bg-zinc-50 dark:bg-zinc-900/40 hover:shadow-xs transition-shadow duration-200`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${val.bgColor} ${val.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white">
                      {val.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3.5 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Landscape Workspace Image banner */}
      <section className="h-64 sm:h-80 relative overflow-hidden bg-zinc-900">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
          alt="Workspace Coding Grid"
          className="w-full h-full object-cover opacity-45"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/40"></div>
        <div className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto text-white">
          <p className="text-xs font-mono tracking-widest text-emerald-400">RESEARCH & PRACTICE</p>
          <p className="text-base sm:text-lg font-serif italic mt-2 text-zinc-200">
            "The best way to predict the future is to invent it." — Alan Kay
          </p>
        </div>
      </section>

      {/* 4. Timeline (활동 내역) */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center sm:text-left mb-16">
            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase">
              GROWTH ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
              활동 내역 (Timeline)
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light max-w-xl">
              어려운 알고리즘 문제 정량 해결 단계부터 시작하여, 기획 및 단독 엔진 구축, 교내 정보 교류 웹 통합 솔루션 개발 리드까지 차분히 밟아 올린 발자국입니다.
            </p>
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l border-zinc-250 dark:border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
            {timelineEvents.map((evt, idx) => {
              return (
                <div key={idx} className="relative group">
                  {/* Timeline point dot */}
                  <span className="absolute -left-[31px] sm:-left-[47px] top-1 w-4.5 h-4.5 rounded-full border-3 border-zinc-50 dark:border-zinc-950 bg-zinc-900 dark:bg-white group-hover:scale-120 group-hover:bg-emerald-500 transition-all"></span>

                  <span className="inline-block font-mono text-xs font-bold tracking-wider text-zinc-400 dark:text-zinc-505 mb-2">
                    {evt.period}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light">
                    {evt.description}
                  </p>

                  {/* Badges list */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {evt.skills.map((sk, sidx) => (
                      <span
                        key={sidx}
                        className="text-xxs px-2.5 py-1 rounded bg-zinc-200/50 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-350 font-medium font-mono"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
