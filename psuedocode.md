* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//can have event listener on each choice div, call the question object and see if it matches the answer

***how to have user click on button and tell what button they clicked?
***1) all form inputs can have a value attribute (look at calculator exercise). so when user clicks it will tell you what answer they clicked on
***2) google html5 attributes

<div class="choice" data-value="0">Charlotte</div> //anything you want can replace 0

$(".choice").click(function() {
    var val = $(this).attr('data-value');  //so val="0"
}

my program:
    interface and display:
        have a row for title
        have a row for question, answers, and stats
            one col for each. each col-md-4 col-sm-12
        use timer to display new question, answer and stats after 3 seconds

    structure:
        will structure the data by having a "question" object, "timer" object, "display" object
        object "question" will have properties: content, choice1,2,3,4, answer
        set time for each question
        have jquery see if choice# matches answer
        use a function that i can pass "question" into
            if so, display correct
            if not, display incorrect
            if nothing, display time is up
        update stats and ask next question (update function, next question function)
        update stats and reset game (have reset function)


