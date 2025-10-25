import { fetchComments } from "./api.js";
import { updateComments } from "./commentsGroup.js";

import { renderComments } from "./renderComments.js";

export async function fetchAndRender() {
  const comments = await fetchComments();
  // console.log(comments);
  updateComments(comments);
  renderComments();
}
