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
    myLibrary.forEach(element => console.log(element.title));
    // myLibrary.map(x => console.log(x.title));
}

displayBook();

// const cardBook = document.getElementsByClassName('.display');

// function to display books on card
const bookContainer = document.querySelector('#book-container');

function createCard() {
    // create div
    const displayDiv = document.createElement('div');
    displayDiv.classList.add('display');
    bookContainer.appendChild(displayDiv);
    // create p
    const paraTitle = document.createElement('p');
    paraTitle.classList.add('title');
    displayDiv.appendChild(paraTitle);

    const paraAuthor = document.createElement('p');
    paraAuthor.classList.add('author');
    displayDiv.appendChild(paraAuthor);

    const paraPages = document.createElement('p');
    paraPages.classList.add('pages');
    displayDiv.appendChild(paraPages);

    const paraStatus = document.createElement('p');
    paraStatus.classList.add('status');
    displayDiv.appendChild(paraStatus);

    // paraTitle.textContent = `${myLibrary.title}`
    // console.log(myLibrary.title);
}

// createCard();