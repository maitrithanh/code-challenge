import { user } from "../data/user";

export const checkLogin = (username: string, passsword: string) => {
  const dataUser = user.find((u) => {
    return u.username === username && u.password === passsword;
  });
  if (!dataUser) {
    //handle wrong
    throw new Error("Username or Password Wrong!");
  }
  return dataUser;
};

export const setUser = (user: object) => {
  localStorage.setItem("userData", JSON.stringify(user));
};

export const getUser = () => {
  const data = localStorage.getItem("userData") as string;
  if (data) {
    return JSON.parse(data);
  }
  return "";
};

export const removeUser = () => {
  localStorage.removeItem("userData");
};
