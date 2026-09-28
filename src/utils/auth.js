import { handleServerResponse } from "./api";
// import { baseUrl } from "../utils/constants";

export const signup = async ({ name, avatar, email, password }) => {
  // return fetch(`${baseUrl}/signup`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name, avatar, email, password }),
  // }).then(handleServerResponse);
  return { name: "test user" };
};

export const signin = async ({ email, password }) => {
  // return fetch(`${baseUrl}/signin`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password }),
  // }).then(handleServerResponse);
  return { name: "test user" };
};

export const getUserInfo = () => {
  const token = localStorage.getItem("jwt");
  // return fetch(`${baseUrl}/users/me`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${token}`,
  //   },
  // }).then(handleServerResponse);
};

// export const signout = async ({ email, password }) => {
//   // return fetch(`${baseUrl}/signin`, {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({ email, password }),
//   // }).then(handleServerResponse);
//   return { name: "test user" };
// };
