let myLibrary = [];
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            let viewed = "";
            if (read == true) {
                viewed = "read";
            }
            else {
                viewed = "not read yet";
            }
            let str = title + " by " + author + ", " + pages + " pages, " + viewed + ".";
            return str;
        };
    }
}
let table = document.getElementById("myTable");

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function enterBook() {
    let row = table.insertRow(1);
    let cellOne = row.insertCell(0);
    let cellTwo = row.insertCell(1);
    let cellThree = row.insertCell(2);
    let cellFour = row.insertCell(3);
    let cellFive = row.insertCell(4);
    cellOne.innerHTML = "<input id='newTitle' type='text' value=''>" ;
    cellTwo.innerHTML = "<input id='newAuthor' type='text' value=''>";
    cellThree.innerHTML = "<input id='newPages' type='number' min='0' value=''>";
    cellFour.innerHTML = "<input id='newRead' type='checkBox' value=''>";
    cellFive.innerHTML = "<button onclick='createBook()'>Add to Library</button>"
    
}

function createBook() {
    let title = document.getElementById("newTitle");
    let author = document.getElementById("newAuthor");
    let pages = document.getElementById("newPages");
    let read = document.getElementById("newRead");

    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookRead = false;
    if (read.checked) {
        bookRead = true;
    }
    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(book);
    render(book)
    table.deleteRow(1);
    console.log(myLibrary)
}

function deleteObject(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == id) {
            console.log(myLibrary[i].title + " == " + id);
            table.deleteRow(i + 1);
            myLibrary.splice(i, 1);
            console.log(myLibrary)
        }
    }
}

function render(book) {
    let index = 0
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == book.title) {
            index = i;
            console.log(index);
        }
    }
    console.log(index);
    let row = table.insertRow(index + 2);
    row.id = book.title;
    let cellOne = row.insertCell(0);
    let cellTwo = row.insertCell(1);
    let cellThree = row.insertCell(2);
    let cellFour = row.insertCell(3);
    let cellFive = row.insertCell(4);
    cellOne.innerHTML = book.title;
    cellTwo.innerHTML = book.author;
    cellThree.innerHTML = book.pages;
    cellFour.innerHTML = book.read;
    cellFive.innerHTML = "<button onclick='deleteObject(\"" + row.id + "\")'>Delete</button>";
}

console.log(myLibrary);
