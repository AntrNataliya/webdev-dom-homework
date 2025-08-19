import { fetchAndRender } from "./fetchAndRender.js";

export const fetchComments = async () => {
  const response = await fetch(
    "https://wedev-api.sky.pro/api/v1/nataliya-antropova/comments"
  );
  const data = await response.json();
  return data.comments;
};

export const postComment = (name, text) => {
  return fetch("https://wedev-api.sky.pro/api/v1/nataliya-antropova/comments", {
    method: "POST",
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
