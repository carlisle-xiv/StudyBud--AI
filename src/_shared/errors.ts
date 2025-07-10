import { StatusBasedError } from "./@types";

export const AUTHENTICATION_FAILED_STATUS = 401;

const ERRORS: StatusBasedError = {
  1000: "Sorry, something went wrong. We are looking into it.",
  999: "We are having connection problems. Please verify that you have internet access.",
  500: "Something unexpected occurred. Relax, we'll fix it soon",
  401: "Authentication Failed!",
  409: "Duplicate Resource!", // override in local module with a better error message
  452: "You have not yet been added to the system. Please contact an administrator to add you.",
  400: "The data you sent has some errors. Please ensure everything is correct and try again",
  403: "User already exists in school.",
  503: "Service is currently unavailable at the moment. Please try again later.",
};

export default ERRORS;
