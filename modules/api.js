import { fetchAndRender } from "./fetchAndRender.js";

export const fetchComments = async () => {
  const response = await fetch(
    "https://wedev-api.sky.pro/api/v1/nataliya-antropova/comments"
  );
  const data = await response.json();
  return data.comments;
};

export const postComment = (newComment) => {
  fetch("https://wedev-api.sky.pro/api/v1/nataliya-antropova/comments", {
    method: "POST",
    body: JSON.stringify(newComment),
  }).then(() => fetchAndRender());
};
