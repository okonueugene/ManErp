import { LayoutDashboard, Building2, Briefcase, Users, FileText, PieChart, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import type { ViewState } from "../../types";

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen }) => {
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