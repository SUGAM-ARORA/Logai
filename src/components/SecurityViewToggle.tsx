import React from 'react';
import { Shield, Users, FileCheck, BarChart } from 'lucide-react';
import { SecurityView } from '../types';

interface SecurityViewToggleProps {
  currentView: SecurityView;
  onViewChange: (view: SecurityView) => void;
}

export function SecurityViewToggle({ currentView, onViewChange }: SecurityViewToggleProps) {
  const views: { id: SecurityView; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <BarChart className="w-4 h-4" /> },
    { id: 'threats', label: 'Threats', icon: <Shield className="w-4 h-4" /> },
    { id: 'ueba', label: 'User Behavior', icon: <Users className="w-4 h-4" /> },
    { id: 'compliance', label: 'Compliance', icon: <FileCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
      {views.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onViewChange(id)}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${
              currentView === id
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
        >
          {icon}
          <span className="ml-2">{label}</span>
        </button>
      ))}
    </div>
  );
}