'use client';

import { createContext, useContext, useState } from 'react';

export const METRICS = {
  normal: { latency: 180, cpu: 54, db: 110, traffic: 'baseline' },
  critical: { latency: 740, cpu: 87, db: 380, traffic: '+63%' },
  investigating: { latency: 740, cpu: 87, db: 380, traffic: '+63%' },
  recommended: { latency: 740, cpu: 87, db: 380, traffic: '+63%' },
  fixing: { latency: 740, cpu: 87, db: 380, traffic: '+63%' },
  resolved: { latency: 228, cpu: 56, db: 132, traffic: '+8%' },
};

export const ANALYSIS_TEXT =
  'A traffic spike appears to have saturated the API service. CPU utilization reached 87%, while database latency increased approximately three times. The most likely cause is insufficient API capacity combined with increased database load.';

export const RESOLVED_TEXT = 'Infrastructure health has returned to normal.';

const IncidentContext = createContext(null);

export function IncidentProvider({ children }) {
  const [phase, setPhase] = useState('normal');

  const trigger = () => {
    if (phase === 'normal') setPhase('critical');
  };

  const investigate = () => {
    if (phase !== 'critical') return;
    setPhase('investigating');
    setTimeout(() => setPhase('recommended'), 2000);
  };

  const applyFix = () => {
    if (phase !== 'recommended') return;
    setPhase('fixing');
    setTimeout(() => setPhase('resolved'), 1400);
  };

  const reset = () => setPhase('normal');

  const active = ['critical', 'investigating', 'recommended', 'fixing'].includes(phase);
  const metrics = METRICS[phase];

  const stageInfo = (() => {
    switch (phase) {
      case 'normal':
        return { active: null, done: [] };
      case 'critical':
        return { active: 'detect', done: [] };
      case 'investigating':
        return { active: 'investigate', done: ['detect'] };
      case 'recommended':
        return { active: 'approve', done: ['detect', 'investigate', 'recommend'] };
      case 'fixing':
        return { active: 'fix', done: ['detect', 'investigate', 'recommend', 'approve'] };
      case 'resolved':
        return { active: null, done: ['detect', 'investigate', 'recommend', 'approve', 'fix', 'verify'] };
      default:
        return { active: null, done: [] };
    }
  })();

  return (
    <IncidentContext.Provider
      value={{ phase, metrics, active, stageInfo, trigger, investigate, applyFix, reset }}
    >
      {children}
    </IncidentContext.Provider>
  );
}

export function useIncident() {
  const ctx = useContext(IncidentContext);
  if (!ctx) throw new Error('useIncident must be used within an IncidentProvider');
  return ctx;
}
