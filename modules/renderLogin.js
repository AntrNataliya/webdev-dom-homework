export const renderLoginForm = () => {
  const container = document.querySelector(".container");

  const loginHtml = `
  <form class="login-form">
        <input
          type="text"
          class="login-form__login"
          id="name-input"
          placeholder="Введите ваш логин"
        />
        <input 
          type="password"
          class="login-form__password"
          placeholder="Введите ваш пароль"
          id="text-input"
        ></input>
        <div class="login-form__button-box">
          <button class="login-form__button">Войти</button>
        </div>
      </form>
   `;
  container.innerHTML = loginHtml;
  // сделать клик по кнопке войти, вызвать ф-ю логин из апи в нее передать то что нах-ся в полях после этого обработать ответ от сервера апи и сохранить токен и имя пользователя. Сделать переменную имя и вызвать функцию сет неим обработка ошибок, если ввел неправ логин или пароль
  // если все успешно то вызвать функцию рендер комментс
};
