/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Page } from "../types";
import { ArrowUpRight, Gamepad2, BookOpen, Utensils, Compass, Code, Layers, MessageSquare, ArrowDown, ChevronRight, BookOpenCheck } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const handleViewProjects = () => {
    // Scroll down to the selected works section
    const element = document.getElementById("selected-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1920"
            alt="Cyber Towers"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-zinc-950/40 to-zinc-950"></div>
          {/* Subtle grid lines matching retro background feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-xs mb-8 text-xs font-mono text-zinc-300 tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            ACTIVE STUDENT PORTFOLIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight space-y-3"
          >
            <span className="block text-zinc-400 font-light">꿈을 향해 나아가는 기록:</span>
            <span className="block bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              진심을 담은 포트폴리오
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-sans font-light leading-relaxed"
          >
            고등학교 생활의 열정과 창의성을 담았습니다. 단순한 성적표를 넘어, 세상을 바꾸는 따뜻한 기술과 지식을 탐구하며 채워나간 소중한 배움의 흔적들을 소개합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleViewProjects}
              className="px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm tracking-wide shadow-lg hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => {
                setCurrentPage(Page.CAREER);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm tracking-wide hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all cursor-pointer"
            >
              LEARN MORE
            </button>
          </motion.div>
        </div>

        {/* Scroll down mouse */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer" onClick={handleViewProjects}>
          <span className="text-xxs tracking-widest font-mono uppercase">scroll down</span>
          <div className="w-5 h-8 rounded-full border-2 border-zinc-700 flex justify-center pt-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
          </div>
        </div>
      </section>

      {/* 2. Selected Works Section */}
      <section id="selected-works" className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6 scroll-mt-18">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <p className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-widest gap-2 flex items-center">
                <span>01</span>
                <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-800"></span>
                <span>CHRONICLES OF GROWTH</span>
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mt-3 text-zinc-900 dark:text-white">
                Selected Works
              </h2>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
              인공지능, 컴퓨터공학, 인문사회학적 융합독서, 그리고 재학생 커뮤니티 서비스를 담은 하이라이트 프로젝트 카드입니다.
            </p>
          </div>

          {/* Core bento card deck */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Retro Game */}
            <div
              onClick={() => {
                setCurrentPage(Page.GAME);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/55 p-6 md:p-8 flex flex-col justify-between hover:scale-[1.015] hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span className="text-xxs font-mono font-medium px-2 py-0.5 rounded-md bg-violet-100/50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400">
                    SOFTWARE DEVELOPMENT
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  레트로게임 개발 프로젝트 (Neo-Nostalgia)
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
                  C++과 OpenGL 웹 컴파일 빌드를 이용해 구현한 커스텀 중력식 기반 2D 플랫폼 게임 제작 프로젝트. 오프라인 가상 물리를 실시간 픽셀 충돌 탐지를 통해 안정적으로 구사하여 해커톤 은상을 수상했습니다.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="font-mono text-xs text-zinc-400">C++ / OpenGL / Custom Physics</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Project 2: Reading Records */}
            <div
              onClick={() => {
                setCurrentPage(Page.READING);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/55 p-6 md:p-8 flex flex-col justify-between hover:scale-[1.015] hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xxs font-mono font-medium px-2 py-0.5 rounded-md bg-indigo-100/50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                    ACADEMIC RESEARCH
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  인문/사회/기술 독서 활동 기록
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
                  정의란 무엇인가(마이클 샌델), 사피엔스, 코스모스, 클린코드 등 다분야 독서를 통한 깊이 있는 사회 윤리 성찰과 균형 잡힌 인문 공학 양방성 가치관을 다듬어 온 소중한 기록입니다.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="font-mono text-xs text-zinc-400">Philosophy / Tech Ethics / Science</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Project 3: School Meal Helper */}
            <div
              onClick={() => {
                setCurrentPage(Page.MEAL);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/55 p-6 md:p-8 flex flex-col justify-between hover:scale-[1.015] hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <span className="text-xxs font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-100/50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                    SCHOOL SERVICES
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  청라 급식 도우미 서비스
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
                  재학생들의 건강한 학교생활을 위해 알레르기 유발 항원을 실시간으로 선제 점검하고, 일일 칼로리 파악 및 주간별 급식 일정을 모바일 홈 위젯으로 제공하는 학내 맞춤 지원형 든든한 시스템.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="font-mono text-xs text-zinc-400">React / Firebase / Tailwinds</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Project 4: Career Plan */}
            <div
              onClick={() => {
                setCurrentPage(Page.CAREER);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group cursor-pointer rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/55 p-6 md:p-8 flex flex-col justify-between hover:scale-[1.015] hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-xs transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xxs font-mono font-medium px-2 py-0.5 rounded-md bg-amber-100/50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                    CAREER ROADMAP
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  진로 탐색 및 커리어 비전
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
                  사용자 경험 혁신과 가치 있는 사회 기여 기술 발굴을 목표로, 견실한 소프트웨어 설계 역량과 소통 협력 윤리를 탄탄하게 장전에 나가는 명확하고 열정적인 개발 분야 로드맵입니다.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="font-mono text-xs text-zinc-400">Goals / Core Value / Life Timelines</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values & Impact Section */}
      <section className="py-24 bg-zinc-950 text-white px-6 relative overflow-hidden">
        {/* Subtle decorative lights circles */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-violet-600/10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-600/10 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xxs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
              PHILOSOPHY AND IMPACT
            </h2>
            <h3 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-zinc-100 mt-3 leading-relaxed">
              단순한 기록을 넘어, 새로운 가치를 만드는 성장을 지향합니다.
            </h3>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center p-6 border border-zinc-800/60 rounded-xl bg-zinc-900/25">
              <span className="text-5xl md:text-6xl font-display font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                15+
              </span>
              <span className="text-sm font-semibold tracking-wider font-mono mt-4 text-zinc-400 uppercase">
                Completed Projects
              </span>
              <p className="text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed font-light">
                구현 완료한 토이 프로젝트 및 실제 서비스 디자인 수
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border border-zinc-800/60 rounded-xl bg-zinc-900/25">
              <span className="text-5xl md:text-6xl font-display font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                300h+
              </span>
              <span className="text-sm font-semibold tracking-wider font-mono mt-4 text-zinc-400 uppercase">
                Coding & Research
              </span>
              <p className="text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed font-light">
                코딩 탐구 및 알고리즘 문제 해결, 학술 연구에 성실히 쏟은 시간
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border border-zinc-800/60 rounded-xl bg-zinc-900/25">
              <span className="text-5xl md:text-6xl font-display font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                50+
              </span>
              <span className="text-sm font-semibold tracking-wider font-mono mt-4 text-zinc-400 uppercase">
                Books Read & Analyzed
              </span>
              <p className="text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed font-light">
                인문, 사회, 자연과학, 컴퓨터 공학을 넘나들며 통섭 분석한 양질의 도서들
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Reading Journey Teaser Section */}
      <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Descriptive Left Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase">
                02 / EXPLORING THOUGHTS
              </span>
              <h2 className="text-3xl font-display font-medium tracking-tight text-zinc-900 dark:text-white">
                Reading Journey
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-light">
                독서를 통해 세상을 보는 깊이 있는 시각을 기르고, 기술의 사회적 책임과 역할에 대해 고민합니다. 마이클 샌델에서부터 로버트 마틴까지, 학술 및 고전 명저 속의 지혜를 포트폴리오에 녹였습니다.
              </p>
              <div className="mt-2">
                <button
                  onClick={() => {
                    setCurrentPage(Page.READING);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white font-medium text-xs tracking-wide hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <BookOpenCheck className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                  독서 기록 전체 확인하기
                </button>
              </div>
            </div>

            {/* Simulated interactive preview panel on Right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1: Sandel */}
              <div className="p-5 rounded-xl border border-zinc-200/50 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between h-56 hover:-translate-y-1 transition-all duration-200 shadow-xxs">
                <div>
                  <span className="font-mono text-xxs px-2 py-0.5 rounded-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">인문/사회</span>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-white mt-4">정의란 무엇인가</h4>
                  <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-2 font-mono">저자: 마이클 샌델</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 pt-3 mt-4 text-xxs text-zinc-500">
                  <span>독서 완료</span>
                  <span className="font-mono">100%</span>
                </div>
              </div>

              {/* Card 2: Sapiens */}
              <div className="p-5 rounded-xl border border-zinc-200/50 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between h-56 hover:-translate-y-1 transition-all duration-200 shadow-xxs">
                <div>
                  <span className="font-mono text-xxs px-2 py-0.5 rounded-sm bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400">인류학</span>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-white mt-4">사피엔스</h4>
                  <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-2 font-mono">저자: 유발 하라리</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 pt-3 mt-4 text-xxs text-zinc-500">
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    읽는 중
                  </span>
                  <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-zinc-650 dark:text-zinc-350">65%</span>
                </div>
              </div>

              {/* Card 3: Clean Code */}
              <div className="p-5 rounded-xl border border-zinc-200/50 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between h-56 hover:-translate-y-1 transition-all duration-200 shadow-xxs">
                <div>
                  <span className="font-mono text-xxs px-2 py-0.5 rounded-sm bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-400">컴퓨터공학</span>
                  <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-white mt-4">Clean Code</h4>
                  <p className="text-xxs text-zinc-400 dark:text-zinc-500 mt-2 font-mono">저자: 로버트 C. 마틴</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 pt-3 mt-4 text-xxs text-zinc-500">
                  <span>독서 완료</span>
                  <span className="font-mono">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. bottom CTA */}
      <section className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-850/60 py-24 text-center px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-display font-medium tracking-tight text-zinc-900 dark:text-white leading-relaxed">
            더 많은 이야기가 궁금하신가요?
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mt-3 leading-relaxed font-light">
            미래를 설계하는 실천적 비전과, 가치를 창출하는 여정의 구체적인 가치를 살펴보세요.
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                setCurrentPage(Page.CAREER);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-xs tracking-wider transition-all duration-200 shadow-md hover:scale-102 active:scale-98"
            >
              진로 계획 확인하기
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
