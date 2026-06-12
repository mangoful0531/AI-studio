/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Book, BookMarked, Layers, Award, Sparkles, Flame } from "lucide-react";

export default function ReadingView() {
  const otherBooks = [
    {
      id: "1",
      title: "1984",
      author: "George Orwell",
      category: "소설, SF, 사회 비판",
      review: "어둡고 통제된 전체주의 사회 속에 매몰되는 인간 존엄성과, 기술이 감시 도구로 변질되었을 때의 디스토피아를 무섭도록 경고함."
    },
    {
      id: "2",
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "컴퓨터 공학, 개발 실무",
      review: "가독성이 높고 오류가 생기지 않는 가치 있는 구문을 다듬는 원칙에 대해 깊고 체계적인 배움을 선물해 준 실무 지침서."
    },
    {
      id: "3",
      title: "총, 균, 쇠",
      author: "Jared Diamond",
      category: "인류학, 역사학, 문명사",
      review: "지형적, 생태론적 변수가 어떻게 대륙 간 민족의 번성과 무기 생산 속도의 불균형을 야기했는지 지리적 요인들로 파헤침."
    },
    {
      id: "4",
      title: "해커와 화가",
      author: "Paul Graham",
      category: "컴퓨터 공학, 에세이",
      review: "우수한 코딩은 단순한 딱딱한 수식 연산이 아닌, 화가가 흰 캔버스에 붓 터치를 아로새기는 것과 같은 지적인 창조 예술임을 일깨움."
    },
  ];

  return (
    <div className="w-full pt-18 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* 1. Header Hero */}
      <section className="bg-zinc-50 dark:bg-zinc-900/30 border-b border-zinc-200/50 dark:border-zinc-850 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              ACADEMIC JOURNEY
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
              독서활동 기록
            </h1>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
              인문, 사회, 과학, 컴퓨터 공학을 아우르는 지식 넘나들기. 올바른 가치관 정립과 폭넓은 기초 과학 지식을 다지기 위해 한 페이지씩 깊숙이 성찰해 가며 축적해 온 독서 자취입니다.
            </p>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center shadow-xxs">
              <span className="text-2xl font-bold text-zinc-950 dark:text-white font-mono">12+</span>
              <p className="text-xxs text-zinc-400 font-medium tracking-wider uppercase mt-1">Reviewed Books</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl text-center shadow-xxs">
              <span className="text-2xl font-bold text-emerald-500 font-mono">1</span>
              <p className="text-xxs text-emerald-600 font-medium tracking-wider uppercase mt-1">Reading Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Book Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <span className="text-xxs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block mb-10">
          FEATURED REVIEWS
        </span>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Wide Book: 정의란 무엇인가 (Spans 8 cols on lg) */}
          <div className="lg:col-span-8 group rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-8 flex flex-col md:flex-row gap-6 hover:border-zinc-300 dark:hover:border-zinc-800 transition-all">
            <div className="flex-shrink-0 w-full md:w-44 h-64 rounded-xl overflow-hidden relative shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
                alt="Justice Book Model"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-xxs font-mono bg-zinc-900 text-white uppercase tracking-wider">
                MAIN REVIEW
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xxs font-mono text-zinc-400 font-bold tracking-wide uppercase">
                  PHILOSOPHY & ETHICS
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-zinc-950 dark:text-white mt-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  정의란 무엇인가
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-mono">저자: 마이클 샌델 (Michael Sandel) | 번역본 완독</p>
                <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 mt-5 leading-relaxed font-light">
                  공정함이란 과연 무엇이고 사회 구성원의 연대 의무는 어디까지인가에 대해 전율 어린 도덕적 자문을 유도하는 인문 명저입니다. 공리주의의 한계와 자유지상주의적 관점의 비판을 철진하게 살펴보며, 기술이 궁극적으로 연동해야 할 정의와 공공선에 기여하는 개발 모델을 갈구하게 도왔습니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xxs font-semibold bg-zinc-200/50 dark:bg-zinc-850 px-3 py-1 rounded w-fit text-zinc-650 dark:text-zinc-350 mt-6 lg:mt-0">
                <Award className="w-3.5 h-3.5 text-zinc-500" />
                <span>정보 기술자의 사회적 책임 탐독</span>
              </div>
            </div>
          </div>

          {/* Sapiens progress Book: 사피엔스 (Spans 4 cols on lg and custom dark styling) */}
          <div className="lg:col-span-4 group rounded-2xl border border-zinc-850 dark:border-zinc-800 bg-zinc-950 text-white p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] hover:border-zinc-700 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xxs font-mono text-amber-400 font-bold uppercase tracking-wide">
                  CURRENTLY READING
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold mt-4 text-zinc-100 group-hover:text-amber-300 transition-colors">
                사피엔스 (유발 하라리)
              </h3>
              <p className="text-xxs text-zinc-400 dark:text-zinc-505 mt-1 font-mono">
                유인원에서 사이보그까지의 대여정
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-6 leading-relaxed font-light">
                인류 거대 변천사의 궤적을 짚으며 농업-인지-과학 혁명이 기술 권력을 어떻게 극단으로 분배했는지 분석합니다. 뉴 인공지능 시대를 마주하는 전초 기로인 오늘날 인류의 궁극 방향성은 과연 어디서 균형을 찾아야 할지 고찰하게 만듭니다.
              </p>
            </div>

            {/* Reading progress slide */}
            <div className="mt-8 pt-4 border-t border-zinc-800">
              <div className="flex justify-between items-center text-xxs font-mono text-zinc-400 mb-2">
                <span>Reading Progress</span>
                <span className="text-amber-400 font-bold bg-zinc-900 px-1.5 py-0.5 rounded">65%</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full w-[65%] rounded-full shadow-xs"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Grid Book Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cover Card 1: Cosmos */}
          <div className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:scale-[1.01] hover:border-zinc-300 dark:hover:border-zinc-800 transition-all">
            <div>
              <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-xxs">
                <img
                  src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600"
                  alt="Cosmos galaxy background"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  COSMOS
                </div>
              </div>
              <span className="inline-block mt-6 text-xxs font-mono text-zinc-400 font-bold tracking-wide uppercase">
                SCIENCE & COSMOLOGY
              </span>
              <h4 className="text-lg font-serif font-bold text-zinc-950 dark:text-white mt-1">
                코스모스 (Carl Sagan)
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light">
                우주의 찬란한 역사와 창백한 푸른 점 지구를 부드럽게 감싸는 과학 에세이의 고전. 인간 지성의 원형인 정교함과 진리 추구 정신을 품는 올곧은 관점을 일깨웠습니다.
              </p>
            </div>
            <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4 mt-6 flex items-center justify-between text-xxs font-mono text-zinc-400">
              <span>번역 대작 완독</span>
              <span>100% Complete</span>
            </div>
          </div>

          {/* Cover Card 2: Nudge */}
          <div className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:scale-[1.01] hover:border-zinc-300 dark:hover:border-zinc-800 transition-all">
            <div>
              <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-xxs">
                <img
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600"
                  alt="Nudge book mock layout"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  NUDGE
                </div>
              </div>
              <span className="inline-block mt-6 text-xxs font-mono text-zinc-400 font-bold tracking-wide uppercase">
                BEHAVIORAL ECONOMICS
              </span>
              <h4 className="text-lg font-serif font-bold text-zinc-950 dark:text-white mt-1">
                넛지 (Richard Thaler)
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light">
                사람들의 의식을 부드럽게 유인하는 행동 대안의 과학. 사용자 조작계(UI/UX) 구축 시, 어두운 기만 패턴을 버리고 상생 배려하는 든든한 기술 구도 설계를 촉구하는 바른 교훈을 준 책.
              </p>
            </div>
            <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4 mt-6 flex items-center justify-between text-xxs font-mono text-zinc-400">
              <span>행동심리 응용 완독</span>
              <span>100% Complete</span>
            </div>
          </div>

          {/* Cover Card 3: AI Era */}
          <div className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:scale-[1.01] hover:border-zinc-300 dark:hover:border-zinc-800 transition-all">
            <div>
              <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-xxs">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
                  alt="Cyber AI lights abstract"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-serif font-bold">
                  GENERATIVE AI
                </div>
              </div>
              <span className="inline-block mt-6 text-xxs font-mono text-zinc-400 font-bold tracking-wide uppercase">
                ARTIFICIAL INTELLIGENCE
              </span>
              <h4 className="text-lg font-serif font-bold text-zinc-950 dark:text-white mt-1">
                생성형 AI 시대의 전문성
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light">
                뇌과학 전문가 김대식 교수가 짚어내는 전문성과 인간성의 겹친 미래. 단순히 주어진 소스 코드를 생성해 내는 기술자를 넘어, 주체적으로 질문하고 참된 쓸모를 조망하는 질문 역량이 핵심임을 확인했습니다.
              </p>
            </div>
            <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4 mt-6 flex items-center justify-between text-xxs font-mono text-zinc-400">
              <span>AI 윤리 도서 완독</span>
              <span>100% Complete</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 기타 도서 목록 Table Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 px-6 border-t border-zinc-250/60 dark:border-zinc-850">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              BIBLIOGRAPHY ARCHIVE
            </span>
            <h2 className="text-2xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3 flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              기타 도서 목록
            </h2>
            <p className="text-xs text-zinc-500 mt-2 font-light">
              문학과 클래식 개발 지침, 다야한 분야들을 폭넓게 갈고닦기 위해 누적 완독 완료한 조력 리스트 자료입니다.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-850 rounded-xl bg-white dark:bg-zinc-950 shadow-xxs">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 font-mono text-xxs tracking-wider uppercase border-b border-zinc-200 dark:border-zinc-850">
                <tr>
                  <th className="py-4 px-6 font-bold w-16 text-center">번호</th>
                  <th className="py-4 px-6 font-semibold w-1/4">도서 제목</th>
                  <th className="py-4 px-6 font-semibold w-1/5">저자</th>
                  <th className="py-4 px-6 font-semibold w-1/5">카테고리</th>
                  <th className="py-4 px-6 font-semibold">한 줄 감상 및 성찰 요지</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/50 dark:divide-zinc-850 text-zinc-700 dark:text-zinc-300 font-sans">
                {otherBooks.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-50/70 dark:hover:bg-zinc-900/30 transition-colors">
                    <td className="py-5 px-6 font-mono text-center text-zinc-400 font-medium text-xs">{item.id}</td>
                    <td className="py-5 px-6 font-bold text-zinc-900 dark:text-white">{item.title}</td>
                    <td className="py-5 px-6 text-zinc-500 dark:text-zinc-400 font-mono text-xs">{item.author}</td>
                    <td className="py-5 px-6 text-zinc-650 dark:text-zinc-400 text-xs">
                      <span className="px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-900 font-medium border border-zinc-200/40 dark:border-zinc-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">{item.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
