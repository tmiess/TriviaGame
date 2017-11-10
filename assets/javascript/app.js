var i = 0; //will go to 9
var clicked = false;
var clearTime;
var userAnswer;


var game = {
    correct: 0,
    incorrect: 0,
    correctCount: function() {
        game.correct++;
        game.questionNumber++;
    },
    incorrectCount: function() {
        game.incorrect++;
        game.questionNumber++;
    },
    reset: function() {
        game.correct = 0;
        game.questionNumber = 0;
        clicked = false;
        question.askQuestion(0);
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
        answer: 4

    }, {
        ask: "Do you know this one?",
        type: "question2",
        choice1: "know1",
        choice2: "know2",
        choice3: "know3",
        choice4: "know4",
        answer: 2

    }, {
        ask: "Or how about this one right here?",
        type: "question3",
        choice1: "choice1",
        choice2: "choice2",
        choice3: "choice3",
        choice4: "choice4",
        answer: 3

    }],

    //userAnswer: [],

    askQuestion: function(i) {
        $("#question").text(question.choices[i].ask);
        $("#choices div:nth-child(1)").text(question.choices[i].choice1);
        $("#choices div:nth-child(2)").text(question.choices[i].choice2);
        $("#choices div:nth-child(3)").text(question.choices[i].choice3);
        $("#choices div:nth-child(4)").text(question.choices[i].choice4);
        console.log(question.choices[i].ask);
        console.log(question.choices[i].choice1);
        console.log(question.choices[i].choice2);
        console.log(question.choices[i].choice3);
        console.log(question.choices[i].choice4);
        console.log(question.choices[i].answer);
        clearTime = setInterval(game.gameClock, 1000);
    },

    newQuestion: function() {
        if (i < 10) {
            question.askQuestion(i);
            clicked = true;
        }
        else {
            //display stats and ask if they want to play again
            $("#stats").html("number correct: " + game.correct + "<br>" + "number incorrect: " + game.incorrect);
            game.reset();
        }
    },

    checkAnswer: function(timeUp) {
        if (userAnswer === question.choices[i].answer) {
            game.correctCount();
            alert("correct");
        }
        else if (userAnswer !== question.choices[i].answer && userAnswer !== null) {
            game.incorrectCount();
            alert("incorrect");
        }
        else if (timeUp === true) {
            clearInterval(clearTime);
            game.incorrectCount();
            timeUp = false;
            alert("Time is up!");
        }

        i++;
        setTimeout(question.newQuestion, 1000);
    },

};

// askQuestion: function(i) {
//     //create 5 new divs: 1 for question and 4 for each choice
//     var q = $("<div>");
//     var a = $("<button>");
//     var b = $("<button>");
//     var c = $("<button>");
//     var d = $("<button>");
//     q.attr("answer", question.choices[i].answer); //stores the answer to the question
//     q.text(question.choices[i].ask);
//     $("#question").text(q);
//     a.text(question.choices[i].choice1);
//     $("#1").text(a);
//     b.text(question.choices[i].choice2);
//     $("#2").text(b);
//     c.text(question.choices[i].choice3);
//     $("#3").text(c);
//     d.text(question.choices[i].choice4);
//     $("#4").text(d);

// },


$(document).ready(function() {

    $("#start").click(function() {
        question.askQuestion(0);
    });

    $("#reset").click(function() {
        game.reset();
    });

    //what happens when choice is clicked

    // $("#choices div").click(function() {
    //     if (clicked === false) {
    //         userAnswer = $(this).data('choice');
    //         question.checkAnswer(userAnswer, false);
    //         console.log($(this).data("choice"));
    //         clearInterval(clearTime);
    //         clicked = true;
    //     }

    // });

    $(document).on("click", "#choices div", function() {
        if (clicked === false) {
            userAnswer = $(this).data('choice');
            question.checkAnswer(userAnswer, false);
            console.log($(this).data("choice"));
            clearInterval(clearTime);
            clicked = true;
        }
    });
});
