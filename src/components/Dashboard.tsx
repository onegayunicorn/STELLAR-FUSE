import React from 'react';
import { AIAssistant } from './AIAssistant';
import { FusionList } from './FusionList';
import { FusionVisuals } from './FusionVisuals';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <header className="col-span-1 lg:col-span-3 flex justify-between items-center border-b border-gray-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-white">STELLAR-FUSE Reactor Control</h1>
        <div className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-mono uppercase tracking-wider border border-green-900">
          System Online
        </div>
      </header>

      <div className="lg:col-span-2">
        <FusionVisuals />
      </div>
      
      <div className="flex flex-col gap-6">
        <FusionList />
        <AIAssistant />
      </div>
    </div>
  );
};
