import { commentsGroup } from "./commentsGroup.js";
import { sanitizeHTML } from "./sanitize.js";
import { renderComments } from "./renderComments.js";
import { postComment } from "./api.js";

export const initLikeListeners = (renderComments) => {
  const likeButtons = document.querySelectorAll(".like-button");

  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const index = likeButton.dataset.index;
      const comment = commentsGroup[index];

      comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
      comment.isLiked = !comment.isLiked;

      renderComments();
    });
  }
};

export const initReplyListeners = () => {
  const comments = document.querySelectorAll(".comment");
  for (const comment of comments) {
    const text = document.getElementById("text-input");
    comment.addEventListener("click", () => {
      const commentText = comment.querySelector(".comment-text").textContent;
      text.value = commentText;
      // const currentComment = comments[comment.dataset.index];
      // text.value = `&{newComment.userName}: &{newComment.text}`;
    });
  }
};

export const initAddCommentListener = () => {
  const nameInput = document.getElementById("name-input");
  const text = document.getElementById("text-input");
  const addButton = document.querySelector(".add-form-button");

  addButton.addEventListener("click", () => {
    if (!nameInput.value || !text.value) {
      alert("Заполните все поля.");
      return;
    }
    const newComment = {
      name: sanitizeHTML(nameInput.value),
      text: sanitizeHTML(text.value),
    };
    postComment(newComment);

    nameInput.value = "";
    text.value = "";
    renderComments();
  });
};
