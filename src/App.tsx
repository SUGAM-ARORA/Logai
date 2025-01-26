import React, { useState } from 'react';
import { Brain, BarChart3 } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { LogTable } from './components/LogTable';
import { ThemeToggle } from './components/ThemeToggle';
import { SecurityViewToggle } from './components/SecurityViewToggle';
import { SecurityDashboard } from './components/SecurityDashboard';
import { RiskHeatmap } from './components/RiskHeatmap';
import { LogBehaviorProfile } from './components/LogBehaviorProfile';
import { LogEntry, AnomalyMetrics, SecurityMetrics, SecurityView } from './types';

// Mock data for new components
const mockRisks = [
  { service: 'Authentication Service', score: 85, trend: 15, recentIncidents: 3 },
  { service: 'Database Cluster', score: 45, trend: -5, recentIncidents: 1 },
  { service: 'API Gateway', score: 65, trend: 10, recentIncidents: 2 },
  { service: 'Storage Service', score: 30, trend: -8, recentIncidents: 0 },
  { service: 'Message Queue', score: 70, trend: 20, recentIncidents: 4 },
];

const mockLogPatterns = [
  {
    id: '1',
    service: 'Auth Service',
    normalRate: 100,
    currentRate: 250,
    deviation: 150,
    status: 'critical' as const,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: '2',
    service: 'Database',
    normalRate: 50,
    currentRate: 45,
    deviation: -10,
    status: 'normal' as const,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: '3',
    service: 'API Gateway',
    normalRate: 200,
    currentRate: 280,
    deviation: 40,
    status: 'warning' as const,
    lastUpdated: new Date().toISOString(),
  },
];

// Mock data
const mockMetrics: AnomalyMetrics = {
  totalLogs: 15234,
  anomalies: 23,
  securityThreats: 7,
  performanceIssues: 16
};

const mockSecurityMetrics: SecurityMetrics = {
  activeThreats: 12,
  suspiciousIPs: 45,
  failedLogins: 167,
  dataExfiltrationAttempts: 3,
  privilegedAccessEvents: 28,
  riskScore: 65,
  threatsByType: {
    phishing: 15,
    ddos: 8,
    malware: 12,
    data_breach: 3,
    ransomware: 2,
    insider_threat: 5
  },
  criticalThreats: 4
};

const mockLogs: LogEntry[] = [
  {
    id: '1',
    timestamp: '2024-03-10T10:30:00Z',
    level: 'error',
    message: 'Failed login attempt from unauthorized IP',
    source: 'auth-service',
    category: 'security',
    anomalyScore: 0.9,
    ipAddress: '192.168.1.100',
    geoLocation: {
      country: 'United States',
      city: 'New York',
      coordinates: [40.7128, -74.0060]
    },
    riskScore: 85
  },
  {
    id: '2',
    timestamp: '2024-03-10T10:29:00Z',
    level: 'warn',
    message: 'High CPU usage detected',
    source: 'monitoring',
    category: 'performance',
    anomalyScore: 0.75
  },
  {
    id: '3',
    timestamp: '2024-03-10T10:28:00Z',
    level: 'error',
    message: 'Suspicious file access pattern detected',
    source: 'file-system',
    category: 'security',
    anomalyScore: 0.95,
    userId: 'admin123',
    riskScore: 92
  }
];

function App() {
  const [securityView, setSecurityView] = useState<SecurityView>('overview');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold">AI Log Analyzer</span>
            </div>
            <div className="flex items-center space-x-4">
              <SecurityViewToggle
                currentView={securityView}
                onViewChange={setSecurityView}
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              {securityView === 'overview' ? 'Analytics Overview' : 
               securityView === 'threats' ? 'Security Threats' :
               securityView === 'ueba' ? 'User Behavior Analytics' : 'Compliance Dashboard'}
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {securityView === 'overview' ? 'Real-time analysis of system logs and anomalies' :
               securityView === 'threats' ? 'Active security threats and incidents' :
               securityView === 'ueba' ? 'User and entity behavior analysis' : 'Security compliance and audit reports'}
            </p>
          </div>

          {securityView === 'overview' ? (
            <>
              <Dashboard metrics={mockMetrics} />
              <RiskHeatmap risks={mockRisks} />
              <LogBehaviorProfile patterns={mockLogPatterns} />
            </>
          ) : (
            <SecurityDashboard metrics={mockSecurityMetrics} />
          )}

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Recent Security Events</h3>
            <LogTable logs={mockLogs} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;