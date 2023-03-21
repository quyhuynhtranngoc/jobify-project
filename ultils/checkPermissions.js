import { UnAuthenticatedError } from "../errors/index.js";

export default function checkPermissions(requestUser, resourceUserId) {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError("not authorized to access this route");
}
