var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0

var userName = readlineSync.question("what is your name?");

console.log(chalk.blue("welcome "+userName+" to FRIENDS QUIZ"));
// console.log("don't write in numeric form")

function play(question,answer){
var userAnswer=readlineSync.question(question);

if (userAnswer === answer){
  console.log(chalk.green('you are RIGHT!')); 
  score = score +1;
}else{
  console.log(chalk.red("you are WRONG!"));
  score = score +0;
}

console.log(chalk.yellow("current score",score));
console.log(chalk.black("-------------"));
}

var questions = [{
question:"Joey dosen't share ?",
answer:"food"
},{
question:"How many times did Ross got married ?",
answer:"three"  
},{
question:"Rachel worked in central perk as ?",
answer:"waitress"  
},{
 question:"Phoebe wrote a song about cats can you name it?",
 answer:"smelly cat" 
},{
  question:"which character has a twin ?",
  answer:"phoebe"
},{
  question:"how many sisters does Joey have ?",
  answer:"seven"
}
,{
  question:"whom was chandler married to ?",
  answer: "monica"
},{
  question:"what was Joey's profession ?",
  answer: "actor"
},{
  question:"who was not roommate with joey ?",
  answer: "phoebe"
},{
  question:"what was name of ross first child ?",
  answer: "ben"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.magenta("YAY! you scored: ", score));