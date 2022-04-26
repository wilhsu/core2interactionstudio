const questions = [
    {
      "question": "Age range?",
      "answer1": "under 18",
      "answer1Total": "1",
      "answer2": "18 - 30",
      "answer2Total": "2",
      "answer3": "over 30",
      "answer3Total": "3"
    },
    {
      "question": "I am very imaginative.",
      "answer1": "Agree",
      "answer1Total": "1",
      "answer2": "Neutral",
      "answer2Total": "2",
      "answer3": "Disagree",
      "answer3Total": "3"
    },
    {
      "question":
        "Select in which order you would value these \"Money, Love & Career",
      "answer1": "Love, Career, Money",
      "answer1Total": "1",
      "answer2": "Money, Career, Love",
      "answer2Total": "3",
      "answer3": "Career, Love, Money",
      "answer3Total": "2"
    },
    {
      "question": "Best Sentence to describe you?",
      "answer1": "You feel superior to other people.",
      "answer1Total": "3",
      "answer2": "You consider yourself more practical than creative.",
      "answer2Total": "2",
      "answer3":
        "Winning a debate matters less to you than making sure no one gets upset.",
      "answer3Total": "1"
    },
    {
      "question": "Which best describes your relationship with food",
      "answer1": "You tend to over-eat when you have company.",
      "answer1Total": "1",
      "answer2": "You tend to eat snacks secretly.",
      "answer2Total": "2",
      "answer3": "You prepare food and don\’t even look at the recipe.",
      "answer3Total": "3"
    },
    {
      "question":
        "You make plans with a friend and they cancel on you, what do you do?",
      "answer1":
        "Say \"whatever\" and plan a night that'll be GREAT so they don't cancel again.",
      "answer1Total": "3",
      "answer2": "Feel hurt because you were looking forward to tonight.",
      "answer2Total": "2",
      "answer3": "No problem, you kinda wanted to stay home anyway.",
      "answer3Total": "1"
    },
    {
      "question": "Which of the following colours do you like most?",
      "answer1": "Black",
      "answer1Total": "1",
      "answer2": "Yellow or light blue",
      "answer2Total": "2",
      "answer3": "Red or orange",
      "answer3Total": "3"
    }
  ]

let questionNow = 0;
let score = [];
let responseData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quizcontainer');
const questionRN = document.querySelector('.question');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const restart = document.querySelector('.restart');
const result = document.querySelector('.result');

function generateQuestions (index){
    const question = questions[index];
    const opt1Total = questions[index].answer1Total;
    const opt2Total = questions[index].answer2Total;
    const opt3Total = questions[index].answer3Total;
    //Populate html elements 
    questionRN.innerHTML = `${index + 1}. ${question.question}`
    opt1.setAttribute('data-total', `${opt1Total}`);
    opt2.setAttribute('data-total', `${opt2Total}`);
    opt3.setAttribute('data-total', `${opt3Total}`);
    opt1.innerHTML = `${question.answer1}`
    opt2.innerHTML = `${question.answer2}`
    opt3.innerHTML = `${question.answer3}`
}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    responseData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(questionNow);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
