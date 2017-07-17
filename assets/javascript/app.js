$(document).ready(function() {

    // Hides the things we don't want to see on page load
    $("#done").hide();
    $("#correctanswers").hide();
    $("#incorrectanswers").hide();
    $("#unansweredquestions").hide();

    // Sets all the variables
    var number = 60;
    var intervalId;
    var cgimovie = 0;
    var spicegirls = 0;
    var nba = 0;
    var group = 0;
    var prince = 0;
    var correctAnswer1 = 0;
    var incorrectAnswer1 = 0;
    var unansweredQuestion1 = 0;
    var correctAnswer2 = 0;
    var incorrectAnswer2 = 0;
    var unansweredQuestion2 = 0;
    var correctAnswer3 = 0;
    var incorrectAnswer3 = 0;
    var unansweredQuestion3 = 0;
    var correctAnswer4 = 0;
    var incorrectAnswer4 = 0;
    var unansweredQuestion4 = 0;
    var correctAnswer5 = 0;
    var incorrectAnswer5 = 0;
    var unansweredQuestion5 = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var answerOptions1 = "<form action=\"\"><input type=\"radio\" name=\"cgimovie\" value=\"A Bugs Life\">A Bugs Life <input type=\"radio\" name=\"cgimovie\" value=\"Monsters Inc\"> Monsters Inc <input type=\"radio\" name=\"cgimovie\" value=\"Toy Story\"> Toy Story <input type=\"radio\" name=\"cgimovie\" value=\"The Lion King\"> The Lion King</form>";
    var answerOptions2 = "<form action=\"\"><input type=\"radio\" name=\"spicegirls\" value=\"Sporty Spice\">Sporty Spice <input type=\"radio\" name=\"spicegirls\" value=\"Fred Spice\"> Fred Spice <input type=\"radio\" name=\"spicegirls\" value=\"Scary Spice\"> Scary Spice <input type=\"radio\" name=\"spicegirls\" value=\"Posh Spice\"> Posh Spice</form>";
    var answerOptions3 = "<form action=\"\"><input type=\"radio\" name=\"nba\" value=\"New York Knicks\">New York Knicks <input type=\"radio\" name=\"nba\" value=\"Portland Trailblazers\"> Portland Trailblazers <input type=\"radio\" name=\"nba\" value=\"Los Angeles Lakers\"> Los Angeles Lakers <input type=\"radio\" name=\"nba\" value=\"Chicago Bulls\"> Chicago Bulls</form>";
    var answerOptions4 = "<form action=\"\"><input type=\"radio\" name=\"group\" value=\"Nervana\"> Nervana <input type=\"radio\" name=\"group\" value=\"Backstreet Boys\"> Backstreet Boys <input type=\"radio\" name=\"group\" value=\"The Offspring\"> The Offspring <input type=\"radio\" name=\"group\" value=\"No Doubt\"> No Doubt</form>";
    var answerOptions5 = "<form action=\"\"><input type=\"radio\" name=\"prince\" value=\"Dice\"> Dice <input type=\"radio\" name=\"prince\" value=\"Mirror\"> Mirror <input type=\"radio\" name=\"prince\" value=\"Fresh\"> Fresh <input type=\"radio\" name=\"prince\" value=\"Cab\"> Cab</form>";


    // Uses the buttons on the html page to call the start and done functions
    $("#start").on("click", start);
    $("#done").on("click", done);


    // When the Start button is clicked it calls this start function
    function start() {
        intervalId = setInterval(decrement, 1000);
        $("#start").hide();
        displaytimer();
        showquestionsandanswers();
    }

    // When the Done button is clicked it calls this done function
    function done() {
        letsseethereusults();
        stop();
        totalthemup();
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

    // This funtion passes the countdown timer to the html page
    function displaytimer() {
        $("#countDown").html("<h3>Time Remaining: " + number + " Seconds</h2>");
    }

    // This function stages all the questions and answer options and passes them to the html page via div ids
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


        // Here we are looking at the input radio buttons and capturing the final choice for their respective variables
        $('input:radio[name=cgimovie]').change(function() {
            cgimovie = (this.value);

        });

        $('input:radio[name=spicegirls]').change(function() {
            spicegirls = (this.value);

        });

        $('input:radio[name=nba]').change(function() {
            nba = (this.value);

        });

        $('input:radio[name=group]').change(function() {
            group = (this.value);

        });

        $('input:radio[name=prince]').change(function() {
            prince = (this.value);

        });


    }

    // When the done function runs it runs this function to hide the previous view and show the results
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


    }

    // This is where we calculate all the correct and incorrect and unanswered questions and add them together for the results
    function totalthemup() {

        // Calculating first question cgimovie
        if (cgimovie == "Toy Story") {
            correctAnswer1 = 1;
        } else if (cgimovie == "A Bugs Life" || cgimovie == "Monsters Inc" || cgimovie == "The Lion King") {

            incorrectAnswer1 = 1;

        } else if (cgimovie == 0) {
            unansweredQuestion1 = 1;
        }


        // Calculating second question spicegirls
        if (spicegirls == "Fred Spice") {
            correctAnswer2 = 1;
        } else if (spicegirls == "Sporty Spice" || spicegirls == "Scary Spice" || spicegirls == "Posh Spice") {

            incorrectAnswer2 = 1;

        } else if (spicegirls == 0) {
            unansweredQuestion2 = 1;
        }


        // Calculating third question nba
        if (nba == "Chicago Bulls") {
            correctAnswer3 = 1;
        } else if (nba == "New York Knicks" || nba == "Portland Trailblazers" || nba == "Los Angeles Lakers") {

            incorrectAnswer3 = 1;

        } else if (nba == 0) {
            unansweredQuestion3 = 1;
        }


        // Calculating forth question group
        if (group == "Nervana") {
            correctAnswer4 = 1;
        } else if (group == "Backstreet Boys" || group == "The Offspring" || group == "No Doubt") {

            incorrectAnswer4 = 1;

        } else if (nba == 0) {
            unansweredQuestion4 = 1;
        }


        // Calculating fifth question group
        if (prince == "Fresh") {
            correctAnswer5 = 1;
        } else if (prince == "Dice" || prince == "Mirror" || prince == "Cab") {

            incorrectAnswer5 = 1;

        } else if (nba == 0) {
            unansweredQuestion5 = 1;
        }

        // Totaling and constructing the verbiage that will be passed into the html div ids
        $("#correctanswers").html("Correct Answers: " + Number(correctAnswer1 + correctAnswer2 + correctAnswer3 + correctAnswer4 + correctAnswer5));
        $("#incorrectanswers").html("Incorrect Answers: " + Number(incorrectAnswer1 + incorrectAnswer2 + incorrectAnswer3 + incorrectAnswer4 + incorrectAnswer5));
        $("#unansweredquestions").html("Unanswered Questions: " + Number(unansweredQuestion1 + unansweredQuestion2 + unansweredQuestion3 + unansweredQuestion4 + unansweredQuestion5));

    }
    // Clearing the clock on stop
    function stop() {
        clearInterval(intervalId);

    }
});