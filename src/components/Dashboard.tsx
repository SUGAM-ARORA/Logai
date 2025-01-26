import React from 'react';
import { Activity, Shield, Zap, AlertTriangle } from 'lucide-react';
import { AnomalyMetrics } from '../types';

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

function MetricCard({ title, value, icon, color }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value.toLocaleString()}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </div>
  );
}

interface DashboardProps {
  metrics: AnomalyMetrics;
}

export function Dashboard({ metrics }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Logs"
        value={metrics.totalLogs}
        icon={<Activity className="w-6 h-6 text-blue-500" />}
        color="bg-blue-100 dark:bg-blue-900/30"
      />
      <MetricCard
        title="Anomalies Detected"
        value={metrics.anomalies}
        icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
        color="bg-yellow-100 dark:bg-yellow-900/30"
      />
      <MetricCard
        title="Security Threats"
        value={metrics.securityThreats}
        icon={<Shield className="w-6 h-6 text-red-500" />}
        color="bg-red-100 dark:bg-red-900/30"
      />
      <MetricCard
        title="Performance Issues"
        value={metrics.performanceIssues}
        icon={<Zap className="w-6 h-6 text-purple-500" />}
        color="bg-purple-100 dark:bg-purple-900/30"
      />
    </div>
  );
}