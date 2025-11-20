import type { AuthResponse, User, Employer, JobOrder } from "../types";


const MOCK_USER: User = {
  id: 'usr_123',
  email: 'admin@mahadgroup.com',
  name: 'System Admin',
  role: 'HQ_ADMIN'
};

const MOCK_EMPLOYERS: Employer[] = [
  {
    id: 'emp_1',
    name: 'Al Habtoor Construction',
    industry: 'Construction',
    contactPerson: 'Ahmed Al-Fayed',
    email: 'ahmed@alhabtoor.ae',
    phone: '+971 50 123 4567',
    location: 'Dubai, UAE',
    status: 'ACTIVE',
    totalJobs: 3,
    outstandingBalance: 15000,
    currency: 'AED'
  },
  {
    id: 'emp_2',
    name: 'Qatar Gas Services',
    industry: 'Oil & Gas',
    contactPerson: 'John Smith',
    email: 'j.smith@qatargas.qa',
    phone: '+974 33 987 654',
    location: 'Doha, Qatar',
    status: 'ACTIVE',
    totalJobs: 5,
    outstandingBalance: 45000,
    currency: 'QAR'
  },
  {
    id: 'emp_3',
    name: 'Saudi German Hospital',
    industry: 'Healthcare',
    contactPerson: 'Dr. Sarah Khan',
    email: 'hr@sgh.sa',
    phone: '+966 55 111 2222',
    location: 'Riyadh, KSA',
    status: 'INACTIVE',
    totalJobs: 0,
    outstandingBalance: 0,
    currency: 'SAR'
  }
];

const MOCK_JOBS: JobOrder[] = [
  {
    id: 'job_101',
    employerId: 'emp_1',
    employerName: 'Al Habtoor Construction',
    position: 'Mason',
    quantity: 50,
    filled: 12,
    salary: 1200,
    currency: 'AED',
    status: 'OPEN',
    createdAt: '2023-10-01',
    visaQuota: 50
  },
  {
    id: 'job_102',
    employerId: 'emp_1',
    employerName: 'Al Habtoor Construction',
    position: 'Steel Fixer',
    quantity: 30,
    filled: 30,
    salary: 1400,
    currency: 'AED',
    status: 'FILLED',
    createdAt: '2023-09-15',
    visaQuota: 30
  },
  {
    id: 'job_201',
    employerId: 'emp_2',
    employerName: 'Qatar Gas Services',
    position: 'Safety Officer',
    quantity: 5,
    filled: 1,
    salary: 4500,
    currency: 'QAR',
    status: 'OPEN',
    createdAt: '2023-10-10',
    visaQuota: 5
  }
];


export const authService = {
  login: async (username: string, pass: string): Promise<AuthResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && pass === 'Admin@123') {
          resolve({
            access: 'mock_jwt_token_xyz',
            user: MOCK_USER
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 800);
    });
  }
};

export const recruitmentService = {
  getEmployers: async (): Promise<Employer[]> => {
    return new Promise(resolve => setTimeout(() => resolve(MOCK_EMPLOYERS), 600));
  },
  getJobs: async (): Promise<JobOrder[]> => {
    return new Promise(resolve => setTimeout(() => resolve(MOCK_JOBS), 600));
  }
};



