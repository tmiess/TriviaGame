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
        i = 0;
        game.questionNumber = 0;
        $("#stats").html("number correct: " + game.correct + "<br>" + "number incorrect: " + game.incorrect);
        clicked = false;
        question.askQuestion(0);
    }
};

var question = {
    choices: [{
        ask: "What town in the Charlotte metro area was the site of America's first documented gold find?", //question[0].choices.ask
        type: "question1",
        choice1: "Cornelius",
        choice2: "Weddington",
        choice3: "King's Mountain",
        choice4: "Midland",
        answer: 4

    }, {
        ask: "What two major Charlotte roads evolved from former Native American trading routes?",
        type: "question2",
        choice1: "Providence and Trade",
        choice2: "Tryon and Trade",
        choice3: "Tyvola and Park",
        choice4: "Tyvola and Davidson",
        answer: 2

    }, {
        ask: "What high school did NBA superstar Steph Curry attend?",
        type: "question3",
        choice1: "Charlotte Latin",
        choice2: "Charlotte Country Day",
        choice3: "Charlotte Christian",
        choice4: "Providence Day",
        answer: 3

    }, {
        ask: "Why was Charlotte's central business district first referred to as 'uptown' instead of 'downtown'?",
        type: "question4",
        choice1: "The name stuck after Queen Elizabeth coined the term during a visit.",
        choice2: "The founders of Charlotte thought it would better market the area by connoting a positive atmosphere.",
        choice3: "It's the highest point of elevation in the city.",
        choice4: "The majority of the city limits were to the south (below) of the business district.",
        answer: 3

    }, {
        ask: "What infamous Charlotte gang was featured on History Channel's 'Gangland'?",
        type: "question5",
        choice1: "The Hive",
        choice2: "Hidden Valley Kings",
        choice3: "QC Clique",
        choice4: "White Tigers",
        answer: 2

    }, {
        ask: "Located just south of Charlotte, the town of Pineville was the birthplace of what US President?",
        type: "question6",
        choice1: "James K. Polk",
        choice2: "Howard Taft",
        choice3: "Andrew Jackson",
        choice4: "Grover Cleveland",
        answer: 1

    }, {
        ask: "Who is the only Carolina Panther to win the NFL's Most Valuable Player award?",
        type: "question7",
        choice1: "Luke Kuechly",
        choice2: "Brenton Bersin",
        choice3: "Cam Newton",
        choice4: "Steve Smith",
        answer: 3

    }, {
        ask: "What is the name of the NASCAR speedway in Concord?",
        type: "question8",
        choice1: "Pepsi Motor Raceway",
        choice2: "Bojangles Speedway",
        choice3: "Charlotte Motor Speedway",
        choice4: "Lowe's Motor Speedway",
        answer: 4

    }, {
        ask: "In the movie 'Bad Grandpa', what local restaurant did actor Johnny Knoxville visit?",
        type: "question9",
        choice1: "Cook-Out",
        choice2: "Amelie's",
        choice3: "Soul Gastrolounge",
        choice4: "The Penguin Drive-In",
        answer: 4

    }, {
        ask: "What was the name of Charlotte's NBA team from 2004-2014?",
        type: "question10",
        choice1: "Hornets",
        choice2: "Bobcats",
        choice3: "Knights",
        choice4: "Checkers",
        answer: 2
    }],

    askQuestion: function(i) {
        var questionsLeft = 10 - i;
        $("#numQuestion").text("Questions Left: " + questionsLeft);
        $("#numCorrect").text("Correct: " + game.correct);
        $("#numIncorrect").text("Incorrect: " + game.incorrect);
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
            clicked = false;
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
