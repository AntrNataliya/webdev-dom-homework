"use strict";
// Код писать здесь

// const nameInput = document.getElementById("name-input");
// const text = document.getElementById("text-input");

// const commentsGroup = [
//   {
//     nameInput: "Глеб Фокин",
//     date: new Date(),
//     text: "Это будет первый комментарий на этой странице",
//     likes: 5,
//     isLiked: true,
//   },
//   {
//     nameInput: "Варвара Ната",
//     date: new Date(),
//     text: "Мне нравится как оформлена эта страница! ❤",
//     likes: 75,
//     isLiked: true,
//   },
// ];
// const renderComments = () => {
//   const list = document.querySelector(".comments");
//   list.innerHTML = commentsGroup
//     .map((comment, index) => {
//       return `
//       <li class="comment" data-index="${index}">
//         <div class="comment-header">
//           <div>${comment.nameInput}</div>
//           <div>${comment.date.toLocaleDateString()}</div>
//         </div>
//         <div class="comment-body">
//           <div class="comment-text">
//             ${comment.text}
//           </div>
//         </div>
//         <div class="comment-footer">
//           <div class="likes">
//             <span class="likes-counter">${comment.likes}</span>
//             <button data-index="${index}" class="like-button
//              ${comment.isLiked ? "-active-like" : ""}"></button>
//           </div>
//         </div>
//       </li>
//     `;
//     })
//     .join("");
//   likeHandler();
//   respondComment();
// };

// const likeHandler = () => {
//   const likeButtons = document.querySelectorAll(".like-button");

//   for (const likeButton of likeButtons) {
//     likeButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       const index = likeButton.dataset.index;
//       const comment = commentsGroup[index];

//       comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1;
//       comment.isLiked = !comment.isLiked;

//       renderComments();
//     });
//   }
// };
// renderComments();

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

// function respondComment() {
//   const comments = document.querySelectorAll(".comment");
//   for (const comment of comments) {
//     comment.addEventListener("click", () => {
//       const commentText = comment.querySelector(".comment-text").textContent;
//       text.value = commentText;
//       // const currentComment = comments[comment.dataset.index];
//       // text.value = `&{newComment.userName}: &{newComment.text}`;
//     });
//   }
// }
// function sanitizeHTML(str) {
//   return str
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;");
// }

console.log("It works!");
