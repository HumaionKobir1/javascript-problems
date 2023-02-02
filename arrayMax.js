var marks = [45, 25, 49, 68, 79, 49, 61, 37];
var max = marks[0];
for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is: ', max);
