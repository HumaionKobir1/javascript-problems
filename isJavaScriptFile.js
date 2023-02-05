function isJavaScriptFile (fileName){
    if(typeof fileName != 'string' || fileName.length == 0){
        return "Provide valid input"
    }
    if(fileName.endsWith('.js')){
        return "Provide valid input"
    }
    else{
        return false;
    }
}

let result = isJavaScriptFile('index.js');
console.log(result);