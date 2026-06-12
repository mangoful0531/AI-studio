/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Page } from "../types";
import { Github, Instagram, Linkedin, Mail, Heart, GraduationCap } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onContactOpen: () => void;
}

export default function Footer({ setCurrentPage, onContactOpen }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-850 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Bio segment */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-zinc-900 dark:bg-white flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white dark:text-zinc-900" />
            </div>
            <span className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-white">
              이지성 STUDENT PORTFOLIO
            </span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
            배움을 통해 더 따뜻하고 나은 세상을 만들 기술을 생각합니다. 
            단순히 작동하는 비즈니스 코드를 넘어 일상의 문제를 해결하고 
            삶의 즐거움과 안심을 더하는 개발을 꿈꿉니다.
          </p>
          <div className="flex items-center gap-3 mt-2 text-zinc-400 dark:text-zinc-600">
            <a
              href="mailto:jiseong.dev@example.com"
              onClick={(e) => {
                e.preventDefault();
                onContactOpen();
              }}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="Github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm font-medium">
            <li>
              <button
                onClick={() => {
                  setCurrentPage(Page.HOME);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                홈 (Home)
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(Page.CAREER);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                진로 계획 (Career)
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(Page.READING);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                독서활동 기록 (Reading)
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(Page.GAME);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                레트로게임 개발 (Retro Game)
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(Page.MEAL);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                청라 급식 도우미 (Meal Helper)
              </button>
            </li>
          </ul>
        </div>

        {/* School Information & Slogan */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
            Contact Info
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
            <li>
              <span className="font-bold text-zinc-700 dark:text-zinc-300">학교:</span> 청라고등학교 재학
            </li>
            <li>
              <span className="font-bold text-zinc-700 dark:text-zinc-300">이메일:</span> lee.js@student.school.kr
            </li>
            <li className="pt-2 text-xxs tracking-wider font-mono text-zinc-400 dark:text-zinc-600 block">
              COORDINATES: UTC +09:00
            </li>
          </ul>
        </div>
      </div>

      {/* Copyblock \& fine print */}
      <div className="max-w-7xl mx-auto border-t border-zinc-200/60 dark:border-zinc-800/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-600">
        <p>
          &copy; {currentYear} 이지성 Jiseong Lee. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>incorporating technology & empathy</span>
        </p>
      </div>
    </footer>
  );
}
