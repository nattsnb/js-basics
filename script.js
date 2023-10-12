const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417


function getCirclesAreaSum(circleRadiusOne, circleRadiusTwo) {
    circleAreaOne = getCircleArea(circleRadiusOne)
    circleAreaTwo = getCircleArea(circleRadiusTwo)
    return circleAreaOne + circleAreaTwo
}

function getCircleArea(circleRadius) {
    return Math.PI * circleRadius * circleRadius;
}