function reverseString (str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}


var statement = "Hello, My name is Md. Humaion Kobir";
var result = reverseString(statement);
console.log(result);

var foodVlog = reverseString("Our food is number one in the world");
console.log(foodVlog);