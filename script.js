isThisMyName('Adam');


function isThisMyName(firstName) {
    firstNameLowerCase = firstName.toLowerCase()
    if (firstNameLowerCase === "natasza") {
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}