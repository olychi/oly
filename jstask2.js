let principalTimeArr = [
    {'principal': 2500, 'time': 1.8},
    {'principal': 1000, 'time': 5},
    {'principal': 2000, 'time': 1},
    {'principal': 3000, 'time': 3}
]

let interestData = [];
function calculateInterest(principal, rate, time) {
    let interest = (principal * rate * time)/100
    interestData.push({'principal': principal, 'rate': rate, 'time': time, 'interest': interest});
    console.log(interestData)
    return interestData;
}

let rate = '';
principalTimeArr.forEach(element => {
    if(element.principal >= 2500 && (element.time > 1 && element.time <= 3)) {
        rate = 3;
    } else if(element.principal >= 2500 && element.time >= 3) {
        rate = 4;
    } else if (element.principal < 2500 || element.time <= 1) {
        rate = 2;
    } else {
        rate = 1;  
    }
    calculateInterest(element.principal, rate, element.time)
});