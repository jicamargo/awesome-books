//define class bookList 
import {getBooks} from './getbooks.js';
import {saveBooks} from './savebooks.js';
import {addBook} from './addbook.js';
import {ShowBookList} from './showbooklist.js';

class bookListClass {
  constructor(parentElemId) {
    this.books = [];
    this.parentElemId = parentElemId;
  }

  // define methods, to save and read data from local storage, and show the book list in the parent element with id = parentElemId

  getBooks = () => this.books = getBooks();
  
  saveBooks = () => saveBooks(this.books);

  ShowBookList = () => ShowBookList(this.parentElemId, this.books);

  addBook = (author, title) => {
    this.books = addBook(author, title, this.books);
    this.ShowBookList();
  };

  init = () => {
    this.getBooks();
    this.ShowBookList();
  }
};

export default bookListClass;
