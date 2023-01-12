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
        read: false,
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



const bookContainer = document.querySelector('#book-container');

function displayBook() {
    const book = myLibrary.map((element) => {
        createCard(element);
    });
    // console.log(myLibrary);


    // myLibrary.map(x => console.log(x.title));
}

displayBook();

// const cardBook = document.getElementsByClassName('.display');

// function to display books on card
// const bookContainer = document.querySelector('#book-container');

function createCard(currentBook) { //need to assign parameter!!!!!
    // create div
    const displayDiv = document.createElement('div');
    displayDiv.classList.add('display');
    bookContainer.appendChild(displayDiv);

    // create p
    const paraTitle = document.createElement('p');
    paraTitle.classList.add('title');
    displayDiv.appendChild(paraTitle);
    paraTitle.textContent = currentBook.title;

    const paraAuthor = document.createElement('p');
    paraAuthor.classList.add('author');
    displayDiv.appendChild(paraAuthor);
    paraAuthor.textContent = `by ${currentBook.author}`;

    const paraPages = document.createElement('p');
    paraPages.classList.add('pages');
    displayDiv.appendChild(paraPages);
    paraPages.textContent = `${currentBook.pages} pages`;

    const paraStatus = document.createElement('p');
    paraStatus.classList.add('status');
    displayDiv.appendChild(paraStatus);
    if (currentBook.read === true) {
        paraStatus.textContent = `finished reading!`
    } else if (currentBook.read === false) {
        paraStatus.textContent = `not read yet`
    }
}

// createCard();