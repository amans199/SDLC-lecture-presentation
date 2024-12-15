import React from 'react';
import { motion } from 'framer-motion';

interface MethodologyAnimationProps {
  type: 'waterfall' | 'agile';
}

export const MethodologyAnimation: React.FC<MethodologyAnimationProps> = ({ type }) => {
  const phases = ['Plan', 'Build', 'Test', 'Deploy'];
  
  if (type === 'waterfall') {
    return (
      <div className="h-48 relative">
        {phases.map((phase, index) => (
          <motion.div
            key={phase}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
            className="absolute w-full h-10 flex items-center"
            style={{ top: `${index * 3}rem` }}
          >
            <div className="w-24 bg-blue-500 text-white rounded-l-lg p-2 text-sm font-medium">
              {phase}
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: index * 0.3, duration: 1 }}
              className="h-full bg-blue-200 rounded-r-lg"
            />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-48 relative">
      {[0, 1, 2].map((sprint) => (
        <motion.div
          key={sprint}
          className="flex space-x-2 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: sprint * 0.5 }}
        >
          <div className="w-16 text-sm text-gray-600 font-medium pt-1">
            Sprint {sprint + 1}
          </div>
          <div className="flex-1 flex space-x-1">
            {phases.map((phase, index) => (
              <motion.div
                key={`${sprint}-${phase}`}
                className="flex-1 h-8 bg-green-200 rounded-lg relative overflow-hidden"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: sprint * 0.5 + index * 0.15 }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500 opacity-30"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    delay: sprint * 0.5 + index * 0.15,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-green-800">
                  {phase}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};