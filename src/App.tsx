import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomePage } from './components/WelcomePage';
import { SDLCPage } from './components/SDLCPage';
import { MethodologiesPage } from './components/MethodologiesPage';
import { Navigation } from './components/Navigation';
import type { NavigationState } from './types';

const sections = ['Welcome', 'SDLC', 'Methodologies'];

export default function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    currentSection: sections[0],
    progress: 0,
  });

  const handleNavigation = (direction: 'prev' | 'next') => {
    const currentIndex = sections.indexOf(navigation.currentSection);
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= 0 && newIndex < sections.length) {
      setNavigation({
        currentSection: sections[newIndex],
        progress: (newIndex / (sections.length - 1)) * 100,
      });
    }
  };

  const renderSection = () => {
    switch (navigation.currentSection) {
      case 'SDLC':
        return <SDLCPage />;
      case 'Methodologies':
        return <MethodologiesPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={navigation.currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="pb-24"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      <Navigation
        currentSection={navigation.currentSection}
        onNavigate={handleNavigation}
        progress={navigation.progress}
        canNavigateBack={sections.indexOf(navigation.currentSection) > 0}
        canNavigateForward={sections.indexOf(navigation.currentSection) < sections.length - 1}
      />
    </div>
  );
}