let time = 0;
//let questions = document.getElementById('#questions');
let questions;

$(document).on('click', '#startGame', function () {

        // Timer:

        console.log('click');
        setInterval(count, 1000);

        // Questions:

        $('#questions').show();
        $('#submit').show();

        // Questions object:

        questions = [
            question1 = {
                question: 'What is it?',
                answers: [' A mysterious stranger with no face',
                    ' A creature whose claws drip with some ominous substance',
                    ' A god, older and more powerful than time itself',
                    " It's a... Well, it's odd... I can't seem to describe it..."
                ]
            },
            question2 = {
                question: 'Whence has it come?',
                answers: [' From inside a shining cosmic sailboat',
                    ' From a far off land',
                    ' From deep beneath the waves',
                    ' From the future'
                ]
            },
            question3 = {
                question: 'What does it want?',
                answers: [' A place to call home',
                    ' An ancient artifact',
                    " To find another of it's near-extinct kind",
                    ' Human blood'
                ]
            }

        ]

        for (let i = 0; i < questions.length; i++) {

            console.log(questions[i].question); // returns the question

            let questionHTML = $("<h3>");

            $(questionHTML).text(questions[i].question);
            $('#questions').append(questionHTML);
            let newForm = $('<form id = ' + questions[i] + '>');
        
            for (let a = 0; a < (questions[i].answers).length; a++) {

                console.log(questions[i].answers[a]); // returns the answers

                let answersHTML = $('<input type="radio" name="answer"><p>');
                $(answersHTML).html(questions[i].answers[a]);
                $(newForm).append(answersHTML);
                $('#questions').append(newForm);



            }
        }


    }

);

function count() {

    time++;

    let currentTime = timeConverter(time);

    $('#timer').text(currentTime);

}


// Taken from stopwatch activity:

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss):

    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes === 0) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
}

// Taken from https://www.dyn-web.com/tutorials/forms/radio/onclick.php:

$(document).ready(function () {
    // get list of radio buttons with name 'answer'
    let question1 = document.forms['question1'].elements[3].value
    let question2 = document.forms['question2'].elements[3].value;
    let question3 = document.forms['question3'].elements[3].value;


    /* WHen the user clicks a radio button, check to see if it is right or wrong. If it it correct, increase a "correct" count by 1 else do nothing

    let questionList = [{question: "Whats my name", answers:["one","two","three"], correct: "one", selected:"two"}]
    OnSubmit. questions.forEach(question => {
        if(questions[question].correct === questions[question].selected){
            console.log("GOt it")
        }
    })
    */
    // loop through list
    for (let i = 0; i < question1.length; i++) {
        question1[i].onclick = function () { // assign onclick handler function to each
            // put clicked radio button's value in total field
            if (this.value === true) {
                console.log('yes');
            };
        };
    }

})


// TODO: Use objects instead of hardcoded HTML to generate/print questions DONE
// TODO: The above, inside submit onclick