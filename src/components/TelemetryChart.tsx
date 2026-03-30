import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '03:10', power: 400 },
  { time: '03:11', power: 450 },
  { time: '03:12', power: 480 },
  { time: '03:13', power: 500 },
  { time: '03:14', power: 520 },
];

const TelemetryChart: React.FC = () => {
  return (
    <div className="bg-gray-900/50 rounded-lg border border-cyan-500/30 p-6 h-[400px]">
      <h2 className="text-xl font-bold mb-4 text-cyan-400">Fusion Power Telemetry</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
          <Line type="monotone" dataKey="power" stroke="#22d3ee" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TelemetryChart;
