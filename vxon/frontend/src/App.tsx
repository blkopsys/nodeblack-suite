import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-lg font-mono tracking-wider text-gray-300 mb-6">
          BLKOPSYS // VXON ENFORCEMENT
        </h2>
        <textarea
          placeholder="Enter prompt to initiate VXON protocol..."
          className="w-full h-40 bg-gray-950 text-gray-200 font-mono p-4 rounded-lg border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button
          className="w-full mt-6 py-3 bg-gray-800 text-gray-100 font-bold tracking-wider rounded-md hover:bg-gray-700 transition duration-200 border border-gray-600 shadow-sm"
        >
          ENFORCE PROTOCOL
        </button>
      </div>
    </div>
  );
}

export default App;
