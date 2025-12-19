import { getBooks } from "./api.js";

const BookList = document.querySelector(".books-list");

function updateUi(books) {
  let cutSome = books.slice(0, 12);
  BookList.innerHTML = "";

  cutSome.forEach((book) => {
    let { id, title, description, author, year } = book;
    BookList.innerHTML += `
      <div class="book-box" data-id="${id}">
        <img
          src="./pictures/red-text-book-closed-icon/JEMA GER 1639-10.jpg"
          alt="${title}"
          class="book-box-img"
        />
        <h4 class="book-title">${title}</h4>
        <p class="book-text">${description}</p>
        <p class="book-author">${author}</p>
        <p class="presentation-year">${year}</p>
      </div>
    `;
  });
}

async function init() {
  const books = await getBooks();
  updateUi(books);
}

init();

BookList.addEventListener("click", (e) => {
  let bookBox = e.target.closest(".book-box");
  if (!bookBox) return;
  let id = bookBox.dataset.id;
  console.log(id);

  window.location.href = `../html/detailes.html?id=${id}`;
});
