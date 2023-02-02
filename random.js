// basic concept for js Math
var num = 2.12458;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log(result, result2, result3);

// find the random number
var randomNum = Math.random() * 10;
var output = Math.round(randomNum);
console.log(output);


// or

for(var i = 0; i < 10; i++){
    var randomNum = Math.random() * 10;
    var output = Math.round(randomNum);
    console.log(output);
}
