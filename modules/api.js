import { fetchAndRender } from "./fetchAndRender.js";
const authHost = "https://wedev-api.sky.pro/api/user";

export let token = "";
export let name = "";

export const setToken = (newToken) => {
  token = newToken;
};
export const updateName = (newName) => {
  console.log(newName);
  name = newName;
};

export const fetchComments = async () => {
  const response = await fetch(
    "https://wedev-api.sky.pro/api/v2/nataliya-antropova/comments"
  );
  const data = await response.json();
  return data.comments;
};

export const postComment = (name, text) => {
  return fetch("https://wedev-api.sky.pro/api/v2/:nataliya-antropova", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, text }),
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error("Ошибка сервера");
      }
      if (response.status === 400) {
        throw new Error("Неверный запрос");
      }

      if (response.status === 201) {
        return response.json();
      }
    })

    .then(() => {
      fetchAndRender();
    });
};

export function loginUser(login, password) {
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
}
export const login = (login, password) => {
  return fetch(authHost + "/login", {
    method: "POST",
    body: JSON.stringify({ login: login, password: password }),
  });
};

export const registration = (name, login, password) => {
  return fetch(authHost, {
    method: "POST",
    body: JSON.stringify({ name: name, login: login, password: password }),
  });
};
