//Creating new Object
class Book {
    constructor (
        tittle,
        pages,
        author,
        color,
      edition,
      currentPage,
      readStatus,
    ){
        this.tittle = tittle;
        this.pages = pages;
        this.author = author;
        this.color = color;
        this.edition = {
            new: edition,
            old: edition,
        };
    this.currentPage = currentPage
        this.readStatus = readStatus;
    }
    updateCurrentPage(newCurrentPage) {
        this.currentPage = newCurrentPage
    };
    updateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus
    } ;
};

export default Book;