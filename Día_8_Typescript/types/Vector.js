"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    //n: longitud del vector
    //m: maximo valores de un vector
    function Vector(n, m) {
        this.elements = new Array(n);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = Math.floor(Math.random() * m);
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var result;
        result = new Vector(this.elements.length, 10);
        for (var i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] + v1.elements[i];
        }
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
