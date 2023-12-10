const myLibrary = [];

function Book(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.info=function(){
        if(this.read){
            return `${this.title} by ${this.author}, ${this.pages} pages, already read it`
        }
        else{
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
        }
    }
}

function addBookToLibrary(title,author,pages,read) {
    const newObj = new Book(title,author,pages,read)
    myLibrary.push(newObj)
}