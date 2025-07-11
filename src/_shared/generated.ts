
import { ApiRequestResult, Maybe } from '@/_shared/lib/api';
import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ServerErrorResponse } from '@/_shared/services/errorService';
import { apiGet, apiPost, apiPut, apiPatch, apiDelete, Headers } from '@/_shared/services/apiService';
export interface GoogleLoginUrlInput {
redirectMode: string;
}
export interface GetGoogleConsent {
url?: Maybe<string>;
}
export const GetGoogleLoginUrlQueryKey = "/googleConsentUrl";
export function getGoogleLoginUrl(args:{variables: GoogleLoginUrlInput; headers: Headers; signal?: AbortSignal}){
	return apiGet<GetGoogleConsent>({path: GetGoogleLoginUrlQueryKey, signal: args.signal, headers: args.headers, variables: args.variables })}
export function useGetGoogleLoginUrlQuery<T = ApiRequestResult<GetGoogleConsent>>(options: UseQueryOptions<ApiRequestResult<GetGoogleConsent>, AxiosError<ServerErrorResponse<unknown>>, T, [string, GoogleLoginUrlInput, Headers]> & {variables: GoogleLoginUrlInput; headers:Headers}){
	return useQuery({
				...options,
				queryKey: [GetGoogleLoginUrlQueryKey, options.variables, options.headers],
				queryFn: async ({signal}) => getGoogleLoginUrl({signal, headers: options.headers, variables: options.variables}),});}
export function useGetGoogleLoginUrlLazyQuery(options?: UseMutationOptions<ApiRequestResult<GetGoogleConsent>, AxiosError<ServerErrorResponse<unknown>>, {headers?:Headers;variables:GoogleLoginUrlInput}>) { return useMutation((args: { headers: Headers; variables: GoogleLoginUrlInput}) => getGoogleLoginUrl({headers:args.headers,variables:args.variables}), options);}export interface LoginWithGoogleInput {
code: string;
redirectMode: string;
}
export interface UserRole {
id: number;
role: string;
}
export interface School {
id: number;
name: string;
address?: Maybe<string>;
createdAt?: Maybe<string>;
updatedAt?: Maybe<string>;
}
export interface AuthenticatedUser {
id: number;
email: string;
firstName?: Maybe<string>;
middleName?: Maybe<string>;
lastName?: Maybe<string>;
phoneNumber?: Maybe<string>;
picture?: Maybe<string>;
roles: Array<UserRole>;
privileges: Array<string>;
schools: Array<School>;
}
export interface VerifiedUserLoginResponse {
accessToken?: Maybe<string>;
refreshToken?: Maybe<string>;
user?: Maybe<AuthenticatedUser>;
}
export function postLoginWithGoogle(args: { variables: LoginWithGoogleInput; headers:Headers; }){
	return apiPost<VerifiedUserLoginResponse, LoginWithGoogleInput>({path: "/auth/login", variables:args.variables, headers: args.headers });}
export function useLoginWithGoogleMutation(options?:UseMutationOptions<ApiRequestResult<VerifiedUserLoginResponse>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; variables:LoginWithGoogleInput}>){
	return useMutation((args: {variables:LoginWithGoogleInput; headers:Headers}) => postLoginWithGoogle({headers:args.headers, variables:args.variables}), options);}

export interface VerifyUserEmailInputVariables {
email: string;
}
export interface VerifyEmailInput {
data: VerifyUserEmailInputVariables;
}
export interface VerifiedEmail {
success: boolean;
}
export interface VerifiedEmailResponse {
data: VerifiedEmail;
}
export function postVerifyEmail(args: { variables: VerifyEmailInput; headers:Headers; }){
	return apiPost<VerifiedEmailResponse, VerifyEmailInput>({path: "/verifyEmail", variables:args.variables, headers: args.headers });}
export function useVerifyEmailMutation(options?:UseMutationOptions<ApiRequestResult<VerifiedEmailResponse>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; variables:VerifyEmailInput}>){
	return useMutation((args: {variables:VerifyEmailInput; headers:Headers}) => postVerifyEmail({headers:args.headers, variables:args.variables}), options);}

