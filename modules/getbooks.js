export const getBooks = () => JSON.parse(localStorage.getItem('bookData')) || [];
