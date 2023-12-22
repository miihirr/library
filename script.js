const myLibrary = [];

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info= function(){
        if(this.read){
            return `${this.title} by ${this.author}, ${this.pages} pages, already read it`
        }
        else{
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function printMyLibrary(){
    myLibrary.forEach(item=>console.table(item))
}



