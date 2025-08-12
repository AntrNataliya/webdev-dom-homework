export let commentsGroup = [
  // {
  //   nameInput: "Глеб Фокин",
  //   date: new Date(),
  //   text: "Это будет первый комментарий на этой странице",
  //   likes: 5,
  //   isLiked: true,
  // },
  // {
  //   nameInput: "Варвара Ната",
  //   date: new Date(),
  //   text: "Мне нравится как оформлена эта страница! ❤",
  //   likes: 75,
  //   isLiked: true,
  // },
];
export function updateComments(newComments) {
  commentsGroup = newComments;
}
