import saveBooks from './savebooks.js';

const addBook = (author, title, arrBooks) => {
  arrBooks.push({ author, title });
  saveBooks(arrBooks);
  return arrBooks;
};

export default addBook;