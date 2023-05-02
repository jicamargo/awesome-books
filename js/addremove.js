const booklist = {
  books: [
      book = {  
        title: "",
        author: ""
      }
    ],

  getBooks: function() {
    this.books = JSON.parse(localStorage.getItem('bookArray')) || [];
  },

  saveBooks: function(){
    localStorage.setItem('bookArray', JSON.stringify(this.books));
  },
   
  ShowBookList: function() {
    const bookList = document.getElementById('booklist');
  
    bookList.textContent = '';
    this.books.forEach((book, index) => {
      const div = document.createElement('div');
      bookList.appendChild(div);
      div.classList ="bookinfo " + ((index % 2 === 0) ? "grayBackground" : "whiteBackground") ;
  
      const title = document.createElement('div');
      title.textContent = '"' + book.title + '" by ' + book.author;
      div.appendChild(title);
  
 
      const removeBtn = document.createElement('button');
      removeBtn.classList ="removebtn";
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeBtn.parentElement.remove();
        this.books.splice(index, 1);
        this.saveBooks();
      });
  
      div.appendChild(removeBtn);
  
    });
  },

  addBook: function(author, title) {
    this.books.push({ author, title });
    this.saveBooks();
    this.ShowBookList();
  }
}

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
