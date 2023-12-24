const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
    printMyLibrary();
}

function printMyLibrary() {
    myLibrary.forEach(item=>{
        let newElement=document.createElement("div");
        newElement.append("item.title");
    });
}
const form = document.querySelector("#infoForm");

const new_btn = document.querySelector(".new");

new_btn.addEventListener('click', () => {
    form.style.display = "block";
    form.reset();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    form.style.display = "none";
});


