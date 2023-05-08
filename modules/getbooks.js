export default function getBooks() {
  return JSON.parse(localStorage.getItem('bookData')) || [];
}
