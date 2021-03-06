"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function forEach(array, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        // Rewriting the forEach loop
        for (let index = 0; index < array.length; index++) {
            yield callback(array[index], index, array);
        }
        // It's as simple as that :) 
    });
}
module.exports = forEach;
//# sourceMappingURL=index.js.map