// define class bookList
import getBooks from './getbooks.js';
import saveBooks from './savebooks.js';
import addBook from './addbook.js';
import ShowBookList from './showbooklist.js';

export default class BookListClass {
  constructor(parentElemId) {
    this.books = [];
    this.parentElemId = parentElemId;
  }

  // define methods, to save and read data from local storage, show booklist in the parent element

  getBooks = () => {
    this.books = getBooks();
    return this.books;
  }

  saveBooks = () => {
    saveBooks(this.books);
    return this.books;
  }

  ShowBookList = () => ShowBookList(this.parentElemId, this.books);

  addBook = (author, title) => {
    this.books = addBook(author, title, this.books);
    this.ShowBookList();
  };

  init = () => {
    this.getBooks();
    this.ShowBookList();
  }
}
