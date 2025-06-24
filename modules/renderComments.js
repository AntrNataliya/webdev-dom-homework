import { commentsGroup } from "./commentsGroup.js";
import { initLikeListeners, initReplyListeners } from "./initListeners.js";

export const renderComments = () => {
  const list = document.querySelector(".comments");
  list.innerHTML = commentsGroup
    .map((comment, index) => {
      console.log("comment", comment.nameInput);
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.nameInput}</div>
          <div>${comment.date.toLocaleDateString()}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index="${index}" class="like-button
             ${comment.isLiked ? "-active-like" : ""}"></button>
          </div>
        </div>
      </li>
    `;
    })
    .join("");
  initLikeListeners(renderComments);
  initReplyListeners();
};
