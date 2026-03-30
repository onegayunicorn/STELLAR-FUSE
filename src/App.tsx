/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AIAssistant } from './components/AIAssistant';
import { FusionList } from './components/FusionList';
import { FusionVisuals } from './components/FusionVisuals';
import ReactorControls from './components/ReactorControls';
import TelemetryChart from './components/TelemetryChart';
import QuantumProbabilityPanel from './components/QuantumProbabilityPanel';

interface FusionEvent {
  id: string;
  time: string;
  event: string;
  status: 'success' | 'active' | 'stable' | 'warning' | 'error';
  details?: string;
}

const App: React.FC = () => {
  const [fusionEvents, setFusionEvents] = useState<FusionEvent[]>([
    { id: '1', time: '03:10:00', event: 'Plasma Ignition', status: 'success' },
    { id: '2', time: '03:12:30', event: 'RF Heating Ramp', status: 'active' },
    { id: '3', time: '03:14:00', event: 'Cooling Stabilized', status: 'stable' },
  ]);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'controls' | 'telemetry' | 'quantum'>('dashboard');
  
  const addEvent = (event: FusionEvent) => {
    setFusionEvents(prev => [event, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                STELLAR-FUSE
              </h1>
              <span className="text-xs text-cyan-400 font-mono">v1.0.0 | ACTIVE</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-gray-400">Fusion Power</p>
                <p className="text-lg font-bold text-cyan-400">500 MW</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Plasma Temp</p>
                <p className="text-lg font-bold text-orange-400">15M K</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'controls', label: 'Controls', icon: '🎮' },
              { id: 'telemetry', label: 'Telemetry', icon: '📈' },
              { id: 'quantum', label: 'Quantum', icon: '🔮' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-mono text-sm transition-all ${
                  activeTab === tab.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <FusionVisuals />
            </div>
            <div>
              <AIAssistant />
            </div>
            <div className="lg:col-span-3">
              <FusionList events={fusionEvents} />
            </div>
          </div>
        )}

        {activeTab === 'controls' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ReactorControls onEventAdd={addEvent} />
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-cyan-400">System Status</h2>
              <div className="space-y-3">
                <StatusRow label="Plasma Confinement" status="stable" value="99.7%" />
                <StatusRow label="Magnetic Field" status="active" value="5.3 T" />
                <StatusRow label="Neutron Flux" status="normal" value="2.4e14 n/s" />
                <StatusRow label="Cooling System" status="stable" value="4.2 K" />
                <StatusRow label="RF Power" status="active" value="24 GHz / 100 kW" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-6">
            <TelemetryChart />
          </div>
        )}

        {activeTab === 'quantum' && (
          <div className="space-y-6">
            <QuantumProbabilityPanel />
          </div>
        )}
      </main>
    </div>
  );
};

const StatusRow: React.FC<{ label: string; status: string; value: string }> = ({ label, status, value }) => {
  const statusColors = {
    stable: 'text-green-400',
    active: 'text-cyan-400',
    normal: 'text-blue-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };
  
  return (
    <div className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg">
      <span className="text-gray-300">{label}</span>
      <div className="flex items-center space-x-3">
        <span className="font-mono text-white">{value}</span>
        <span className={`text-xs ${statusColors[status as keyof typeof statusColors] || 'text-gray-400'}`}>
          ● {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default App;
