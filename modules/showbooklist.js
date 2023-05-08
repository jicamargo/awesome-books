import saveBooks from './savebooks.js';

// builds the elements and show the books list inside the parent element

export default function ShowBookList(parentElemId, arrBooks) {
  const bookListElem = document.getElementById(parentElemId);

  bookListElem.textContent = '';
  arrBooks.forEach((book, index) => {
    const div = document.createElement('div');
    bookListElem.appendChild(div);
    div.classList = 'bookinfo';

    const title = document.createElement('div');
    title.textContent = `"${book.title}" by ${book.author}`;
    div.appendChild(title);

    const removeBtn = document.createElement('button');
    removeBtn.classList = 'button removebtn';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBtn.parentElement.remove();
      arrBooks.splice(index, 1);
      saveBooks(arrBooks);
    });

    div.appendChild(removeBtn);
  });
}
