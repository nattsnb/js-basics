
function getGreeting(firstName, lastName) {
    return `Hi, "${firstName} ${lastName}". What's up?`;
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?


const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

function getCircleArea(circleRadius) {
    return Math.PI * circleRadius * circleRadius;
}
