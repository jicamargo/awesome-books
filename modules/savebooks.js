const saveBooks = (arrBooks) => localStorage.setItem('bookData', JSON.stringify(arrBooks));

export default saveBooks;