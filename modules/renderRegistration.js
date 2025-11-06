import { registration, setName, setToken } from "./api.js";
import { fetchAndRender } from "./fetchAndRender.js";
import { renderComments } from "./renderComments.js";
import { renderLoginForm } from "./renderLogin.js";

export const renderRegistrationForm = () => {
  const container = document.querySelector(".container");

  const loginHtml = `
  <form class="login-form">
    <h1> Форма регистрации</h1>
     <input
      type="text"
      class="login-form__name"
      placeholder="Введите имя"
      id="name"
      required
    />
    <input
      type="text"
      class="login-form__login"
      placeholder="Введите ваш логин"
      id="login"
      required
    />
    <input 
      type="password"
      class="login-form__password"
      placeholder="Введите ваш пароль"
      id="password"
      required
    ></input>
    <fieldset class="add-form-registry">
      <button class="login-form__button button-main" type="submit">Зарегистрироваться</button>
      <ul class="add-form__button-link entry">
      Войти
      </ul>
  </fieldset>
   `;
  container.innerHTML = loginHtml;
  document.querySelector(".entry").addEventListener("click", () => {
    renderLoginForm();
  });

  const nameEl = document.querySelector("#name");
  const loginEl = document.querySelector("#login");
  const passwordEl = document.querySelector("#password");
  const enterButtonEl = document.querySelector(".button-main");
  enterButtonEl.addEventListener("click", () => {
    if (!loginEl.value || !passwordEl.value) alert("Заполните все поля.");
    return;
  });
  submitButtonEl.addEventListener("click", () => {
    registration(nameEl.value, loginEl.value, passwordEl.value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setToken(data.user.token);
        setName(data.user.name);
        fetchAndRender();
      });

    renderComments();
  });
  // сделать клик по кнопке войти, вызвать ф-ю логин из апи
  // в нее передать то что нах-ся в полях после этого обработать
  // ответ от сервера апи и сохранить токен и имя пользователя.
  // Сделать переменную имя и вызвать функцию сет неим обработка ошибок,
  //  если ввел неправ логин или пароль
  // если все успешно то вызвать функцию рендер комментс
  // });
};
// export const initAddCommentListener = () => {
//   const nameInput = document.getElementById("name-input");
//   const text = document.getElementById("text-input");
//   const addButton = document.querySelector(".button-main");

//   // addButton.addEventListener("click", () => {
//   //   if (!nameInput.value || !text.value)
//   //     alert("Заполните все поля.");
//   //     return;
//   //   })

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
//   }
// };
