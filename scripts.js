var score = 0;

quiz = document.forms.Quiz.elements;

/*function checkAnswers() {
    let score = 10;
    alert("your score is: " + score);
}*/

function checkAnswers(){
    let score = 0;
    quiz = document.forms.Quiz.elements;
    answer1 = quiz.numberOfFrogs.value;
    if (answer1 == "3+") score++;
    answer2 = quiz.largest.value;
    if (answer2 == "bullfrog") score++;
    answer3 = quiz.smallest.value;
    if (answer3 == "rainfrog") score ++;
    alert("Your score is: " + score);
}