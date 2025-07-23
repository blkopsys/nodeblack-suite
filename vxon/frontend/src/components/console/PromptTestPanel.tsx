import React, { useState } from 'react';

export default function PromptTestPanel() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('⚠️ Protocol Enforcement Triggered:', prompt);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl space-y-8">

        {/* VXON Console Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-left tracking-widest uppercase text-red-500">
          [ / VXON TEST PANEL / ]
        </h1>

        {/* Console Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          Input prompt for protocol-layer containment via BLKOPSYS.<br />
          Output redaction. Prompt anomaly detection. VXON in active watch mode.
        </p>

        {/* Prompt Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            required
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="ENTER PROMPT FOR VXON ANALYSIS"
            rows={5}
            className="w-full bg-[#1a1a1a] border border-gray-700 px-4 py-3 text-sm placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white uppercase tracking-wider py-2 px-4 text-sm"
          >
            [ ENFORCE PROTOCOL ]
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-600 text-center pt-6">
          This panel is monitored. VXON protocol logs all enforcement inputs.
        </p>
      </div>
    </div>
  );
}
