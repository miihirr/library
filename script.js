const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggle = function () {
    this.read = !this.read;
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
    let display = document.querySelector(".display");
    display.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let newElement = document.createElement("div");
        newElement.setAttribute("class", "para");
        newElement.innerHTML = `<p><b>Title :</b> ${myLibrary[i].title}</p>
        <button class="btn-close" onclick="remove(${i})">&times;</button>
        <p><b>Author :</b> ${myLibrary[i].author}</p>
        <p><b>Total Pages :</b> ${myLibrary[i].pages}</p>
        <button class="btn-read" onclick="toggleThis(${i})">${myLibrary[i].read ? "Read" : "Not Read"}</button>`;
        display.appendChild(newElement);
    };
    let colorRead=document.querySelectorAll(".btn-read");
    for(let i=0;i<colorRead.length;i++){
        if(myLibrary[i].read){
            colorRead[i].style.backgroundColor="rgb(0, 255, 0)";
        }
        else{
            colorRead[i].style.backgroundColor="rgb(255, 94, 94)";
        }
    }
}

function toggleThis(index){
    myLibrary[index].toggle();
    printMyLibrary();
}

function remove(index) {
    console.log("hi");
    myLibrary.splice(index, 1);
    printMyLibrary();
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

const closeBtn=document.querySelector(".closeBtn");
closeBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    form.style.display = "none";
});



