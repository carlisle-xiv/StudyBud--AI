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
