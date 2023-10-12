const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

function getCircleArea(circleRadius) {
    return Math.PI * circleRadius * circleRadius;
}