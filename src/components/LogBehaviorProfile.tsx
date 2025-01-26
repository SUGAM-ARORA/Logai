import React from 'react';
import { Activity, AlertTriangle } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface LogPattern {
  id: string;
  service: string;
  normalRate: number;
  currentRate: number;
  deviation: number;
  status: 'normal' | 'warning' | 'critical';
  lastUpdated: string;
}

interface LogBehaviorProfileProps {
  patterns: LogPattern[];
}

export function LogBehaviorProfile({ patterns }: LogBehaviorProfileProps) {
  const getStatusColor = (status: LogPattern['status']) => {
    switch (status) {
      case 'critical':
        return 'text-red-500';
      case 'warning':
        return 'text-yellow-500';
      default:
        return 'text-green-500';
    };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Activity className="w-5 h-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-medium">Log Behavior Profiles</h3>
      </div>
      <div className="space-y-4">
        {patterns.map((pattern) => (
          <Tooltip
            key={pattern.id}
            content={
              <div className="space-y-2">
                <p className="font-medium">{pattern.service}</p>
                <p className="text-sm">Normal Rate: {pattern.normalRate} logs/min</p>
                <p className="text-sm">Current Rate: {pattern.currentRate} logs/min</p>
                <p className="text-sm">Last Updated: {new Date(pattern.lastUpdated).toLocaleString()}</p>
              </div>
            }
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{pattern.service}</span>
                {Math.abs(pattern.deviation) > 50 && (
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-sm ${getStatusColor(pattern.status)}`}>
                  {pattern.deviation > 0 ? '↑' : '↓'} {Math.abs(pattern.deviation)}% from normal
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(pattern.lastUpdated).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}