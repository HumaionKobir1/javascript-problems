const sentence = "amar sonar bangla ami tomay valobashi. tumi amar jibon bondhu tumi amar moron";

const matches = sentence.match(/amar/gi);
const ocurances = matches ? matches.length: 0;
console.log(ocurances);