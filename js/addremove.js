/*********** If there is info -> query it, unless create and empty array ************** */
const bookArray = JSON.parse(localStorage.getItem('bookArray')) || [];

function SaveToLocalStorage() {
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

function ShowBookList() {
  const bookList = document.getElementById('booklist');

  bookList.innerHTML = '';
  bookArray.forEach((book, index) => {
    const div = document.createElement('div');
    bookList.appendChild(div);

    const title = document.createElement('h2');
    title.textContent = book.title;
    div.appendChild(title);

    const author = document.createElement('h2');
    author.textContent = book.author;
    div.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBtn.parentElement.remove();
      bookArray.splice(index, 1);
      SaveToLocalStorage();
    });
    
    div.appendChild(removeBtn);
    
    const hr = document.createElement('hr');
    div.appendChild(hr);
  });
}

function addBook(author, title) {
  bookArray.push({author, title});
  SaveToLocalStorage();
  ShowBookList();
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', () => {
  addBook(author.value, title.value);
  title.value = '';
  author.value = '';
});

SaveToLocalStorage();
ShowBookList();