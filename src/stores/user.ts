import { writable } from "svelte/store";

const userStorage = writable(getStorageUser());
function getStorageUser() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, jwt: null };
}
export function setStorageUser(user: { username: string; jwt: string; }) {
  localStorage.setItem("user", JSON.stringify(user));
}
export function setUser(user: { username: string; jwt: string; }) {
  userStorage.set(user);
}
export function logoutUser() {
  localStorage.clear();
  userStorage.set({ username: null, jwt: null });
}
export default userStorage;