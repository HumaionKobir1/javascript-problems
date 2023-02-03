var numbers = [2, 5, 4, 8, 1, 2, 5, 4, 6, 9];
var uniqueNum = [];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNum.indexOf(element);

    if(index == -1){
        uniqueNum.push(element);
    }
}
console.log(uniqueNum);


// use function

function deuplicate(numbers){
    var uniqueNum = [];

    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        var index = uniqueNum.indexOf(element);

        if(index == -1){
            uniqueNum.push(element);
        }
    }
    return uniqueNum;
}
var numbers = [2, 5, 4, 8, 1, 2, 5, 4, 6, 9];
var result = deuplicate(numbers);
console.log(result);
