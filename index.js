import updateDateTime from './modules/updatedatetime.js';
import BookListClass from './modules/booklist.js';
import initNavBar from './modules/setupnavbar.js';

// configures the clic events for menu bara items and hidde/show the sections
initNavBar();

// update the date and time
setInterval(() => { document.getElementById('currentDateTime').textContent = updateDateTime(); }, 1000);

// Creates a new instance of BookList class, send the parent container id to hold the book List
const bookList = new BookListClass('booklist');
bookList.init();

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  bookList.addBook(author.value, title.value);
  title.value = '';
  author.value = '';
});
