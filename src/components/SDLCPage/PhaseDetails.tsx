import React from 'react';
import { motion } from 'framer-motion';
import type { SDLCPhaseType } from '../../types';

interface PhaseDetailsProps {
  phase: SDLCPhaseType;
}

export const PhaseDetails: React.FC<PhaseDetailsProps> = ({ phase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl p-8 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{phase.title}</h3>
      <p className="text-gray-600 mb-6">{phase.description}</p>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-700">Key Activities:</h4>
        <ul className="list-disc list-inside space-y-2">
          {phase.activities.map((activity, index) => (
            <li key={index} className="text-gray-600">{activity}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">Deliverables:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {phase.deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <p className="text-gray-700">{deliverable}</p>
            </div>
          ))}
        </div>
      </div>

      {phase.example && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Real-world Example:</h4>
          <p className="text-blue-700">{phase.example}</p>
        </div>
      )}
    </motion.div>
  );
};