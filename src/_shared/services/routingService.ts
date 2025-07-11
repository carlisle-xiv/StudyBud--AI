import { pascalCase } from "change-case";
import { tFunctionType } from "../@types";

export function hasModulePrivilege(
  userPrivileges: string[] | undefined,
  moduleId: string,
) {
  return userPrivileges?.some(
    (privilege) =>
      /^superuser/.test(privilege) || RegExp(`^${moduleId}\\.`).test(privilege),
  );
}

export function hasSubmodulePrivilege(
  userPrivileges: string[] | undefined,
  moduleId: string,
  submoduleId: string,
) {
  return userPrivileges?.some(
    (privilege) =>
      /^superuser/.test(privilege) ||
      RegExp(`^${moduleId}\\.allSubmodules\\.`).test(privilege) ||
      RegExp(`^${moduleId}\\.${submoduleId}\\.`).test(privilege),
  );
}

// TODO: WRITE TESTS
export function hasFunctionPrivilege(
  userPrivileges: string[],
  moduleId: string,
  submoduleId: string,
  functionId: string,
  functionType: tFunctionType,
) {
  return userPrivileges.some(
    (p) =>
      p === "superuser" ||
      p === `${moduleId}.allSubmodules.full` ||
      p === `${moduleId}.allSubmodules.${functionType}` ||
      p === `${moduleId}.${submoduleId}.full` ||
      p === `${moduleId}.${submoduleId}.${functionType}` ||
      p ===
        `${moduleId}.${submoduleId}.${functionType}${pascalCase(submoduleId)}` ||
      p === `${moduleId}.${submoduleId}.${functionId}`,
  );
}
