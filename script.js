function getGreeting(firstName, lastName) {
    return `Hi, "${firstName} ${lastName}". What's up?`;
}

const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?