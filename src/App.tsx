/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Page } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import CareerView from "./components/CareerView";
import ReadingView from "./components/ReadingView";
import GameView from "./components/GameView";
import MealView from "./components/MealView";
import ContactModal from "./components/ContactModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Render the appropriate view based on current page state
  const renderCurrentView = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomeView setCurrentPage={setCurrentPage} />;
      case Page.CAREER:
        return <CareerView />;
      case Page.READING:
        return <ReadingView />;
      case Page.GAME:
        return <GameView />;
      case Page.MEAL:
        return <MealView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 transition-colors duration-300">
      
      {/* Dynamic scrolling header bar */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onContactOpen={() => setIsContactOpen(true)}
      />

      {/* Main active layout */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Footer system */}
      <Footer
        setCurrentPage={setCurrentPage}
        onContactOpen={() => setIsContactOpen(true)}
      />

      {/* Interactive feedback mail modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
