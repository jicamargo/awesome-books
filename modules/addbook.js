import saveBooks from './savebooks.js';

export default function addBook(author, title, arrBooks) {
  arrBooks.push({ author, title });
  saveBooks(arrBooks);
  return arrBooks;
}
