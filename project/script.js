let books = [];

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;

    if (title && author && genre) {
        const book = { id: Date.now(), title, author, genre, read: false };
        books.push(book);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('genre').value = '';
        renderBooks();
    }
}

function editBook(id) {
    const book = books.find(b => b.id === id);
    const newTitle = prompt("Enter new title:", book.title);
    const newAuthor = prompt("Enter new author:", book.author);
    const newGenre = prompt("Enter new genre:", book.genre);

    if (newTitle && newAuthor && newGenre) {
        book.title = newTitle;
        book.author = newAuthor;
        book.genre = newGenre;
        renderBooks();
    }
}

function deleteBook(id) {
    books = books.filter(b => b.id !== id);
    renderBooks();
}

function toggleReadStatus(id) {
    const book = books.find(b => b.id === id);
    book.read = !book.read;
    renderBooks();
}

function filterBooks() {
    const filter = document.getElementById('filter').value;
    renderBooks(filter);
}

function sortBooks() {
    const sort = document.getElementById('sort').value;
    books.sort((a, b) => a[sort].localeCompare(b[sort]));
    renderBooks();
}

function renderBooks(filter = 'all') {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    const filteredBooks = books.filter(book => {
        if (filter === 'read') return book.read;
        if (filter === 'unread') return !book.read;
        return true;
    });

    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.className = book.read ? 'read' : '';
        li.innerHTML = `
            ${book.title} by ${book.author} [${book.genre}]
            <button onclick="toggleReadStatus(${book.id})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="deleteBook(${book.id})">Delete</button>
        `;
        bookList.appendChild(li);
    });
}
