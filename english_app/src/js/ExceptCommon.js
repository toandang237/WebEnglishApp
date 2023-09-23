/** @format */
export function ExceptCommon(e, id) {
  if (e.response.status !== undefined && e.response.status === 401) {
    deleteCookie("access-token", id);
    deleteCookie("current-user", id);
    deleteCookie("profile", id);
    deleteCookie("access-token", "");
    deleteCookie("current-user", "");
    deleteCookie("profile", "");
    window.location.href = "/";
  }
}

function deleteCookie(name, id) {
  document.cookie =
    name + `=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${id};`;
}
