export const renderLogin = (login, password) => {
  return fetch(authHost + "/login", {
    method: "POST",
    body: JSON.stringify({ login: login, password: password }),
  });
};
