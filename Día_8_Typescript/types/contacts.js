"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = new Array();
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++) {
            for (var resultado in this.people[i]) {
                console.log(this.people[i][resultado]);
            }
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;
