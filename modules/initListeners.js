import { renderComments } from "./renderComments.js";

const addButton = document.querySelector(".add-form-button");
addButton.addEventListener("click", () => {
  if (!nameInput.value || !text.value) {
    alert("Заполните все поля.");
    return;
  }
  const newComment = {
    nameInput: sanitizeHTML(nameInput.value),
    date: new Date(),
    text: sanitizeHTML(text.value),
    likes: 0,
    isliked: false,
  };
  commentsGroup.push(newComment);

  nameInput.value = "";
  text.value = "";
  renderComments();
});
