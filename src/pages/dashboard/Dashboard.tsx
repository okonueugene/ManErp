import {Briefcase, Users, FileText, DollarSign } from "lucide-react";
import { Card } from '../../components/common/Card';


const StatWidget = ({ title, value, trend, icon: Icon, color }: any) => (
  <Card className="p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      </div>
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-green-600 font-medium flex items-center">{trend}</span>
      <span className="text-slate-400 ml-2">vs last month</span>
    </div>
  </Card>
);

const DashboardPage = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
      <p className="text-slate-500">Real-time financial and recruitment metrics.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatWidget title="Total Revenue" value="QAR 1.2M" trend="+12.5%" icon={DollarSign} color="bg-emerald-500" />
      <StatWidget title="Active Job Orders" value="3" trend="+1" icon={Briefcase} color="bg-blue-500" />
      <StatWidget title="Candidates Process" value="43" trend="+12" icon={Users} color="bg-indigo-500" />
      <StatWidget title="Pending Invoices" value="8" trend="-2" icon={FileText} color="bg-orange-500" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 min-h-[300px]">
        <h3 className="font-semibold text-slate-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">JD</div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-800">New Candidate Added</p>
                <p className="text-xs text-slate-500">For Al Habtoor Construction</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="p-6 min-h-[300px]">
        <h3 className="font-semibold text-slate-800 mb-4">Pipeline Summary</h3>
        <div className="space-y-4">
            {['Documentation', 'Visa Processing', 'Ticket Issued', 'Deployed'].map((stage, idx) => (
              <div key={stage} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{stage}</span>
                  <span className="font-medium text-slate-800">{20 - idx * 4} candidates</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                    style={{ width: `${80 - idx * 20}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </Card>
    </div>
  </div>
);

export default DashboardPage;
