export default function saveBooks(arrBooks) {
  return localStorage.setItem('bookData', JSON.stringify(arrBooks));
}
