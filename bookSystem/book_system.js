let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pageNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pageNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pageNumber: pageNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
                alert('Please fill in all fields correctly.');
    }

}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pageNumber').value = '';
}
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pageNumber').value = book.pageNumber;
    books.splice(index, 1);
    showBooks();
}

function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>book number ${index + 1}</h1>
    <p>Book Name: ${book.name}</p>
    <p>Author Name: ${book.authorName}</p>
    <p>Book Description: ${book.bookDescription}</p>
    <p>No. of Pages: ${book.pageNumber}</p>
    <button onclick="editbook(${index})">Edit</button>`);
    document.getElementById('books').innerHTML = booksDiv.join('');
}
