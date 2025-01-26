import React from 'react';
import { Shield } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface RiskScore {
  service: string;
  score: number;
  trend: number;
  recentIncidents: number;
}

interface RiskHeatmapProps {
  risks: RiskScore[];
}

export function RiskHeatmap({ risks }: RiskHeatmapProps) {
  const getColorClass = (score: number) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-orange-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Shield className="w-5 h-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-medium">Predictive Risk Heatmap</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {risks.map((risk) => (
          <Tooltip
            key={risk.service}
            content={
              <div className="space-y-2">
                <p className="font-medium">{risk.service}</p>
                <p className="text-sm">Recent Incidents: {risk.recentIncidents}</p>
                <p className="text-sm">
                  Trend: {risk.trend > 0 ? '↑' : '↓'} {Math.abs(risk.trend)}%
                </p>
              </div>
            }
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{risk.service}</span>
                <span className={`px-2 py-1 rounded text-xs text-white ${getColorClass(risk.score)}`}>
                  {risk.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className={`${getColorClass(risk.score)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${risk.score}%` }}
                />
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}