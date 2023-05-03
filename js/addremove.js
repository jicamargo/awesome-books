const booklist = {
  books: [],

  getBooks() {
    this.books = JSON.parse(localStorage.getItem('bookData')) || [];
  },

  saveBooks() {
    localStorage.setItem('bookData', JSON.stringify(this.books));
  },

  ShowBookList() {
    const bookList = document.getElementById('booklist');

    bookList.textContent = '';
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      bookList.appendChild(div);
      div.classList = `bookinfo ${(index % 2 === 0) ? 'grayBackground' : 'whiteBackground'}`;

      const title = document.createElement('div');
      title.textContent = `"${book.title}" by ${book.author}`;
      div.appendChild(title);

      const removeBtn = document.createElement('button');
      removeBtn.classList = 'button removebtn';
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeBtn.parentElement.remove();
        this.books.splice(index, 1);
        this.saveBooks();
      });

      div.appendChild(removeBtn);
    });
  },

  addBook(author, title) {
    this.books.push({ author, title });
    this.saveBooks();
    this.ShowBookList();
  },
};

const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  booklist.addBook(author.value, title.value);
  title.value = '';
  author.value = '';
});

booklist.getBooks();
booklist.ShowBookList();

// update the date and time

function updateDateTime() {
  const currentDateTime = new Date();
  const dateTimeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  document.getElementById('currentDateTime').textContent = currentDateTime.toLocaleDateString('en-US', dateTimeOptions);
}

updateDateTime();
setInterval(updateDateTime, 1000);

// functios to display the add new section 

const listMenu = document.getElementById('list-menu');
const addNewMenu = document.getElementById('add-new-menu');
const contactMenu = document.getElementById('contact-menu');

const listSection = document.getElementById('list-section');
const addNewSection = document.getElementById('add-new-section');
const contactSection = document.getElementById('contact-section');

listMenu.addEventListener('click', function() {
  hideAllSections();
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
  addNewMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

addNewMenu.addEventListener('click', function() {
  hideAllSections();
  addNewSection.style.display = 'block';
  addNewMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  contactMenu.classList.remove('active-menu');
});

contactMenu.addEventListener('click', function() {
  hideAllSections();
  contactSection.style.display = 'block';
  contactMenu.classList.add('active-menu');
  listMenu.classList.remove('active-menu');
  addNewMenu.classList.remove('active-menu');
});

function hideAllSections() {
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
}

function init() {
  hideAllSections(); 
  listSection.style.display = 'block'
  listSection.style.display = 'block';
  listMenu.classList.add('active-menu');
}

// load the page with the first page active 
init();