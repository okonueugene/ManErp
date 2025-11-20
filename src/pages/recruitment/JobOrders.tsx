import { useState, useEffect } from "react";
import { Plus, Filter } from "lucide-react";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { StatusBadge } from "../../components/common/UIComponents";
import { recruitmentService } from "../../services/api";
import type { JobOrder } from "../../types";

const JobOrdersPage = () => {
  const [jobs, setJobs] = useState<JobOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    recruitmentService.getJobs().then(data => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Job Orders</h2>
          <p className="text-slate-500 text-sm">Track vacancies and visa quotas.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Job Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center py-12 text-slate-500">Loading job orders...</div>
        ) : jobs.map((job) => (
          <Card key={job.id} className="p-5 hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{job.position}</h3>
                <p className="text-slate-500 text-sm">{job.employerName}</p>
              </div>
              <StatusBadge status={job.status} />
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Salary:</span>
                <span className="font-medium text-slate-700">{job.currency} {job.salary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Visa Quota:</span>
                <span className="font-medium text-slate-700">{job.visaQuota}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>Progress</span>
                <span>{job.filled} / {job.quantity} Filled</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${(job.filled / job.quantity) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
              <span className="text-xs text-slate-400">Created {new Date(job.createdAt).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobOrdersPage;