import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain } from 'lucide-react';

const facts = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    title: 'Problem Solving',
    description: 'Software engineers solve complex problems by breaking them down into manageable pieces.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    title: 'Innovation',
    description: 'Drive technological advancement and shape the future of industries.',
  },
  {
    icon: <Brain className="w-8 h-8 text-green-500" />,
    title: 'Continuous Learning',
    description: 'Stay at the forefront of technology through lifelong learning.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WelcomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Introduction to Software Engineering
          </h1>
          <p className="text-xl text-gray-600">
            Embark on a journey to master the art and science of software development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">{fact.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {fact.title}
              </h3>
              <p className="text-gray-600 text-center">{fact.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Explore the fundamentals of software engineering through interactive lessons,
            practical examples, and hands-on exercises.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Start Learning
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};