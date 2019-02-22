
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
var question;
var answer;
var input;
var correctAnswer = 0;
var wrongAnswer = 0 ;
var correct = [];
var wrong = [];
var html = "";
var questions = [
  ["The shape of sun","circle"],
  ["color of banana","yellow"],
  ["color of grape","purple"],
  ["taste of seawater","salty"],
  ["wheeles of a bike","2"]
];

for (var i = 0; i < questions.length; i +=1){
  question = questions[i][0];
  answer = questions[i][1];
  input = prompt(question) ;
  if (input === answer) {
    correctAnswer+=1;
    correct.push(question);
  } else {
    wrongAnswer+=1;
    wrong.push(question);
  }
}



html += "you got these questions right <br>";
html += correct.join("<br>");
html += "<br>"
html +="you got these questions wrong <br>";
html +=wrong.join("<br>");

print(html);
