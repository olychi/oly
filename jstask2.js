let principalTimeArr = [
    {'principal': 2500, 'time': 1.8},
    {'principal': 1000, 'time': 5},
    {'principal': 2000, 'time': 1},
    {'principal': 3000, 'time': 3}
]

function calculateInterest(principal, rate, time) {
    let interest = (principal * rate * time)/100
    return interest;
}

let rate = '';
principalTimeArr.forEach(element => {
    if(element.principal >= 2500 && (element.time > 1 && element.time <= 3)) {
        rate = 3;
        console.log(calculateInterest(element.principal, rate, element.time))
    } else if(element.principal >= 2500 && element.time >= 3) {
        rate = 4;
        console.log(calculateInterest(element.principal, rate, element.time))
    } else if (element.principal < 2500 || element.time <= 1) {
        rate = 2;
        console.log(calculateInterest(element.principal, rate, element.time))
    } else {
        rate = 1;
        console.log(calculateInterest(element.principal, rate, element.time))
    }
});