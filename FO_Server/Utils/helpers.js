/* 
GENERATE RANDOM NUMBER FROM SPECIFIED RANGE
*/
function generateRandom(min,max) {
    return Math.floor(Math.random() * (max - min)) + min
}

/* 
CHECK IF OBJECT IS EMPTY
*/
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/* 
CHECK IF TWO ARRAYS ARE EQUAL
*/
function arraysEqual (a, b) {
    if (a === b) return true ;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i)  if (a[i] !== b[i]) return false;

    return true;
}

/* 
 * Generate Access Token
 */
function generateAccessToken() {
    let randomString = require("randomstring"),
        Encrypt = require('./../Configs/encrypt'),
        encrypt = new Encrypt();

    let tokenString = randomString.generate({
        length: 25,
        charset: 'alphanumeric'
    });

    return encrypt.encryptEntity(tokenString);
}

module.exports = {
    generateRandom,
    generateAccessToken,
    isEmpty,
    arraysEqual
}