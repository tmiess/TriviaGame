var game = {
    correct: 0,
    incorrect: 0,
    questionNumber: 0, //will go to 10
    correctCount: function() {
        this.correct++;
        this.questionNumber++;
    },
    incorrectCount: function() {
        this.incorrect++;
        this.questionNumber++;
    }
};

var question = {
    choices: [{
        ask: "What is the answer to this question?", //question[0].choices.ask
        type: "question1",
        choice1: "answer1",
        choice2: "answer2",
        choice3: "answer3",
        choice4: "answer4",
        answer: "answer4"

    }, {
        ask: "Do you know this one?",
        type: "question2",
        choice1: "know1",
        choice2: "know2",
        choice3: "know3",
        choice4: "know4",
        answer: "know2"

    }, {
        ask: "Or how about this one right here?",
        type: "question3",
        choice1: "choice1",
        choice2: "choice2",
        choice3: "choice3",
        choice4: "choice4",
        answer: "choice3"

    }],

    userAnswer: [],

    checkAnswer: function() {
        if (this.UserAnswer === this.answer) {
            game.correctCount();
            //display(correct)
        }
        else {
            game.incorrectCount();
            //display(incorrect)
        }
    },

    newQuestion: function(i) {
        $("#question").text(this.choices[i].ask);
        $("#choices div:nth-child(1)").text(this.choices[i].choice1);
        $("#choices div:nth-child(2)").text(this.choices[i].choice2);
        $("#choices div:nth-child(3)").text(this.choices[i].choice3);
        $("#choices div:nth-child(4)").text(this.choices[i].choice4);
        console.log(this.choices[i].ask);
        console.log(this.choices[i].choice1);
        console.log(this.choices[i].choice2);
        console.log(this.choices[i].choice3);
        console.log(this.choices[i].choice4);
        console.log(this.choices[i].answer);
    },

    askQuestion: function(i) {
        //create 5 new divs: 1 for question and 4 for each choice
        var q = $("<div>");
        var a = $("<button>");
        var b = $("<button>");
        var c = $("<button>");
        var d = $("<button>");
        q.attr("answer", this.choices[i].answer); //stores the answer to the question
        q.text(this.choices[i].ask);
        $("#question").text(q);
        a.text(this.choices[i].choice1);
        $("#1").text(a);
        b.text(this.choices[i].choice2);
        $("#2").text(b);
        c.text(this.choices[i].choice3);
        $("#3").text(c);
        d.text(this.choices[i].choice4);
        $("#4").text(d);

        console.log(typeof a);
        console.log(a.text);
        console.log(typeof b);
        console.log(b.text);
        console.log(typeof q);
        console.log(q.answe);

    }
};


$(document).ready(function() {

    $("#start").click(function() {
        question.reset(); //gets vars back to zero
        question.askQuestion(0);
    });

    //what happens when choice is clicked

    $(".choice").click(function() {
        question.userAnswer = $(this).attr('data-value'); //so val="0"
        question.checkAnswer();
    });
});
