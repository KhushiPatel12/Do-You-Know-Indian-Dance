const question = require("./QuizQuestions");

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const color = require("chalk");
let blueBright = color.bold.blueBright
let green = color.bold.green
let red = color.bold.red
let cyan = color.bold.cyan
let yellow = color.bold.yellow

var uname = "";
var answer = "";
var score = 0;
var quesno = 1;

var getQuestions = () => {
  var data = question.filter((o) => o.no == quesno);
  data.forEach(noques => {
      console.log(`\n${noques.no}. ${noques.ques}`);
      console.log(`\na) ${noques.a}`);
      console.log(`\nb) ${noques.b}`);
      console.log(`\nc) ${noques.c}`);
      console.log(`\nd) ${noques.d}`);
      answer = noques.ans;
  });
};

var checkAns = () => {
   if(quesno <= 10){
        rl.question(blueBright("\nYour Answer : "),(ans) => {
          if(ans == "a" || ans == "b" || ans == "c" || ans == "d"){
           if(answer == ans){
              score += 5;
              console.log(green("\nYour Answer is Correct"));
              console.log(yellow("Your Score : " + score));
              quesno += 1;
              repeat();
           }else{
              score -= 2;
              console.log(red("\nWrong Answer!!!"));
              console.log(green("\nCorrect Answer is : " + answer));
              console.log(yellow("Your Score : " + score));
              quesno += 1;
              repeat();
           }
          }else{
            console.log(red("\nInvalid Choice!!!"));
            repeat();
          }
        });
   }else{
     console.log(green("\nQuiz Completed."));
     console.log(blueBright(`\n${uname} your final score is ${score}`));
     rl.close();
   }
}

var repeat = () =>{
   getQuestions();
   checkAns();
};

console.log(blueBright("Welcome to Quiz"));
rl.question(blueBright("\nEnter Your Name : "),(nm) => {
   uname = nm;
   repeat();
});