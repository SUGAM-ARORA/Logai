import React from 'react';
import { Shield, AlertTriangle, UserX, Database, Key, GitBranch, Zap } from 'lucide-react';
import { SecurityMetrics, ThreatType } from '../types';
import { SecurityMetricCard } from './SecurityMetricCard';

const threatDescriptions: Record<ThreatType, string> = {
  phishing: 'Attempts to steal sensitive information by impersonating legitimate entities',
  ddos: 'Distributed Denial of Service attacks attempting to overwhelm systems',
  malware: 'Malicious software detected in the system',
  data_breach: 'Unauthorized access to sensitive data',
  ransomware: 'Encryption-based extortion attempts',
  insider_threat: 'Suspicious activities from authorized users'
};

interface SecurityDashboardProps {
  metrics: SecurityMetrics;
}

export function SecurityDashboard({ metrics }: SecurityDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Security Overview</h3>
        <button
          onClick={() => window.open('https://github.com/login/oauth/authorize', '_blank')}
          className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          <GitBranch className="w-4 h-4 mr-2" />
          Connect to GitHub
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SecurityMetricCard
          title="Active Threats"
          value={metrics.activeThreats}
          icon={<Shield className="w-6 h-6 text-red-500" />}
          color="bg-red-100 dark:bg-red-900/30"
          trend={12}
          description="Currently active security threats requiring attention"
          impact="Critical"
        />
        <SecurityMetricCard
          title="DDoS Attacks"
          value={metrics.threatsByType.ddos || 0}
          icon={<Zap className="w-6 h-6 text-yellow-500" />}
          color="bg-yellow-100 dark:bg-yellow-900/30"
          trend={8}
          description={threatDescriptions.ddos}
          impact="High"
        />
        <SecurityMetricCard
          title="Phishing Attempts"
          value={metrics.threatsByType.phishing || 0}
          icon={<AlertTriangle className="w-6 h-6 text-orange-500" />}
          color="bg-orange-100 dark:bg-orange-900/30"
          trend={-5}
          description={threatDescriptions.phishing}
          impact="Medium"
        />
        <SecurityMetricCard
          title="Data Breaches"
          value={metrics.threatsByType.data_breach || 0}
          icon={<Database className="w-6 h-6 text-purple-500" />}
          color="bg-purple-100 dark:bg-purple-900/30"
          trend={3}
          description={threatDescriptions.data_breach}
          impact="Critical"
        />
        <SecurityMetricCard
          title="Insider Threats"
          value={metrics.threatsByType.insider_threat || 0}
          icon={<Key className="w-6 h-6 text-blue-500" />}
          color="bg-blue-100 dark:bg-blue-900/30"
          trend={1}
          description={threatDescriptions.insider_threat}
          impact="High"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-medium mb-4">Threat Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(metrics.threatsByType).map(([type, count]) => (
            <div key={type} className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                count > 10 ? 'bg-red-500' : count > 5 ? 'bg-yellow-500' : 'bg-green-500'
              }`} />
              <span className="text-sm capitalize">{type.replace('_', ' ')}</span>
              <span className="text-sm text-gray-500">({count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}