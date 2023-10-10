isThisBoolean(true);  //true
isThisBoolean(false);  // true
isThisBoolean('true'); // false


function isThisBoolean(providedData) {
    if ( providedData === false ) {
        result = true
    } else {
        if ( providedData === true ) {
            result = true
        } else {
            result = false}
    }
    console.log(result)
}