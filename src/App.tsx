import { useState } from 'react';

import { AuthProvider, useAuth } from './context/AuthContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardPage } from './pages/dashboard/Dashboard';
import { PlaceholderPage } from './components/business/Placeholders';
import type { ViewState } from './types';
import LoginPage from './pages/auth/Login';


const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  // Simple router switch
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardPage />;
      case 'employers': return <PlaceholderPage title="Employers" />;
      case 'jobs': return <PlaceholderPage title="Job Orders" />;
      case 'candidates': return <PlaceholderPage title="Candidates" />;
      case 'invoices': return <PlaceholderPage title="Invoices" />;
      case 'reports': return <PlaceholderPage title="Reports" />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        isOpen={isSidebarOpen} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
          title={currentView}
        />
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainLayout /> : <LoginPage />;
};

export default App;