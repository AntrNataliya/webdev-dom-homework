import { login, setToken, setName } from "./api.js";
import { renderComments } from "./renderComments.js";
import { renderRegistrationForm } from "./renderRegistration.js";

export const renderLoginForm = () => {
  const container = document.querySelector(".container");

  const loginHtml = `
  <form class="login-form">
    <h1> Форма входа</h1>
    <input
      type="text"
      class="auth-input"
      placeholder="Введите ваш логин"
      id="login"
      required
    />
    <input 
      type="password"
      class="auth-input"
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

  document.querySelector(".registry").addEventListener("click", () => {
    renderRegistrationForm();
  });
  const loginEl = document.querySelector("#login");
  const passwordEl = document.querySelector("#password");
  const enterButtonEl = document.querySelector(".button-main");

  enterButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!loginEl.value || !passwordEl.value)
      return alert("Заполните все поля.");
    login(loginEl.value, passwordEl.value)
      .then((data) => {
        console.log(data.user.token);
        setToken(data.user.token);
        setName(data.user.name);
      })
      .then(() => {
        renderComments();
      })
      .catch((error) => alert(error.message));
  });
};
