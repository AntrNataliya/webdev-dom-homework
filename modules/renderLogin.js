import { login, updateName } from "./api.js";
import { renderComments } from "./renderComments.js";

export const renderLoginForm = () => {
  const container = document.querySelector(".container");

  const loginHtml = `
  <form class="login-form">
    <h1> Форма входа</h1>
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
    <div class="login-form__button-box">
      <button class="login-form__button button-main">Войти</button>
      <ul class="login-form__button-link registry" >
      Зарегистрироваться
      </ul>
    </div>
  </form>
   `;
  container.innerHTML = loginHtml;
  const loginEl = document.querySelector("#login");
  const passwordEl = document.querySelector("#password");
  const enterButtonEl = document.querySelector(".button-main");
  enterButtonEl.addEventListener("click", () => {
    if (!loginEl.value || !passwordEl.value) alert("Заполните все поля.");
    return;
  });
  enterButtonEl.addEventListener("click", () => {
    login(loginEl.value, passwordEl.value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        updateName(data);
        // renderComments();
      });
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
