let physicsGrades = [3, 5, 4, 5, 5]
let mathsGrades = [3, 3, 4, 5, 2]
let englishGrades = [5, 5, 4, 5, 5]

areMyGradesGood(physicsGrades)
areMyGradesGood(mathsGrades)
areMyGradesGood(englishGrades)


function areMyGradesGood(grades) {
    arryLength = grades.length
    arrySum = grades.reduce(function(a, b){
        return a + b;
    });
    average = arrySum/arryLength
    if (average >= 4) {
        console.log(`Your average is: ${average}. Good job!`)
    } else {
        console.log(`Your average is: ${average}. Try harder!`)
    }
}