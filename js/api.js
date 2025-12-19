const API = "http://localhost:5000/api/books";

export async function getBooks() {
  try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("API da muammo bor");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
