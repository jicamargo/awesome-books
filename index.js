import {updateDateTime} from './modules/updatedatetime.js';
import bookListClass from './modules/booklist.js';

// Creates a new instance of BookList class, send the parent container id to hold the book List in index.html 
const bookList = new bookListClass("booklist");

bookList.getBooks();
bookList.ShowBookList("booklist");

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  bookList.addBook(author.value, title.value);
  title.value = '';
  author.value = '';
});


// update the date and time
setInterval(() => {document.getElementById('currentDateTime').textContent = updateDateTime()}, 1000);

// functios to display the add new section

const listMenu = document.getElementById('list-menu');
const addNewMenu = document.getElementById('add-new-menu');
const contactMenu = document.getElementById('contact-menu');

const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new-section');
const contactSection = document.getElementById('contact-section');

function hideAllSections() {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
}

listMenu.addEventListener('click', () => {
  hideAllSections();
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
  addNewMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

addNewMenu.addEventListener('click', () => {
  hideAllSections();
  addNewSection.style.display = 'block';
  addNewMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

contactMenu.addEventListener('click', () => {
  hideAllSections();
  contactSection.style.display = 'block';
  contactMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  addNewMenu.classList.remove('active-menu');
});

function init() {
  hideAllSections();
  listSection.style.display = 'block';
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
}

// load the page with the first page active
init();
