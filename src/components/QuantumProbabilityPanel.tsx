import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity } from 'lucide-react';

export const QuantumProbabilityPanel: React.FC = () => {
  return (
    <div className="bg-gray-900/50 rounded-lg border border-blue-500/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
          <Cpu className="w-6 h-6" /> IBM Condor Quantum Core
        </h2>
        <div className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-mono border border-blue-900">
          1121 QUBITS ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black/40 p-4 rounded-lg border border-blue-900/30">
          <p className="text-gray-400 text-xs uppercase mb-1">Coherence Time</p>
          <p className="text-xl font-mono text-white">10.0 s</p>
          <p className="text-blue-400 text-[10px]">Calcium-43 Ion</p>
        </div>
        <div className="bg-black/40 p-4 rounded-lg border border-blue-900/30">
          <p className="text-gray-400 text-xs uppercase mb-1">Gate Fidelity</p>
          <p className="text-xl font-mono text-white">99.99%</p>
          <p className="text-blue-400 text-[10px]">Surface Code d=5</p>
        </div>
        <div className="bg-black/40 p-4 rounded-lg border border-blue-900/30">
          <p className="text-gray-400 text-xs uppercase mb-1">Control Latency</p>
          <p className="text-xl font-mono text-white">1.0 GHz</p>
          <p className="text-blue-400 text-[10px]">BlueJay System</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4" /> Plasma Stability Prediction
        </h3>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: '94%' }}
            transition={{ duration: 2 }}
          />
        </div>
        <p className="text-right text-xs text-blue-400 mt-1 font-mono">94% Stability Probability</p>
      </div>
    </div>
  );
};

export default QuantumProbabilityPanel;
