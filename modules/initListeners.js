import { commentsGroup, updateComments } from "./commentsGroup.js";
import { renderComments } from "./renderComments.js";

export const initLikeListeners = () => {
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
      // const commentText = comment.querySelector(".comment-text").textContent;

      const commentText = comment.querySelector(".comment-text").textContent;
      text.value = commentText;
      const authorName = comment.querySelector(".author-name").textContent;
      const formattedText = `"${authorName},${commentText}"`;
      text.value = formattedText;
    });
  }
};