export interface VerifyOtpVariables {
email: string;
otp: string;
}
export interface VerifyOtpInput {
data: VerifyOtpVariables;
}
export function postVerifyOtp(args: { variables: VerifyOtpInput; headers:Headers; }){
	return apiPost<VerifiedUserLoginResponse, VerifyOtpInput>({path: "/verifyOtp", variables:args.variables, headers: args.headers });}
export function useVerifyOtpMutation(options?:UseMutationOptions<ApiRequestResult<VerifiedUserLoginResponse>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; variables:VerifyOtpInput}>){
	return useMutation((args: {variables:VerifyOtpInput; headers:Headers}) => postVerifyOtp({headers:args.headers, variables:args.variables}), options);}

export interface RefreshAccessTokenVariables {
refreshToken: string;
}
export interface RefreshAccessTokenInput {
data: RefreshAccessTokenVariables;
}
export function postRefreshToken(args: { variables: RefreshAccessTokenInput; headers:Headers; }){
	return apiPost<VerifiedUserLoginResponse, RefreshAccessTokenInput>({path: "/refreshToken", variables:args.variables, headers: args.headers });}
export function useRefreshTokenMutation(options?:UseMutationOptions<ApiRequestResult<VerifiedUserLoginResponse>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; variables:RefreshAccessTokenInput}>){
	return useMutation((args: {variables:RefreshAccessTokenInput; headers:Headers}) => postRefreshToken({headers:args.headers, variables:args.variables}), options);}

export interface NewUser {
firstName: string;
middleName?: Maybe<string>;
lastName: string;
email: string;
picture?: Maybe<string>;
}
export interface NewSchool {
name: string;
address?: Maybe<string>;
}
export interface SignUpVariables {
user: NewUser;
school?: Maybe<NewSchool>;
schoolId?: Maybe<number>;
roles?: Maybe<Array<number>>;
}
export interface SignUpInput {
data: SignUpVariables;
}
export interface SignUpResponse {
schoolId: number;
}
export function postSignUp(args: { variables: SignUpInput; headers:Headers; }){
	return apiPost<SignUpResponse, SignUpInput>({path: "/schools", variables:args.variables, headers: args.headers });}
export function useSignUpMutation(options?:UseMutationOptions<ApiRequestResult<SignUpResponse>, AxiosError<ServerErrorResponse<unknown>>, {headers:Headers; variables:SignUpInput}>){
	return useMutation((args: {variables:SignUpInput; headers:Headers}) => postSignUp({headers:args.headers, variables:args.variables}), options);}

export interface GetSchoolDetailsInput {
schoolId: number;
}
export interface SchoolDetails {
id: number;
name: string;
address?: Maybe<string>;
createdAt: string;
updatedAt: string;
roles: Array<UserRole>;
}
export const GetGetSchoolDetailsQueryKey = "/schools/[schoolId]";
export function getGetSchoolDetails(args:{variables: GetSchoolDetailsInput; headers: Headers; signal?: AbortSignal}){
	return apiGet<SchoolDetails>({path: GetGetSchoolDetailsQueryKey, signal: args.signal, headers: args.headers, variables: args.variables })}
export function useGetGetSchoolDetailsQuery<T = ApiRequestResult<SchoolDetails>>(options: UseQueryOptions<ApiRequestResult<SchoolDetails>, AxiosError<ServerErrorResponse<unknown>>, T, [string, GetSchoolDetailsInput, Headers]> & {variables: GetSchoolDetailsInput; headers:Headers}){
	return useQuery({
				...options,
				queryKey: [GetGetSchoolDetailsQueryKey, options.variables, options.headers],
				queryFn: async ({signal}) => getGetSchoolDetails({signal, headers: options.headers, variables: options.variables}),});}
export function useGetGetSchoolDetailsLazyQuery(options?: UseMutationOptions<ApiRequestResult<SchoolDetails>, AxiosError<ServerErrorResponse<unknown>>, {headers?:Headers;variables:GetSchoolDetailsInput}>) { return useMutation((args: { headers: Headers; variables: GetSchoolDetailsInput}) => getGetSchoolDetails({headers:args.headers,variables:args.variables}), options);}