import React from 'react';
import { motion } from 'framer-motion';
import type { SDLCPhaseType } from '../../types';

interface SDLCPhaseProps {
  phase: SDLCPhaseType;
  isActive: boolean;
  onClick: () => void;
}

export const SDLCPhase: React.FC<SDLCPhaseProps> = ({ phase, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer rounded-xl p-6 transition-colors ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">{phase.icon}</div>
        <div>
          <h3 className={`text-lg font-semibold ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {phase.title}
          </h3>
          <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
            {phase.shortDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
};