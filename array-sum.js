var numbers = [45, 54, 68, 87, 24, 91, 24, 97, 54, 24];
var sum = 0;

for (var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log('total of the numbers: ', sum);



// use function
function getArraySum(numbers){
    var sum = 0;

    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 54, 68, 87, 24, 91, 24, 97, 54, 24];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);

var total = getArraySum([25, 45, 74, 35, 15]);
console.log("total of the numbers: ", total);