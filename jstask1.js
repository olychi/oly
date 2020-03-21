var name = 'oly';
var courses = ['JavaScript', 'Golang'];

console.log(name);
console.log(courses);

if (courses.length % 2 == 0) {
    for (let i = 0; i <= 200; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
} else {
    for (let i = 0; i <= 200; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}