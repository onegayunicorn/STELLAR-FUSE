import React from 'react';

export const FusionList: React.FC = () => {
  const events = [
    { id: 1, time: '03:10:00', event: 'Plasma Ignition', status: 'Success' },
    { id: 2, time: '03:12:30', event: 'RF Heating Ramp', status: 'Active' },
    { id: 3, time: '03:14:00', event: 'Cooling Stabilized', status: 'Stable' },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="font-semibold text-white mb-4">Fusion Event Log</h2>
      <div className="space-y-2">
        {events.map((e) => (
          <div key={e.id} className="flex justify-between items-center bg-gray-950 p-3 rounded-lg border border-gray-800">
            <div className="text-xs font-mono text-gray-500">{e.time}</div>
            <div className="text-sm text-gray-200">{e.event}</div>
            <div className={`text-[10px] px-2 py-0.5 rounded-full ${e.status === 'Success' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
              {e.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
