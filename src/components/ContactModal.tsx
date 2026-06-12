/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageSquareCode, Mail, User, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate API call progress
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Dark overlay backdrop with blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Dialog Content container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-20">
        
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-150/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2">
            <MessageSquareCode className="w-5 h-5 text-zinc-650 dark:text-zinc-350" />
            <h3 className="font-display font-medium tracking-tight text-zinc-900 dark:text-white">
              소중한 피드백을 보내주세요
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-850 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Submission success view */
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-500 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 dark:text-white">전송 완료되었습니다!</h4>
            <p className="text-xs text-zinc-500 mt-2 max-w-xs leading-relaxed font-light">
              의견을 공유해주셔서 대단히 감사합니다. 이지성 포트폴리오를 지속적으로 개선하고 연동 테스트를 보강하는 데 귀중하게 활용하겠습니다.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={resetForm}
                className="px-5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-650 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                다른 내용 작성하기
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                창 닫기
              </button>
            </div>
          </div>
        ) : (
          /* Form layout input */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xxs text-zinc-400 font-light leading-relaxed">
              * 기재하신 피드백 메세지는 데모 시스템에 기록 보관 처리되어 지속 가능한 개발자 포트폴리오 점검에 활용됩니다.
            </p>

            <div className="space-y-1.5">
              <label className="text-xxs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-505 uppercase block">
                전송인 이름 (Your Name)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-sans text-xs focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white focus:outline-hidden dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xxs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-505 uppercase block">
                이메일 주소 (Your Email)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="email"
                  required
                  placeholder="예: address@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-sans text-xs focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white focus:outline-hidden dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xxs font-mono font-bold tracking-widest text-zinc-400 dark:text-zinc-505 uppercase block">
                보내실 의견 메시지 (Message Content)
              </label>
              <textarea
                required
                rows={4}
                placeholder="이지성 군에게 바라는 점이나, 독서 기록 및 레트로 게임 연동 피드백 등을 자유롭게 남겨주세요."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 font-sans text-xs focus:ring-1 focus:ring-zinc-950 dark:focus:ring-white focus:outline-hidden dark:text-white resize-none"
              />
            </div>

            <div className="pt-4 border-t border-zinc-150/80 dark:border-zinc-800/80 flex items-center justify-end gap-3.5">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-550 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              >
                닫기
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-1.5 px-6 py-2.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-zinc-400 border-t-zinc-100 rounded-full animate-spin"></span>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>메세지 전송</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
