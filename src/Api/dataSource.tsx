import { client } from '@/Api/axios.client';
import { School, SchoolListResponse, ValidateNameRequest, ValidationResponse } from '@/Types/Types';

export const getSchools = async (): Promise<SchoolListResponse> => {
    const response = await client.get<SchoolListResponse>('/schools');
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject(response.data)
}

export const getSchool = async (schoolID: string) => {
    const response = await client.get<string>(`/schools/${schoolID}`);

    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject(response.data);
}

export const getSchoolBySearchTerm = async (searchTerm: string) => {
    const response = await client.get<string>(`/schools?searchTerm=${searchTerm}`);
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject(response.data)

}

export const validateSchoolName = async (request: ValidateNameRequest) => {
    console.log('School Name is ', request);
    const response = await client.post<ValidationResponse>('/schools/validateName', request);

    if (response.status === 200) {
        return Promise.resolve(response.data);
    }

    return Promise.reject(response.data);
}
