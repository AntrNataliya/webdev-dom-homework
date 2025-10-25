import { commentsGroup, updateComments } from "./commentsGroup.js";
import { sanitizeHTML } from "./sanitize.js";
import { renderComments } from "./renderComments.js";
import { postComment } from "./api.js";

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
      const commentText = comment.querySelector(".comment-text").textContent;
      text.value = commentText;
    });
  }
};

// export const initAddCommentListener = () => {
//   const nameInput = document.getElementById("name-input");
//   const text = document.getElementById("text-input");
//   const addButton = document.querySelector(".button-main");

//   addButton.addEventListener("click", () => {
//     if (!nameInput.value || !text.value)
//       alert("Заполните все поля.");
//       return;
//     }

//     document.querySelector(".form-loading").style.display = "block";
//     document.querySelector(".add-form").style.display = "none";

//     postComment(sanitizeHTML(nameInput.value), sanitizeHTML(text.value))
//       .then((data) => {
//         document.querySelector(".form-loading").style.display = "none";
//         document.querySelector(".add-form").style.display = "flex";

//         nameInput.value = "";
//         text.value = "";
//       })
//       .catch((error) => {
//         document.querySelector(".form-loading").style.display = "none";
//         document.querySelector(".add-form").style.display = "flex";

//         if (error.message === "Faild to fetch") {
//           alert("Нет интернета, попробуйте снова");
//         }

//         if (error.message === "Ошибка сервера") {
//           alert("Ошибка сервера");
//         }

//         if (error.message === "Неверный запрос") {
//           alert("Имя и комментарий должны быть не короче 3х символов");
//         }
//       });
//   })
// };
