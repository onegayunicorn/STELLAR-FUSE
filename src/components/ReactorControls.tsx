import React, { useState } from 'react';
import { Power, Zap, Thermometer, ShieldAlert } from 'lucide-react';

interface ReactorControlsProps {
  onEventAdd: (event: any) => void;
}

const ReactorControls: React.FC<ReactorControlsProps> = ({ onEventAdd }) => {
  const [power, setPower] = useState(500);

  const handleIgnition = () => {
    onEventAdd({ id: Date.now().toString(), time: new Date().toLocaleTimeString(), event: 'Ignition Initiated', status: 'active' });
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-bold mb-6 text-cyan-400">Reactor Controls</h2>
      <div className="grid grid-cols-2 gap-4">
        <button onClick={handleIgnition} className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg font-bold">
          <Power className="w-5 h-5" /> IGNITE
        </button>
        <button className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-lg font-bold">
          <Zap className="w-5 h-5" /> RF HEATING
        </button>
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-bold">
          <Thermometer className="w-5 h-5" /> COOLING
        </button>
        <button className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-lg font-bold">
          <ShieldAlert className="w-5 h-5" /> EMERGENCY
        </button>
      </div>
    </div>
  );
};

export default ReactorControls;
