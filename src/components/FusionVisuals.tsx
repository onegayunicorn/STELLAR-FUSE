import React from 'react';

export const FusionVisuals: React.FC = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-[500px] relative flex items-center justify-center">
      <h2 className="absolute top-4 left-6 font-semibold text-white">Fusion Pin Point Display</h2>
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="150" className="fill-none stroke-blue-900 stroke-2" />
        <circle cx="200" cy="200" r="100" className="fill-none stroke-blue-800 stroke-1" />
        
        {/* Fusion Pin Points */}
        <circle cx="200" cy="100" r="4" className="fill-blue-400 animate-pulse" />
        <circle cx="250" cy="250" r="6" className="fill-blue-500 animate-pulse" />
        <circle cx="150" cy="280" r="3" className="fill-blue-300 animate-pulse" />
        <circle cx="300" cy="200" r="5" className="fill-blue-600 animate-pulse" />
        <circle cx="100" cy="200" r="4" className="fill-blue-400 animate-pulse" />
      </svg>
    </div>
  );
};
