import { LayoutDashboard, Building2, Briefcase, Users, FileText, PieChart, LogOut, Search, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import type { ViewState } from "../../types";

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen }) => {
  const { logout } = useAuth();
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'employers', label: 'Employers', icon: Building2 },
    { id: 'jobs', label: 'Job Orders', icon: Briefcase },
    { id: 'candidates', label: 'Candidates', icon: Users },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'reports', label: 'Reports', icon: PieChart },
  ];

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 z-30
      bg-slate-900 text-white transition-all duration-300 ease-in-out
      ${isOpen ? 'w-64' : 'w-20'}
      hidden lg:flex flex-col
    `}>
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center mr-3 flex-shrink-0">
          <Briefcase className="w-5 h-5" />
        </div>
        {isOpen && <span className="font-bold text-lg tracking-tight">MahadERP</span>}
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as ViewState)}
            className={`
              w-full flex items-center px-3 py-2.5 rounded-lg transition-colors
              ${currentView === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'}
            `}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && (
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={logout}
          className="flex items-center text-slate-400 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          {isOpen && <span className="ml-3 text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </aside>
  );
};

const Header: React.FC<{ toggleSidebar: () => void; title: string }> = ({ toggleSidebar, title }) => {
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