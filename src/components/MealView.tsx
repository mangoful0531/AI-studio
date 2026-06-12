/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Utensils, AlertTriangle, ShieldCheck, Heart, Sparkles, Smartphone, Eye, Settings2, Calendar, CheckSquare, Info } from "lucide-react";

export default function MealView() {
  const [activeTab, setActiveTab] = useState<"LUNCH" | "DINNER" | "WEEK">("LUNCH");
  
  // Allergy toggles state
  const [allergies, setAllergies] = useState<{ [key: string]: boolean }>({
    "돼지고기 (Pork)": false,
    "대두 (Soy)": false,
    "밀 (Wheat)": false,
    "계란 (Egg)": false,
    "오징어 (Squid)": false,
    "우유 (Milk)": false,
  });

  const toggleAllergy = (key: string) => {
    setAllergies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Lunch items
  const lunchMenu = [
    { id: "01", name: "발아현미밥", contains: ["탄수화물", "현미"] },
    { id: "02", name: "순두부찌개", contains: ["대두 (Soy)", "우유 (Milk)", "조개", "밀 (Wheat)", "돼지고기 (Pork)"], isDangerous: false },
    { id: "03", name: "간장돈육불고기", contains: ["돼지고기 (Pork)", "대두 (Soy)", "밀 (Wheat)", "매실액"], isDangerous: false },
    { id: "04", name: "오징어채무침", contains: ["오징어 (Squid)", "밀 (Wheat)", "고추장양념"], isDangerous: false },
    { id: "05", name: "배추김치 & 멜론", contains: ["김치", "멜론"] },
  ];

  // Dinner items
  const dinnerMenu = [
    { id: "01", name: "가쓰오우동", contains: ["밀 (Wheat)", "대두 (Soy)", "계란 (Egg)", "가쓰오다시"] },
    { id: "02", name: "모듬수제탕수육", contains: ["돼지고기 (Pork)", "밀 (Wheat)", "대두 (Soy)", "파인애플소스"] },
    { id: "03", name: "참치단무지주먹밥", contains: ["쌀", "참치", "대두 (Soy)", "김가루"] },
    { id: "04", name: "포기김치 & 요구르트", contains: ["김치", "우유 (Milk)", "젖산균"] },
  ];

  // Check if item contains any selected allergy trigger
  const checkHasAllergyTrigger = (containsList: string[]) => {
    return containsList.some((ingredient) => {
      // Find matching allergy key that is active
      const matchingKey = Object.keys(allergies).find(
        (key) => key.toLowerCase().includes(ingredient.split(" (")[0].toLowerCase()) && allergies[key]
      );
      return !!matchingKey;
    });
  };

  return (
    <div className="w-full pt-18 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* 1. Header Hero Area */}
      <section className="bg-zinc-50 dark:bg-zinc-900/40 border-b border-zinc-200/50 dark:border-zinc-850 px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-555 uppercase">
              PROJECT / SCHOOL SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-3">
              청라 급식 도우미
            </h1>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 mt-4 max-w-xl leading-relaxed">
              재학생의 활기찬 급식 생활을 이끌어 줄 세밀한 라이프 위젯 허브. 실시간 식단 분석, 알레르기 수시 점검, 그리고 위젯 연동 메커니즘을 경험해 보세요.
            </p>
          </div>
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
            <Utensils className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* 2. 오늘의 식단 Card UI Area */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Main Lunch Card Panel */}
          <div className="lg:col-span-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-zinc-950 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-150/70 dark:border-zinc-850 pb-6 mb-6">
              <div>
                <p className="text-emerald-500 font-mono text-xs font-bold tracking-wider">TODAY'S MENU PREVIEW</p>
                <h2 className="text-xl sm:text-2.5xl font-display font-medium tracking-tight mt-1 text-zinc-900 dark:text-white">
                  오늘의 식단 · <span className="text-zinc-500 dark:text-zinc-400">2024년 5월 22일 수요일</span>
                </h2>
              </div>
              
              {/* Daily view switch selectors */}
              <div className="flex rounded-lg bg-zinc-100 dark:bg-zinc-900 p-1 font-sans text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("LUNCH")}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === "LUNCH"
                      ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xxs"
                      : "text-zinc-502 dark:text-zinc-400 hover:text-zinc-950"
                  }`}
                >
                  중식 (Lunch)
                </button>
                <button
                  onClick={() => setActiveTab("DINNER")}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeTab === "DINNER"
                      ? "bg-white dark:bg-zinc-800 text-zinc-505 dark:text-white shadow-xxs"
                      : "text-zinc-502 dark:text-zinc-400 hover:text-zinc-950"
                  }`}
                >
                  석식 (Dinner)
                </button>
              </div>
            </div>

            {/* Nutritive Score Circles Row */}
            <div className="grid grid-cols-3 gap-4 mb-8 bg-zinc-50 dark:bg-zinc-900/40 p-4 rounded-xl border border-zinc-150 dark:border-zinc-850">
              <div className="text-center py-2">
                <p className="text-xxs font-mono font-bold tracking-wider text-zinc-400 uppercase">kcal energy</p>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mt-1">842</p>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden mx-auto max-w-[80px]">
                  <div className="bg-emerald-500 h-full w-[78%] rounded-full"></div>
                </div>
              </div>

              <div className="text-center py-2 border-x border-zinc-200 dark:border-zinc-800">
                <p className="text-xxs font-mono font-bold tracking-wider text-zinc-400 uppercase">Protein (g)</p>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mt-1">34.2</p>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden mx-auto max-w-[80px]">
                  <div className="bg-indigo-500 h-full w-[65%] rounded-full"></div>
                </div>
              </div>

              <div className="text-center py-2">
                <p className="text-xxs font-mono font-bold tracking-wider text-zinc-400 uppercase">Calcium (mg)</p>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white mt-1">210</p>
                <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden mx-auto max-w-[80px]">
                  <div className="bg-amber-500 h-full w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Event message banner */}
            <div className="flex gap-3 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl p-4 mb-6 text-xs leading-relaxed text-indigo-705 dark:text-indigo-350 font-light">
              <Info className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
              <p>
                오늘은 <strong>'수다날'(수요일은 다 먹는 날)</strong>입니다! 맛있는 급식을 남김없이 전부 먹으면 퇴식구 환경 스태프를 통해 모바일 보너스 스탬프 적립 쿠폰이 지급되오니 많은 참여 바랍니다.
              </p>
            </div>

            {/* Menu standard list elements */}
            <div className="space-y-3.5">
              <span className="text-xxs font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                {activeTab === "LUNCH" ? "중식 급식 구성품 목록" : "석식 급식 구성품 목록"}
              </span>

              {/* Render dynamic items according to tab state */}
              {(activeTab === "LUNCH" ? lunchMenu : dinnerMenu).map((dish) => {
                const isTriggered = checkHasAllergyTrigger(dish.contains);
                return (
                  <div
                    key={dish.id}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isTriggered
                        ? "border-amber-300 dark:border-amber-900/40 bg-amber-500/5 hover:bg-amber-500/10"
                        : "border-zinc-150 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-900/25"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-zinc-400 font-semibold">{dish.id}</span>
                      <div>
                        <span className="text-sm font-bold text-zinc-950 dark:text-white">
                          {dish.name}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {dish.contains.map((elem, eIdx) => (
                            <span
                              key={eIdx}
                              className={`text-[10px] px-1.5 py-0.2 rounded-sm font-light ${
                                allergies[elem]
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400 font-mono font-medium"
                                  : "text-zinc-400 dark:text-zinc-505"
                              }`}
                            >
                              {elem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Allergy Hazard indicator alert */}
                    {isTriggered && (
                      <span className="flex items-center gap-1.5 text-xxs font-semibold bg-amber-500/10 border border-amber-300/30 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-sm animate-pulse">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        알레르기 함유 위험!
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Allergy Configuration sidebar on Right */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2 mb-4">
                <Settings2 className="w-4.5 h-4.5 text-zinc-505 dark:text-zinc-400" />
                <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  ALLERGY FILTER SWITCH
                </h4>
              </div>
              <p className="text-xxs text-zinc-500 leading-relaxed max-w-sm mb-6 font-light">
                개인 체질에 맞추어 알레르기 유발 항원을 아래 스위치에서 골라 활성화해 보세요. 위의 급식 일괄 메뉴에서 해당 식품이 들어간 음식에 즉각 경고 알림 표시가 연동 전환됩니다!
              </p>

              {/* Allergy Toggles Deck */}
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(allergies).map((val) => {
                  const isActive = allergies[val];
                  return (
                    <button
                      key={val}
                      onClick={() => toggleAllergy(val)}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs font-semibold font-sans transition-all cursor-pointer ${
                        isActive
                          ? "bg-amber-500 border-amber-500 text-white shadow-xxs"
                          : "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-850 text-zinc-650 dark:text-zinc-350 hover:bg-zinc-100"
                      }`}
                    >
                      <span className="truncate">{val.split(" (")[0]}</span>
                      <CheckSquare className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? "opacity-100" : "opacity-20"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Health Info guide */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-850 bg-indigo-500/5 text-zinc-900 dark:text-zinc-100">
              <h4 className="text-xxs font-mono font-semibold tracking-widest text-indigo-500 uppercase mb-3">
                SCHOOL HEALTH POLICY
              </h4>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-350 font-light">
                급식 알레르기는 단순 불쾌감을 넘어 심한 경우 아나필락시스 쇼크와 기도 막힘을 초래할 수 있습니다. 청라고등학교 보건실은 본 도우미 위젯 소프트웨어의 선제 차단 장치를 적극 활용하는 것을 권고드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Allergy Info Section (Green vegetables plate alongside detail text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              02 / MEAL FILTERING SYSTEM
            </span>
            <h2 className="text-2.5xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-1">
              알레르기 유발 식품 자동 필터링 시스템
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-3">
              개인 맞춤형 알레르기 유발 식품 알림 및 차단 필터링 시스템을 정교하게 설계하여 학생들이 안심하고 매력적인 급식을 섭취할 수 있도록 도왔습니다. 학부모 마이룸이나 본인의 프로필 환경설정에 일회성 등급(예: 밀, 우유, 계란, 조개 등)을 설정해 주시면, 매일 오전 식기 매칭 서버가 영양 일지 데이터를 조회하여 특정 위험인자 검출 시 해당 일주일 급식 메뉴 리스트에 하이라이트 경고를 자동 출력합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">식품안전의약처 영양 데이터베이스 교차 대조</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">재학생 맞춤형 이상 반응 실시간 케어</span>
              </div>
            </div>
          </div>

          {/* Right layout image fresh greens */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xs h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=700"
              alt="Fresh spinach healthy greens bowl mockup"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* 4. Application Preview layout (Smartphone representation with dynamic widget layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Smartphone device shell mockup on Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-[480px] bg-zinc-900 rounded-[35px] border-6 border-zinc-800 shadow-xl overflow-hidden p-3.5">
              {/* Camera Notch top */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-800 rounded-full z-10"></div>

              {/* Simulated Inner Screen App */}
              <div className="w-full h-full bg-zinc-950 text-white rounded-[26px] p-4 flex flex-col justify-between select-none">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mt-2">
                    <span>Clean Service</span>
                    <span>9:41 AM</span>
                  </div>

                  {/* Widget Container */}
                  <div className="mt-8 bg-zinc-900 rounded-2xl p-3 border border-zinc-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-mono font-bold text-emerald-400">청라 급식 위젯</span>
                      <span className="text-[8px] text-zinc-500">2024.05.22</span>
                    </div>
                    <div className="border-t border-zinc-800 pt-2 text-[11px]">
                      <p className="font-bold text-zinc-200">오늘의 중식 식단</p>
                      
                      <ul className="mt-2 space-y-1 text-[9px] font-light text-zinc-400">
                        <li>• 발아현미밥</li>
                        <li className="text-amber-400 font-medium">• 순두부찌개⚠️</li>
                        <li>• 간장돈육불고기</li>
                        <li>• 오징어채무침</li>
                        <li>• 배추김치 & 멜론</li>
                      </ul>
                    </div>
                    <div className="mt-3 text-[8px] font-mono bg-zinc-950 text-zinc-505 p-1.5 rounded-md flex justify-between">
                      <span>Total kcal:</span>
                      <span className="font-bold text-emerald-500">842 kcal</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <div className="w-16 h-1 bg-zinc-800 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description on Right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              03 / CROSS-PLATFORM WIDGET
            </span>
            <h2 className="text-2.5xl font-display font-medium tracking-tight text-zinc-900 dark:text-white mt-1">
              모바일 홈 위젯 서비스 연동
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mt-3">
              매 급식 시간마다 학생들이 모바일 브라우저를 켜서 청라 아케이드 포탈 사이트에 수시 접속해야만 정보를 확인하는 전통적인 귀찮음을 해소하고자 모바일 홈화면 통합 위젯 시스템을 특설 패킹하였습니다. iOS WidgetKit 설계 및 Android Glance API 규격을 모사하여, 사용자가 휴대폰 잠금 화면이나 바탕 화면을 켜자마자 당일 영유아 및 고등학교 급식 메뉴가 실시간으로 수유되어 아침 피크 시간대에 신속하게 아지트를 캡쳐할 수 있게 도왔습니다.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-4 border border-zinc-200/50 dark:border-zinc-850 rounded-xl max-w-md">
              <span className="font-mono text-[10px] font-bold text-emerald-500 uppercase block mb-1">
                WIDGET COMPATIBILITY SUCCESS
              </span>
              <p className="text-xxs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
                본 이지성 포트폴리오의 급식 도우미 서비스는 크로스 브라우저 웹 위젯 소스(W3C Manifest JSON)를 수여하여 간편하게 로컬 단말기에 패치 연동시킬 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
