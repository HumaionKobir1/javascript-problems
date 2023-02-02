var business = 450;
var minister = 1350;
var sochib = 550;

if (business > minister){
    if(business > sochib){
        console.log('Business is bigger');
    }
    else{
        console.log('sochib is bigger');
    }
}
else{
    console.log('Minister is bigger');
}


// or

var max1 = Math.max(business, minister, sochib);
console.log(max1);
