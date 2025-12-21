import { getBooks } from "./api.js";

const BookList = document.querySelector(".books-list");
const Picks = document.getElementById("picks");
const ShowAllBooks = document.getElementById("show-all-books");

export function updateUi(books) {
  if (books.length == 0) {
    Picks.textContent = "404 NOT FOUND";
  }

  BookList.innerHTML = "";

  books.forEach((book) => {
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
  ShowAllBooks.addEventListener("click", (e) => {
    let show = ShowAllBooks.classList.toggle("show");
    if (show) {
      updateUi(books);
      ShowAllBooks.textContent = "Close";
    } else {
      let cutSome = books.slice(0, 12);
      ShowAllBooks.textContent = "More";
      updateUi(cutSome);
    }
  });

  if (books.length > 12) {
    let cutSome = books.slice(0, 12);
    updateUi(cutSome);
    ShowAllBooks.style.display = "block";
  } else {
    updateUi(books);
    ShowAllBooks.style.display = "none";
  }
}

init();

BookList.addEventListener("click", (e) => {
  let bookBox = e.target.closest(".book-box");
  if (!bookBox) return;
  let id = bookBox.dataset.id;
  window.location.href = `../html/detailes.html?id=${id}`;
});
