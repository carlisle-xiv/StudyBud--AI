import { useCurrentUser } from "@/_shared/hooks/useCurrentUser";
import {
  hasModulePrivilege,
  hasSubmodulePrivilege,
} from "@/_shared/services/routingService";
import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import routeNames from "../config/routeNames";

export default function withAccessPrivilege(opts: {
  moduleId?: string;
  submoduleId?: string;
  schoolIdRequired?: boolean;
}) {
  return function pageWrapper(Component: ComponentType) {
    return function Page() {
      const auth = useCurrentUser();

      const orgId = auth.schoolId;

      if (auth.isLoading) return null;

      if (!auth.currentUser) return <UnAuthenticatedAccess />;

      if (typeof orgId !== "number" && (opts.schoolIdRequired ?? true))
        return <Navigate to="/schools/switch" />;

      if (
        opts.moduleId &&
        opts.submoduleId &&
        !hasSubmodulePrivilege(
          auth.currentUser?.privileges,
          opts.moduleId,
          opts.submoduleId,
        )
      )
        return <PageNotFound />;

      if (opts.moduleId && opts.submoduleId) return <PageNotFound />;

      if (
        opts &&
        opts.moduleId &&
        !hasModulePrivilege(auth.currentUser?.privileges, opts.moduleId)
      )
        return <PageNotFound />;

      if (opts && opts.moduleId) return <PageNotFound />;

      return <Component />;
    };
  };
}

function PageNotFound() {
  return (
    <div className="py-12">
      <p className="mb-2">404 - Page not found</p>
      <p className="mb-6 max-w-md text-center text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or you don&apos;t
        have permission to access it.
      </p>
      <a href="/auth/login" className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Back to Login
        </button>
      </a>
    </div>
  );
}

function UnAuthenticatedAccess() {
  return (
    <div className="h-screen py-12">
      <p className="mb-2">Access Denied</p>
      <p className="mb-4 max-w-md text-center text-gray-500">
        You need to sign in to access this page.
      </p>
      <a href="/auth/login" className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Sign in
        </button>
      </a>
    </div>
  );
}

function getModuleById(moduleId: string) {
  const modules = Object.values(routeNames);
  return modules.find(({ id }) => id === moduleId);
}
