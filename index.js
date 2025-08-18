import { updateComments } from "./modules/commentsGroup.js";
import { fetchAndRender } from "./modules/fetchAndRender.js";
import { initAddCommentListener } from "./modules/initListeners.js";
import { renderComments } from "./modules/renderComments.js";

document.querySelector(".comments").innerHTML =
  "Пожалуйста подождите, загружаю комментарии...";

fetchAndRender().then((data) => {
  updateComments(data);
  renderComments();
});

initAddCommentListener(renderComments);
