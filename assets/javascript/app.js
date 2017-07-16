$(document).ready(function() {

    $("#done").hide();
    $("#correctanswers").hide();
    $("#incorrectanswers").hide();
    $("#unansweredquestions").hide();

    var number = 60;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 1;
    var answerOptions1 = "<form action=\"\"><input type=\"radio\" name=\"cgimovie\" value=\"A Bugs Life\">A Bugs Life <input type=\"radio\" name=\"cgimovie\" value=\"Monsters Inc\"> Monsters Inc <input type=\"radio\" name=\"cgimovie\" value=\"Toy Story\"> Toy Story <input type=\"radio\" name=\"cgimovie\" value=\"The Lion King\"> The Lion King</form>";
    var answerOptions2 = "<form action=\"\"><input type=\"radio\" name=\"spicegirls\" value=\"Sporty Spice\">Sporty Spice <input type=\"radio\" name=\"spicegirls\" value=\"Fred Spice\"> Fred Spice <input type=\"radio\" name=\"spicegirls\" value=\"Scary Spice\"> Scary Spice <input type=\"radio\" name=\"spicegirls\" value=\"Posh Spice\"> Posh Spice</form>";
    var answerOptions3 = "<form action=\"\"><input type=\"radio\" name=\"nba\" value=\"New York Knicks\">New York Knicks <input type=\"radio\" name=\"nba\" value=\"Portland Trailblazers\"> Portland Trailblazers <input type=\"radio\" name=\"nba\" value=\"Los Angeles Lakers\"> Los Angeles Lakers <input type=\"radio\" name=\"nba\" value=\"Chicago Bulls\"> Chicago Bulls</form>";
    var answerOptions4 = "<form action=\"\"><input type=\"radio\" name=\"group\" value=\"Nervana\"> Nervana <input type=\"radio\" name=\"group\" value=\"Backstreet Boys\"> Backstreet Boys <input type=\"radio\" name=\"group\" value=\"The Offspring\"> The Offspring <input type=\"radio\" name=\"group\" value=\"No Doubt\"> No Doubt</form>";
    var answerOptions5 = "<form action=\"\"><input type=\"radio\" name=\"prince\" value=\"Dice\"> Dice <input type=\"radio\" name=\"prince\" value=\"Mirror\"> Mirror <input type=\"radio\" name=\"prince\" value=\"Fresh\"> Fresh <input type=\"radio\" name=\"prince\" value=\"Cab\"> Cab</form>";




    $("#start").on("click", start);
    $("#done").on("click", done);


    // When the Start button is clicked it calls this function
    function start() {
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        displaytimer();
        showquestionsandanswers();
    }

    // When the Done button is clicked it calls this function
    function done() {
        letsseethereusults();
        stop();
        $("#countDown").hide();
        $("#allDone").show();
    }

    // We are counting down the number by the seconds
    function decrement() {
        number--;
        displaytimer();

        if (number === 0) {
            displaytimer();
            done();
            stop();
        }
    }

    // This funtion allows the timer to be displayed or not.
    function displaytimer() {
        $("#countDown").html("<h3>Time Remaining: " + number + " Seconds</h2>");
    }

    function showquestionsandanswers() {

        $("#question1").html("<h2>What is the first full length CGI movie?</h2>");
        $("#question2").html("<h2>Which of these is NOT a name of one of the Spice Girls?</h2>");
        $("#question3").html("<h2>Which NBA team won the most titles in the 90s?</h2>");
        $("#question4").html("<h2>Which group released the hit, <i>\"Smells Like Teen Spirit\"</i>?</h2>");
        $("#question5").html("<h2>Finish this line from the Fresh Prince of Bel-air theme song: <i>\"I whistled for a cab and when it came near, the license plate said...\"</i>?</h2>");

        $("#answerOptions1").html(answerOptions1);
        $("#answerOptions2").html(answerOptions2);
        $("#answerOptions3").html(answerOptions3);
        $("#answerOptions4").html(answerOptions4);
        $("#answerOptions5").html(answerOptions5);

        $("#done").show();



        // Testing first question
        $('input:radio[name=cgimovie]').click(function() {


            if (this.value === "Toy Story") {
                correctAnswers = 1;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
            }

            if (this.value === "A Bugs Life" || "Monsters Inc" || "The Lion King") {
                correctAnswers = 0;
                incorrectAnswers = 1;
                unansweredQuestions = 0;
            } else {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 1;
            }

        });


        // Testing second question
        $('input:radio[name=spicegirls]').click(function() {


            if (this.value === "Sporty Spice" || "Scary Spice" || "Posh Spice") {
                correctAnswers = 1;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
            }

            if (this.value === "Fred Spice") {
                correctAnswers = 0;
                incorrectAnswers = 1;
                unansweredQuestions = 0;
            } else {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 1;
            }

        });


        // Testing third question
        $('input:radio[name=nba]').click(function() {


            if (this.value === "Chicago Bulls") {
                correctAnswers = 1;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
            }

            if (this.value === "New York Knicks" || "Portland Trailblazers" || "Los Angeles Lakers") {
                correctAnswers = 0;
                incorrectAnswers = 1;
                unansweredQuestions = 0;
            } else {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 1;
            }

        });

        // Testing fourth question
        $('input:radio[name=group]').click(function() {


            if (this.value === "Nirvana") {
                correctAnswers = 1;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
            }

            if (this.value === "Backstreet Boys" || "The Offspring" || "No Doubt") {
                correctAnswers = 0;
                incorrectAnswers = 1;
                unansweredQuestions = 0;
            } else {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 1;
            }

        });

        // Testing fifth question
        $('input:radio[name=prince]').click(function() {


            if (this.value === "Fresh") {
                correctAnswers = 1;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
            }

            if (this.value === "Dice" || "Mirror" || "Cab") {
                correctAnswers = 0;
                incorrectAnswers = 1;
                unansweredQuestions = 0;
            } else {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 1;
            }

        });



        console.log(this.value);
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(unansweredQuestions);



        $(':radio[name=spicegirls]').change(function() {
            console.log(this.value);
        });

        $(':radio[name=nba]').change(function() {
            console.log(this.value);
        });

        $(':radio[name=group]').change(function() {
            console.log(this.value);
        });

        $(':radio[name=prince]').change(function() {
            console.log(this.value);
        });


    }


    function letsseethereusults() {

        $("#question1").hide();
        $("#question2").hide();
        $("#question3").hide();
        $("#question4").hide();
        $("#question5").hide();

        $("#answerOptions1").hide();
        $("#answerOptions2").hide();
        $("#answerOptions3").hide();
        $("#answerOptions4").hide();
        $("#answerOptions5").hide();

        $("#done").hide();

        $("#allDone").html("<h3>All Done!</h3>");

        $("#correctanswers").show();
        $("#incorrectanswers").show();
        $("#unansweredquestions").show();

        $("#correctanswers").html("Correct Answers: " + correctAnswers);
        $("#incorrectanswers").html("Incorrect Answers: " + incorrectAnswers);
        $("#unansweredquestions").html("Unanswered Questions: " + unansweredQuestions);

    }


    function stop() {
        clearInterval(intervalId);

    }

});