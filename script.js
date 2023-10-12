getBillboardPrice('Hello world!', 10); // 120
getBillboardPrice('Hello world!', 15); // 180
getBillboardPrice('To be, or not to be', 20); // 380


function getBillboardPrice(string, charPrice) {
    stringLength = string.length
    billboardPrice = stringLength * charPrice
    console.log(billboardPrice)
}