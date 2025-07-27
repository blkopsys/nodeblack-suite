import React from 'react';
import PromptTestPanel from './PromptTestPanel';

function MainView() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">VXON Protocol Console</h1>

      <section className="max-w-4xl mx-auto">
        <PromptTestPanel />
      </section>

      {/* Add additional modules below */}
    </div>
  );
}

export default MainView;
