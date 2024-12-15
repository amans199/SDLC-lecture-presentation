import React from 'react';
import { motion } from 'framer-motion';

interface TimelineProps {
  phases: string[];
  currentPhase: number;
}

export const Timeline: React.FC<TimelineProps> = ({ phases, currentPhase }) => {
  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute h-1 w-full bg-gray-200 top-1/2 transform -translate-y-1/2">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentPhase / (phases.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Timeline points */}
        <div className="relative flex justify-between">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentPhase ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-white text-sm">{index + 1}</span>
              </motion.div>
              <div className="absolute w-max text-center -bottom-8 transform -translate-x-1/2 left-1/2" style={{ width: '120px' }}>
                <span className="text-sm text-gray-600 whitespace-normal">{phase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};