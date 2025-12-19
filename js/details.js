const FulInfo = document.querySelector(".book-details");
const API = "http://localhost:5000/api/books";

// URL dan id olish
const id = window.location.search.split("=").slice(-1).join();

async function getBookById(id) {
  try {
    const res = await fetch(`${API}/${id}`);
    if (!res.ok) throw new Error("Kitob topilmadi");

    const data = await res.json();
    renderBook(data.data);
  } catch (error) {
    console.error(error);
  }
}

function renderBook(book) {
  let { title, author, year, description } = book;

  FulInfo.innerHTML = `
    <div class="details-card" data-id="${book.id}">
      <img 
        src="../pictures/red-text-book-closed-icon/JEMA GER 1639-10.jpg"
        }" 
        alt="${title}" 
        class="details-img"
      />
      <div class="details-content">
        <h2 class="details-title">${title}</h2>
        <p class="details-author">Author: ${author}</p>
        <p class="details-year">Year: ${year}</p>
        <p class="details-desc">${
          description || "No description available."
        }</p>
      </div>
    </div>
  `;
}

if (id) {
  getBookById(id);
}
