import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-gray-900 rounded-2xl shadow-2xl backdrop-blur-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">
          NODEBLACK Dashboard
        </h1>
        <p className="text-lg text-gray-400 text-center">
          Next-generation Synthetic Intelligence Enforcement
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            Analytics
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-800 text-white rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            Threat Map
          </button>
        </div>
      </div>
    </div>
  );
}
