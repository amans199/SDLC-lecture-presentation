import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  GitMerge,
  Users,
  Calendar,
  ListTodo,
  BarChart
} from 'lucide-react';
import { MethodologyAnimation } from './MethodologyAnimation';

const methodologies = [
  {
    id: 'waterfall',
    title: 'Waterfall',
    description: 'A linear, sequential approach to software development',
    features: [
      'Sequential phases',
      'Clear documentation',
      'Structured approach',
      'Defined requirements upfront'
    ],
    pros: [
      'Simple and easy to understand',
      'Well-documented process',
      'Clear milestones',
      'Works well for small projects'
    ],
    cons: [
      'Inflexible to changes',
      'Late testing phase',
      'High risk and uncertainty',
      'Long delivery time'
    ],
    icon: <GitBranch className="w-12 h-12 text-blue-500" />
  },
  {
    id: 'agile',
    title: 'Agile',
    description: 'An iterative approach that emphasizes flexibility and customer satisfaction',
    features: [
      'Iterative development',
      'Customer collaboration',
      'Adaptive planning',
      'Continuous delivery'
    ],
    pros: [
      'Flexible to changes',
      'Early and continuous delivery',
      'Better customer satisfaction',
      'Reduced risks'
    ],
    cons: [
      'Less predictable',
      'Requires experienced team',
      'Documentation can be overlooked',
      'Scope creep potential'
    ],
    icon: <GitMerge className="w-12 h-12 text-green-500" />
  }
];

const features = [
  {
    title: 'Team Collaboration',
    description: 'Different approaches to team organization and communication',
    icon: <Users className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Project Timeline',
    description: 'How project phases are organized and scheduled',
    icon: <Calendar className="w-6 h-6 text-green-500" />
  },
  {
    title: 'Task Management',
    description: 'Methods for organizing and tracking work items',
    icon: <ListTodo className="w-6 h-6 text-purple-500" />
  },
  {
    title: 'Progress Tracking',
    description: 'Ways to measure and visualize project progress',
    icon: <BarChart className="w-6 h-6 text-orange-500" />
  }
];

export const MethodologiesPage: React.FC = () => {
  const [selectedMethodology, setSelectedMethodology] = useState(methodologies[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Software Development Methodologies
          </h1>
          <p className="text-xl text-gray-600">
            Understanding different approaches to software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {methodologies.map((methodology) => (
            <motion.div
              key={methodology.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer rounded-xl p-6 ${
                selectedMethodology.id === methodology.id
                  ? 'bg-white shadow-lg ring-2 ring-blue-500'
                  : 'bg-white/80 shadow hover:shadow-lg'
              }`}
              onClick={() => setSelectedMethodology(methodology)}
            >
              <div className="flex items-center space-x-4 mb-4">
                {methodology.icon}
                <h3 className="text-2xl font-bold text-gray-800">
                  {methodology.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{methodology.description}</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <MethodologyAnimation type={methodology.id as 'waterfall' | 'agile'} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={selectedMethodology.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedMethodology.title} Methodology
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">Key Features</h4>
              <ul className="space-y-2">
                {selectedMethodology.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-4">Advantages</h4>
              <ul className="space-y-2">
                {selectedMethodology.pros.map((pro, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-700 mb-4">Challenges</h4>
              <ul className="space-y-2">
                {selectedMethodology.cons.map((con, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};