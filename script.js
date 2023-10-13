isTextUppercase('Hello'); // false
isTextUppercase('HELLO'); // true


function isTextUppercase(text) {
    if (text === text.toUpperCase()) {
        return true
    }
   