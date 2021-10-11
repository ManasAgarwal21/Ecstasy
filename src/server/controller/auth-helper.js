import { signout } from "./../../client/api/api-auth";

function authenticate(jwt, cb) {
  if (typeof window !== undefined) {
    sessionStorage.setItem("ECSID", JSON.stringify(jwt.token));
  }
  cb();
}

function isAuthenticated() {
  if (typeof window === undefined) return false;
  if (sessionStorage.getItem("ECSID")) {
    return JSON.parse(sessionStorage.getItem("ECSID"));
  } else return false;
}

function clearJWT(cb) {
  if (typeof window !== undefined) {
    sessionStorage.removeItem("ECSID");
  }
  cb();
  signout().then(() => {
    document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path='/'";
  });
}
export { authenticate, isAuthenticated, clearJWT };
