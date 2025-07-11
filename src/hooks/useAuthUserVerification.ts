import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInvalidateQueries } from "@/_shared/hooks/useInvalidateQueries";
import { Maybe } from "@/_shared/lib/api";
import { VerifiedUserLoginResponse } from "@/_shared/generated";
import { toast } from "sonner";
import { processErrorResponse } from "@/_shared/services/errorService";
import { hasSubmodulePrivilege } from "@/_shared/services/routingService";
import { ProfilesStoreKey } from "@/_shared/hooks/useCurrentUser";
import { AUTH_USER_DB_KEY } from "@/_shared/hooks/useCurrentUser";
import { useAddProfile } from "@/_shared/hooks/useCurrentUser";
import { useSetActiveProfile } from "@/_shared/hooks/useCurrentUser";

export function useAuthUserVerification() {
  const [submissionStage, setSubmissionStage] = useState<string>();

  const { mutateAsync: setActiveProfile } = useSetActiveProfile();
  const { mutateAsync: addProfile } = useAddProfile();

  const navigate = useNavigate();
  const invalidateQueries = useInvalidateQueries();

  function resetAssociatedQueries() {
    return invalidateQueries([AUTH_USER_DB_KEY, ProfilesStoreKey]);
  }

  async function verifyUser(
    verifiedResponse: Maybe<VerifiedUserLoginResponse>,
  ) {
    if (
      !verifiedResponse?.accessToken ||
      !verifiedResponse?.refreshToken ||
      !verifiedResponse?.user
    ) {
      setSubmissionStage(undefined);
      return toast.error("Authentication failed");
    }

    const authUser = {
      ...verifiedResponse.user,
      token: verifiedResponse.accessToken,
      refreshToken: verifiedResponse.refreshToken,
    };

    setSubmissionStage("Logging you in...");
    await setActiveProfile(authUser, {
      onError(error: any) {
        setSubmissionStage(undefined);
        processErrorResponse(error, {
          fixedErrorMessage:
            "An error occurred while trying to update your account. Please try again.",
        });
      },
    });

    await addProfile(authUser, {
      onError(error: any) {
        setSubmissionStage(undefined);
        processErrorResponse(error, {
          fixedErrorMessage:
            "An error occurred while trying to update your account. Please try again.",
        });
      },
    });

    setSubmissionStage("redirecting...");
    // TODO: get and replace [] with the protected module routes
    const accessibleModules = [].filter((protectedModule) =>
      hasSubmodulePrivilege(
        authUser?.privileges! ?? [],
        protectedModule.moduleId,
        protectedModule.subModuleId,
      ),
    );

    await resetAssociatedQueries();
    navigate(accessibleModules[0]?.route ?? "*");
  }

  const setSubmitting = useCallback((value: string | undefined | boolean) => {
    if (typeof value === "boolean")
      setSubmissionStage(value ? "Submitting..." : undefined);
    if (typeof value === "string") setSubmissionStage(value);
    setSubmissionStage(undefined);
  }, []);

  return {
    isVerifying: !!submissionStage,
    currentStage: submissionStage,
    setSubmitting,
    verifyUser,
  };
}
