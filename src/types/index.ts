export interface User {
  id: string;
  email: string;
  role: 'HQ_ADMIN' | 'COUNTRY_MANAGER' | 'FINANCE_MANAGER' | 'RECRUITER';
  name: string;
}

export interface AuthResponse {
  access: string;
  user: User;
}

export type ViewState = 'dashboard' | 'employers' | 'jobs' | 'candidates' | 'invoices' | 'reports' | 'settings';

export interface View {
  view: ViewState;
  title: string;
}

export interface Employer {
  id: string;
  name: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  status: 'ACTIVE' | 'INACTIVE';
  totalJobs: number;
  outstandingBalance: number;
  currency: string;
}

export interface JobOrder {
  id: string;
  employerId: string;
  employerName: string;
  position: string;
  quantity: number;
  filled: number;
  salary: number;
  currency: string;
  status: 'OPEN' | 'FILLED' | 'CANCELLED' | 'ON_HOLD';
  createdAt: string;
  visaQuota: number;
}
