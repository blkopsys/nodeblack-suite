import React from 'react';
import { ShieldCheck, Terminal, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-gray-950 text-gray-100 shadow-lg flex flex-col justify-between p-4">
      <div>
        <div className="text-lg font-semibold mb-6">VXON Modules</div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-3 hover:text-white text-gray-400">
            <ShieldCheck size={18} />
            <span>Prompt Filter</span>
          </a>
          <a href="#" className="flex items-center space-x-3 hover:text-white text-gray-400">
            <Terminal size={18} />
            <span>Console Logs</span>
          </a>
        </nav>
      </div>
      <button className="flex items-center space-x-2 text-gray-400 hover:text-red-500">
        <LogOut size={18} />
        <span>Exit Console</span>
      </button>
    </aside>
  );
};

export default Sidebar;
