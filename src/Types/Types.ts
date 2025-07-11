export type ValidateNameRequest = {
  data: {
    name: string;
  };
};

export type ValidationResponse = {
  data: {
    isValid: boolean;
  };
};

export type School = {
  id: number;
  name: string;
  address: string;
  createdAt: Date; // Handling these as Dates to be manipulated later in development
  updatedAt: Date; // Same here
};

export type SchoolListResponse = {
  count: number;
  data: School[];
};

export type UserType = "student" | "teacher" | "admin" | null;

export type Role = {
  id: number;
  role: string;
};

export type SchoolWithRoles = {
  id: number;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  roles: Role[];
};

export type SchoolWithRolesResponse = {
  data: SchoolWithRoles;
};

// Courses
export type Course = {
  id: number;
  title: string;
  instructor: string;
  department: string;
  submittedDate: string;
  status: string;
  description: string;
  level: string;
  credits: number;
  modules: number;
  estimatedHours: number;
  flagged: boolean;
  flagReason?: string;
  rejectionReason?: string;
};
