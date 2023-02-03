const lyrics = "Tumi amar amoni akjon, jake ak jonome valobeshe vorbe na a mon";

// const searchString = lyrics.includes('jake');
// console.log(searchString);

const searchString = 'Valobeshe';
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);


const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);



// -----------index of-------
console.log(lyrics.indexOf('jonome'));
console.log(lyrics.indexOf('Tumi'));

if (lyrics.indexOf('amoni') !== -1){
    console.log('exists inside the stiing')
}
else{
    console.log("cann't find it");
}

// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png'JSON;
fileName.endsWith ('.pdf');