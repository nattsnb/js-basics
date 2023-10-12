isThisBoolean(true);  //true
isThisBoolean(false);  // true
isThisBoolean('true'); // false


function isThisBoolean(providedData) {
    dataType = (typeof providedData)
    if (dataType === "boolean") {
        console.log(true)
    } else {
        console.log(false)}
}