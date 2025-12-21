import { getBooks } from "./api.js";
import { updateUi } from "./app.js";

const SearchEL = document.getElementById("search-input");
const SubmitEl = document.querySelector(".search-btn");

let res = await getBooks();

console.log(res);

SubmitEl.addEventListener("click", () => {
  let searched = SearchEL.value;

  let search = res.filter((item) =>
    item.title.toLowerCase().includes(searched)
  );

  updateUi(search);
});
