import React from 'react';
import { Tooltip } from './Tooltip';

interface SecurityMetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  trend?: number;
  description?: string;
  impact?: string;
}

export function SecurityMetricCard({ 
  title, 
  value, 
  icon, 
  color, 
  trend, 
  description,
  impact 
}: SecurityMetricCardProps) {
  return (
    <Tooltip content={
      <div className="space-y-2">
        <p className="font-medium">{title}</p>
        {description && <p className="text-sm">{description}</p>}
        {impact && (
          <p className="text-sm">
            Impact Level: <span className="font-medium">{impact}</span>
          </p>
        )}
      </div>
    }>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value.toLocaleString()}</p>
            {trend !== undefined && (
              <p className={`text-sm mt-1 ${trend > 0 ? 'text-red-500' : 'text-green-500'}`}>
                {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last hour
              </p>
            )}
          </div>
          <div className={`p-3 rounded-full ${color}`}>{icon}</div>
        </div>
      </div>
    </Tooltip>
  );
}