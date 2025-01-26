export type LogLevel = 'info' | 'warn' | 'error' | 'debug';
export type SecurityView = 'overview' | 'threats' | 'ueba' | 'compliance';
export type ThreatType = 'phishing' | 'ddos' | 'malware' | 'data_breach' | 'ransomware' | 'insider_threat';

export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  source: string;
  category: string;
  anomalyScore?: number;
  geoLocation?: {
    country: string;
    city: string;
    coordinates: [number, number];
  };
  ipAddress?: string;
  userId?: string;
  riskScore?: number;
  threatType?: ThreatType;
  impact?: 'low' | 'medium' | 'high' | 'critical';
}

export interface AnomalyMetrics {
  totalLogs: number;
  anomalies: number;
  securityThreats: number;
  performanceIssues: number;
}

export interface SecurityMetrics {
  activeThreats: number;
  suspiciousIPs: number;
  failedLogins: number;
  dataExfiltrationAttempts: number;
  privilegedAccessEvents: number;
  riskScore: number;
  threatsByType: Record<ThreatType, number>;
  criticalThreats: number;
}

export interface TimeSeriesData {
  timestamp: string;
  count: number;
}

export interface UserBehavior {
  userId: string;
  username: string;
  riskScore: number;
  lastActivity: string;
  unusualEvents: number;
  privilegedActions: number;
  locations: string[];
}