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

  // const nameEl = document.querySelector("#name");
  const loginEl = document.querySelector("#login");
  const passwordEl = document.querySelector("#password");
  const enterButtonEl = document.querySelector(".button-main");
  enterButtonEl.addEventListener("click", () => {
    if (!loginEl.value || !passwordEl.value) alert("Заполните все поля.");
    return;
  });
};
