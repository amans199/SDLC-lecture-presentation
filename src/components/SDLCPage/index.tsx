import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, 
  Search, 
  Palette, 
  Code2, 
  TestTube, 
  Rocket, 
  Settings 
} from 'lucide-react';
import { SDLCPhase } from './SDLCPhase';
import { PhaseDetails } from './PhaseDetails';
import { Timeline } from './Timeline';
import type { SDLCPhaseType } from '../../types';

const sdlcPhases: SDLCPhaseType[] = [
  {
    id: 'planning',
    title: 'Planning',
    icon: <ClipboardList className="w-6 h-6" />,
    shortDescription: 'Define project scope and objectives',
    description: 'The planning phase sets the foundation for the entire software development lifecycle. It involves defining project goals, scope, and requirements.',
    activities: [
      'Gathering requirements',
      'Defining project scope',
      'Resource planning',
      'Cost estimation',
      'Timeline creation'
    ],
    deliverables: [
      'Project Plan',
      'Resource Allocation Plan',
      'Risk Assessment Document',
      'Cost Estimation Document'
    ],
    example: 'A team planning to build an e-commerce platform starts by defining user requirements, timeline, and budget constraints.'
  },
  {
    id: 'analysis',
    title: 'Analysis',
    icon: <Search className="w-6 h-6" />,
    shortDescription: 'Analyze requirements and feasibility',
    description: 'During analysis, the team deeply examines and documents all system requirements to ensure a clear understanding of the project needs.',
    activities: [
      'Requirements analysis',
      'Feasibility study',
      'System requirement specification',
      'User requirement documentation'
    ],
    deliverables: [
      'Software Requirement Specification (SRS)',
      'Feasibility Report',
      'Use Case Diagrams',
      'Process Flow Diagrams'
    ],
    example: 'Analyzing user needs for an e-commerce platform, including payment processing requirements and security considerations.'
  },
  {
    id: 'design',
    title: 'Design',
    icon: <Palette className="w-6 h-6" />,
    shortDescription: 'Create system architecture and design',
    description: 'The design phase focuses on creating the software architecture and detailed design specifications.',
    activities: [
      'System architecture design',
      'Database design',
      'Interface design',
      'Security architecture planning'
    ],
    deliverables: [
      'System Design Document',
      'Database Schema',
      'API Specifications',
      'UI/UX Mockups'
    ],
    example: 'Designing the database schema and system architecture for handling user accounts, products, and orders.'
  },
  {
    id: 'implementation',
    title: 'Implementation',
    icon: <Code2 className="w-6 h-6" />,
    shortDescription: 'Develop the software solution',
    description: 'During implementation, developers write code and create the actual software based on the design specifications.',
    activities: [
      'Code development',
      'Unit testing',
      'Code review',
      'Documentation'
    ],
    deliverables: [
      'Source Code',
      'Technical Documentation',
      'Unit Test Cases',
      'Build Scripts'
    ],
    example: 'Writing code for user authentication, shopping cart functionality, and payment processing integration.'
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: <TestTube className="w-6 h-6" />,
    shortDescription: 'Verify and validate the software',
    description: 'Testing ensures the software meets all requirements and functions correctly without defects.',
    activities: [
      'Integration testing',
      'System testing',
      'User acceptance testing',
      'Performance testing'
    ],
    deliverables: [
      'Test Plans',
      'Test Cases',
      'Bug Reports',
      'Test Results Documentation'
    ],
    example: 'Conducting thorough testing of the payment system, including security testing and load testing.'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: <Rocket className="w-6 h-6" />,
    shortDescription: 'Release the software to production',
    description: 'Deployment involves releasing the software to the production environment and making it available to users.',
    activities: [
      'Production deployment',
      'User training',
      'Data migration',
      'System monitoring setup'
    ],
    deliverables: [
      'Deployment Plan',
      'User Manual',
      'Release Notes',
      'Backup and Recovery Plan'
    ],
    example: 'Launching the e-commerce platform, migrating existing product data, and training staff on the new system.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    icon: <Settings className="w-6 h-6" />,
    shortDescription: 'Maintain and improve the software',
    description: 'The maintenance phase involves ongoing support, updates, and improvements to the software.',
    activities: [
      'Bug fixing',
      'Feature enhancement',
      'Performance optimization',
      'Security updates'
    ],
    deliverables: [
      'Maintenance Logs',
      'Update Documentation',
      'Performance Reports',
      'Security Audit Reports'
    ],
    example: 'Regular system updates, adding new features based on user feedback, and maintaining security patches.'
  }
];

export const SDLCPage: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<SDLCPhaseType>(sdlcPhases[0]);
  const currentPhaseIndex = sdlcPhases.findIndex(phase => phase.id === selectedPhase.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Software Development Life Cycle (SDLC)
          </h1>
          <p className="text-xl text-gray-600">
            Understanding the systematic approach to software development
          </p>
        </motion.div>

        <Timeline 
          phases={sdlcPhases.map(phase => phase.title)}
          currentPhase={currentPhaseIndex}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sdlcPhases.map((phase) => (
            <SDLCPhase
              key={phase.id}
              phase={phase}
              isActive={selectedPhase.id === phase.id}
              onClick={() => setSelectedPhase(phase)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <PhaseDetails key={selectedPhase.id} phase={selectedPhase} />
        </AnimatePresence>
      </div>
    </div>
  );
};