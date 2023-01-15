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
    this.status = function() {
        if (this.read === 'true') {
            console.log('status: yep, read!');
        } else if (this.read === 'false') {
            console.log('status: not read!');
        }
    }
}

function addBookToLibrary(addBook) {
    myLibrary.push(addBook);
    // console.log(myLibrary);
}

const bookContainer = document.querySelector('#book-container');

function displayBook() {
    myLibrary.map((element) => createCard(element));
}
displayBook();

function updateLibrary(newLibrary) {
    //remove card then update
    const parentElements = document.getElementById('book-container')

    while (parentElements.firstChild) {
        parentElements.removeChild(parentElements.firstChild);
    }
    newLibrary.map((element) => createCard(element));
}
// updateLibrary();


// function to display books on card
function createCard(currentBook) { //need to assign parameter!!!!!
    let indexOfBook = myLibrary.indexOf(currentBook);
    console.log (indexOfBook);

    // create div
    const displayDiv = document.createElement('div');
    displayDiv.classList.add('display');
    displayDiv.setAttribute('data-index', `${indexOfBook}`); //set data to div
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

    // create buttons
    const statusButton = document.createElement('button');
    statusButton.setAttribute('type', 'button');
    statusButton.classList.add('status-read');
    displayDiv.appendChild(statusButton);
    if (currentBook.read === 'true') {
        statusButton.textContent = `READ`;
    } else if (currentBook.read === 'false') {
        statusButton.textContent = 'NOT READ';
    }

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('data-index', `${indexOfBook}`); //set data to button
    removeButton.classList.add('button-remove');
    removeButton.textContent = 'Remove';    
    displayDiv.appendChild(removeButton);
}


// function on button to show form
const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', showForm);

function showForm() {
    const bookForm = document.getElementById('form');
    const formDisplayValue = getComputedStyle(bookForm).getPropertyValue('display');
    // console.log(formDisplayValue);
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
    event.preventDefault();    
}


// removing book from display
const removeButton = document.getElementById('book-container');
removeButton.addEventListener('click', function(e) {
    // console.log(e.target.nodeName);
    if (e.target && e.target.nodeName === 'BUTTON') {
        let elementButton = e.target;
        removeBook(elementButton);
    }
})
// console.log(Array.from(removeButton));

function removeBook(e) {
    const index = Array.from(removeButton).indexOf(e.target);
    // console.log(index);

    myLibrary.splice(index, 1);
    updateLibrary(myLibrary);
    // console.log(myLibrary);
}