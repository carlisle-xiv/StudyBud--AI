import { GetGoogleConsent, GetGoogleLoginUrlQueryKey, SignUpResponse, SignUpVariables, VerifiedUserLogin } from '@/_shared/generated';
import { Maybe } from '@/_shared/lib/api';
import { apiPost } from '@/_shared/services/apiService';
import { getBaseApiUrl } from '@/_shared/services/authService';
import { client } from '@/Api/axios.client';
import { School, SchoolListResponse, SchoolWithRolesResponse, ValidateNameRequest, ValidationResponse } from '@/Types/Types';

export const getSchools = async (): Promise<SchoolListResponse> => {
    const response = await client.get<SchoolListResponse>('/schools');
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.reject(response.data)
}

export const getSchool = async (schoolID: string) => {
    const response = await client.get<SchoolWithRolesResponse>(`/schools/${schoolID}`);

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



export async function getGoogleOAuthURL(redirectMode: string) {
    const params = new URLSearchParams();
    params.set("redirectMode", redirectMode);
    const url = GetGoogleLoginUrlQueryKey + "?" + params.toString();
    const response = await client.get<{ data?: Maybe<GetGoogleConsent> }>(url, {
        baseURL: getBaseApiUrl(),
    });
    return response.data?.data;
}

export async function getAuthUserByGoogleOAuthCode(args: {
    code: string;
    redirectMode: string;
}) {
    const response = await client.post<{ data: VerifiedUserLogin }>(
        "/login",
        { code: args.code, redirectMode: args.redirectMode },
        { baseURL: getBaseApiUrl() },
    );
    return response.data.data;
}

export async function registerUser(variables: SignUpVariables) {
    return apiPost<SignUpResponse, { data: SignUpVariables }>({
        path: "/schools",
        variables: { data: variables },
    });
}