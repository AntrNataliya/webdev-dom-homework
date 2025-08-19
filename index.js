import { fetchAndRender } from "./modules/fetchAndRender.js";

document.querySelector(".comments").innerHTML =
  "Пожалуйста подождите, загружаю комментарии...";

fetchAndRender();
