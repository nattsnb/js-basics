isTextUppercase('Hello'); // false
isTextUppercase('HELLO'); // true


function isTextUppercase(text) {
    if (text === text.toUpperCase()){
        result = true;
    } else {
        result = false;
    }
    console.log(result)
}