import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import K from "@/_shared/constants";
import { Maybe } from "@/_shared/lib/api";
import { AuthenticatedUser } from "@/_shared/generated";
import { getLocalForage } from "@/_shared/lib/localforage";
import { getBaseApiUrl } from "@/_shared/services/authService";
import { getHeaders } from "@/_shared/services/apiService";

export const AUTH_USER_DB_KEY = "@store/user";
export const ProfilesStoreKey = "@store/profiles";

export type AuthUser = AuthenticatedUser & {
  token: string;
  refreshToken: string;
};

export function useCurrentUser() {
  const navigate = useNavigate();

  const cachedUser = useCachedUser();
  const profiles = useCachedUserProfiles();

  const clearCache = useMutation(clearLocalCache);
  const logout = useMutation(logoutUser);

  const user = cachedUser.data
    ? profiles.data?.[String(cachedUser.data)]
    : null;

  const hasToken = !!user?.token;
  const isAuthenticated = hasToken;

  const isLoading = cachedUser.isFetching || profiles.isFetching;

  async function signOut() {
    if (!user?.token) return;
    await clearCache.mutateAsync({ id: user?.id });
    logout.mutate({
      token: user?.token,
    });
    localStorage.clear();
    navigate("/auth/login", { replace: true });
  }

  return {
    signOut,
    currentUser: user,
    roles: getUserRoles(user),
    isAuthenticated,
    isLoading,
    hasToken,
    schoolId: 1, // TODO: fix mock!
  };
}

function getUserRoles(user?: Maybe<AuthenticatedUser>): string[] {
  const rolesSet = new Set<string>([]);
  user?.roles.map((r) => rolesSet.add(r.role));

  return [...rolesSet.values()];
}

function useCachedUser() {
  return useQuery({
    queryKey: [AUTH_USER_DB_KEY],
    queryFn: async () => {
      const localforage = await getLocalForage();
      const activeUser = await localforage.getItem<AuthUser>(AUTH_USER_DB_KEY);
      return activeUser;
    },
    select: (data) => data?.id,
  });
}

function useCachedUserProfiles() {
  return useQuery({
    queryKey: [ProfilesStoreKey],
    queryFn: async () => {
      const localforage = await getLocalForage();
      const store = localforage.createInstance({ name: ProfilesStoreKey });
      const keys = await store.keys();
      const result = await Promise.all(
        keys.map(async (key) => {
          const value = await store.getItem<AuthUser>(key);
          return [key, value] as const;
        }),
      );
      return result.reduce<Record<string, AuthUser | null>>(
        (acc, [id, value]) => {
          acc[id] = value;
          return acc;
        },
        {},
      );
    },
  });
}

export function useAddProfile() {
  return useMutation({
    mutationFn: async (data: AuthUser) => {
      const localforage = await getLocalForage();
      const profilesStore = localforage.createInstance({
        name: ProfilesStoreKey,
      });
      return profilesStore.setItem(String(data.id), data);
    },
  });
}

async function clearLocalCache(variables: { id: number }) {
  const localforage = await getLocalForage();

  const profileStore = localforage.createInstance({ name: ProfilesStoreKey });
  await profileStore.removeItem(String(variables.id));

  await localforage.clear();
  return true;
}

export function useSetActiveProfile() {
  return useMutation({
    mutationFn: async (data: AuthUser) => {
      const localforage = await getLocalForage();
      await localforage.setItem(K.STORAGE_KEYS.ACCESS_TOKEN, data.token);
      await localforage.setItem(
        K.STORAGE_KEYS.REFRESH_TOKEN,
        data.refreshToken,
      );
      return localforage.setItem(AUTH_USER_DB_KEY, data);
    },
  });
}

function logoutUser(variables: { token: string }) {
  return axios.put(
    "/logout",
    {},
    {
      baseURL: getBaseApiUrl(),
      headers: getHeaders({
        token: variables.token,
      }),
    },
  );
}
