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
  validateEmail(email);
  validatePassword(password);
  if (!name?.trim()) throw new Error("Please enter your name.");
  validateAvatar(avatar);
  return { name: name.trim(), avatar, email: email.trim() };
};

export const signin = async ({ email, password }) => {
  // return fetch(`${baseUrl}/signin`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, password }),
  // }).then(handleServerResponse);
  validateEmail(email);
  validatePassword(password);
  return { name: "test user", email: email.trim() };
};

function validateEmail(email) {
  if (!email?.trim()) throw new Error("Please enter your email address.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    throw new Error("Please enter a valid email address.");
  }
}

function validatePassword(password) {
  if (!password?.trim()) throw new Error("Please enter your password.");
  if (password.trim().length < 8) {
    throw new Error("Your password must be at least 8 characters.");
  }
}

function validateAvatar(avatar) {
  try {
    const url = new URL(avatar);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error();
  } catch {
    throw new Error("Please enter a valid avatar URL.");
  }
}

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
