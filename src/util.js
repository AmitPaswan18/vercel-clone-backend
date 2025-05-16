"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genrateNumber = genrateNumber;
var MAX_LEN = 6;
function genrateNumber() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var ans = '';
    for (var i = 0; i < MAX_LEN; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        ans += chars[randomIndex];
    }
    return ans;
}
console.log(genrateNumber());
