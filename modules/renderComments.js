import { token, name, postComment } from "./api.js";
import { commentsGroup } from "./commentsGroup.js";
import { initLikeListeners, initReplyListeners } from "./initListeners.js";
import { renderLoginForm } from "./renderLogin.js";

export const renderComments = () => {
  console.log("token", token);
  const container = document.querySelector(".container");

  const commentsHtml = commentsGroup
    .map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.author.name}</div>
          <div>${new Date(comment.date).toLocaleDateString()}</div>
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
  const loginLink = `<p> <span class="login-link">Авторизируйтесь</span>, чтобы добавить комментарий</p>`;

  const addCommentsHtml = `
      <div class="add-form">
        <input
          type="text"
          class="add-form-name"
          
          placeholder="Введите ваше имя"
          readonly
          value="${name}"
          disabled
          id="name-input"
        />
        <textarea
          type="textarea"
          class="add-form-text"
          placeholder="Введите ваш коментарий"
          rows="4"
          id="text-input"
        ></textarea>
        <div class="add-form-row">
          <button class="add-form-button">Написать</button>
        </div>
      </div>
      <div class="form-loading" style="display: none; margin-top: 20px">
        Комментарий добавляется...>
      </div>`;

  const baseHtml = `
  <ul class="comments">${commentsHtml}</ul>
  ${token ? addCommentsHtml : loginLink}
  `;
  container.innerHTML = baseHtml;

  if (token) {
    const addButton = document.querySelector(".add-form-button");

    addButton.addEventListener("click", () => {
      const text = document.getElementById("text-input");
      if (!text.value) {
        alert("Заполните все поля.");
        return;
      }
      postComment(text.value).then(() => {
        text.value = "";
      });
    });
    initLikeListeners();
    initReplyListeners();
  } else {
    document.querySelector(".login-link").addEventListener("click", () => {
      renderLoginForm();
    });
  }
};
