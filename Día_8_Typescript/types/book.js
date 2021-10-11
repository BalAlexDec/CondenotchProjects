"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPage, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPage;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Gettert and Settters
    //Title
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    //nPages
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    //isbn
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    //author
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    //editorial
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    //To String method
    Book.prototype.toString = function () {
        return this.title + " " + this.nPages + " " + this.isbn + " " + this.author + " " + this.author + " " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
