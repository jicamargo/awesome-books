const getBooks = () => JSON.parse(localStorage.getItem('bookData')) || [];

export default getBooks;