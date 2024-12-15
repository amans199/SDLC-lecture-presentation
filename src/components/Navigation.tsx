import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (direction: 'prev' | 'next') => void;
  progress: number;
  canNavigateBack: boolean;
  canNavigateForward: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onNavigate,
  progress,
  canNavigateBack,
  canNavigateForward,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/80 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-8 p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('prev')}
          disabled={!canNavigateBack}
          className={`p-3 rounded-full ${
            canNavigateBack
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600 mt-2">{currentSection}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('next')}
          disabled={!canNavigateForward}
          className={`p-3 rounded-full ${
            canNavigateForward
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};