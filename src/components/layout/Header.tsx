import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {  
  Menu, 
  Bell, 
  Search, 
} from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, title }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 lg:block hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="ml-4 flex items-center text-sm text-slate-500">
          <span className="capitalize font-medium text-slate-800">{title}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        
        <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
            {user?.name.charAt(0)}
          </div>
          <div className="ml-3 hidden md:block">
            <p className="text-sm font-medium text-slate-800">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};