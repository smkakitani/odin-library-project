let myLibrary = [
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        pages: '1178',
        read: true,
    }, 
    {
        title: 'Dune', 
        author: 'Frank Herbert',
        pages: '412',
        read: true,
    },
    {
        title: 'Story of the Eye',
        author: 'George Bataille',
        pages: '127',
        read: true,
    }
];

function Book() {
    // this.name = 
}

// newBook = {} user's input

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBook() {
    myLibrary.forEach(element => console.log(element));
}

// displayBook();

const cardBook = document.getElementsByClassName('.display');
console.log(cardBook);