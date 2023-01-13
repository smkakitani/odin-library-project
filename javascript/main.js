let myLibrary = [ 
    {
        title: 'Dune', 
        author: 'Frank Herbert',
        pages: '412',
        read: 'false',
    },
    {
        title: 'Story of the Eye',
        author: 'George Bataille',
        pages: '127',
        read: 'true',
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(addBook) {
    myLibrary.push(addBook);
    
    console.log(myLibrary);
}

const bookContainer = document.querySelector('#book-container');

function displayBook() {
    const book = myLibrary.map((element) => {
        createCard(element);
    });
}
displayBook();


// function to display books on card
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
    if (currentBook.read === 'true') {
        paraStatus.textContent = `finished reading!`
    } else if (currentBook.read === 'false') {
        paraStatus.textContent = `not read yet`
    }

    const createRemoveButton = document.createElement('button');
    createRemoveButton.setAttribute('type', 'button');
    createRemoveButton.classList.add('button-remove');
    createRemoveButton.textContent = 'Remove';    
    displayDiv.appendChild(createRemoveButton);
}


// function on button to show form
const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', showForm);

function showForm() {
    const bookForm = document.getElementById('form');
    const formDisplayValue = getComputedStyle(bookForm).getPropertyValue('display');
    console.log(formDisplayValue);
    if (formDisplayValue === 'none') {
        bookForm.style.display = 'block';
    } else if (bookForm.style.display === 'block') {
        bookForm.style.display = 'none';
    }
}


// function to get user's book
const submitButton = document.querySelector('form');
submitButton.addEventListener('submit', getInput);

function getInput(event) {
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    const inputRead = document.querySelector('input[name="book-read"]:checked').value;

    let newBook = new Book(inputTitle, inputAuthor,inputPages, inputRead);
    addBookToLibrary(newBook);
    createCard(newBook);
    // console.log(newBook);
    event.preventDefault();    
}


// removing book from display
const removeButton = document.getElementsByClassName('button-remove');
removeButton.addEventListener('click', removeBook);

function removeBook(event) {
    // remove currently book
}