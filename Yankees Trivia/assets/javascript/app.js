



var questions = [{
            ques: "The 1927 Yankees found themselves in their fifth World Series. Which manager took them to all five.",
            ans: ["Joe McCarthy", "Casey Stengel", "Ralph Houk", "Miller Huggins"],
            name: "earlyManager",
            correct: "Miller Huggins",
            divClass: ".earlyManager"
        },
        {
            ques: "This tremendous franchise began with the new American League in 1901, and the team was named the Baltimore Orioles. After moving to New York, what team name did they take up?",
            ans: ["HighLanders", "Wet Socks", "The Pin Stripes", "Red Sox"],
            name: "notaToyota",
            correct: "HighLanders",
            divClass: ".notaToyota"
        },
        {
            ques: "On January 3, 1920, the Yankees purchased the contract of Babe Ruth from what MLB team?",
            ans: ["Chicago White Sox", "Detriot Tigers", "Boston Red Sox", "NY Mets"],
            name: "suckers",
            correct: "Boston Red Sox",
            divClass: ".suckers"
        },
        {
            ques: "Which one of these Yankee greats laid claim to be the first player in Major League history to win the All-Star Game and World Series MVP honors in the same year?",
            ans: ["Reggie Jackson", "Babe Ruth", "Derek Jeter", "Mickey Mantle"],
            name: "elCapitan",
            correct: "Derek Jeter",
            divClass: ".elCapitan"
        },
        {
            ques: "In 1996, the Yankees were down 2-1 in the World Series against the Atlanta Braves. This Yankee hit a three-run homerun, in the 7th inning of game four off of Mark Wohlers",
            ans: ["Ruben Sierra", "Jim Leyritz", "Tim Raines", "Tino Martinez"],
            name: "comeBack",
            correct: "Jim Leyritz",
            divClass: ".comeBack"
        },
        {
            ques: "Which of these Yankees set a team record with a batting average of .393?",
            ans: ["Derek Jeter", "Lou Gehrig", "Joe DiMaggio", "Babe Ruth"],
            name: "bestAvg",
            correct: "Babe Ruth",
            divClass: ".bestAvg"
        },
        {
            ques: "Which of the following ex-Yankees never won a World Series ring?",
            ans: ["Ricky Henderson", "Don Mattingly", "Bernie Williams", "Wade Boggs"],
            name: "ohWell",
            correct: "Don Mattingly",
            divClass: ".ohWell"
        },
        {
            ques: "How many homeruns did Babe Ruth hit in his career?",
            ans: ["602", "714", "59", "855"],
            name: "homeRuns",
            correct: "714",
            divClass: ".homeRuns"
        },
        {
            ques: "Why was Babe Ruth number 3?",
            ans: ["Was his fielding position", "It was his batting order", "Lucky #", "Was just Assigned"],
            name: "batOrder",
            correct: "It was his batting order",
            divClass: ".batOrder"
        },
        {
            ques: "Which player was the Yankee captain from 1976-1979?",
            ans: ["Thurman Munson", "Reggie Jackson", "Jackie Robinson", "Donald Trump"],
            name: "flyingCap",
            correct: "Thurman Munson",
            divClass: ".flyingCap"
        }
    ] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz