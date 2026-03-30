import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Stellar-Fuse AI Online. How can I assist with reactor operations?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Processing request: ' + input }]);
    }, 1000);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex flex-col h-[400px]">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
        <Bot className="w-5 h-5 text-blue-400" />
        <h2 className="font-semibold text-white">AI Assistant</h2>
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm p-2 rounded-lg ${m.role === 'bot' ? 'bg-gray-800 text-gray-300' : 'bg-blue-900/30 text-blue-200 ml-auto max-w-[80%]'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-950 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          placeholder="Ask about reactor status..."
        />
        <button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
