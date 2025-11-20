import { useState, useEffect } from "react";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { StatusBadge } from "../../components/common/UIComponents";
import { recruitmentService } from "../../services/api";
import type { Employer } from "../../types";
import { 
  Plus,
  MapPin,
  Mail} from 'lucide-react';

const EmployersPage = () => {
  const [employers, setEmployers] = useState<Employer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recruitmentService.getEmployers().then(data => {
      setEmployers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Employers</h2>
          <p className="text-slate-500 text-sm">Manage client relationships and contracts.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Employer
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Company Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Active Jobs</th>
                <th className="px-6 py-4">Outstanding</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-500">Loading employers...</td></tr>
              ) : employers.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{emp.name}</div>
                    <div className="text-xs text-slate-500 flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" /> {emp.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-800">{emp.contactPerson}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center">
                       <Mail className="w-3 h-3 mr-1"/> {emp.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {emp.totalJobs} Active
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {emp.currency} {emp.outstandingBalance.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={emp.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default EmployersPage;
