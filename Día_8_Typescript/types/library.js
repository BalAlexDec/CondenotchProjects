"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, addres, manager) {
        this.books = books;
        this.address = addres;
        this.manager = manager;
    }
    Library.prototype.toString = function () {
        return "Title " + this.books;
        ;
    };
    //Preguntar ara ruben por funion .filter 
    Library.prototype.getNumberOfBooks = function () {
        return;
    };
    Library.prototype.findByAuthor = function (author) {
        return;
    };
    return Library;
}());
exports.Library = Library;
