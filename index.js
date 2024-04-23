console.log();
const questions = [
    {
        word: "cadira",
        options: [
            { text: "Chair", correct: true },
            { text: "Table", correct: false },
            { text: "Window", correct: false }]
    },
    {
        word: "sorra",
        options: [
            { text: "snow", correct: false },
            { text: "sand", correct: true },
            { text: "iron", correct: false }]
    },
    {
        word: "fred",
        options: [
            { text: "Cold", correct: true },
            { text: "wind", correct: false },
            { text: "fresh", correct: false }
        ]

    },
    {
        word: "clau",
        options: [
            { text: "key", correct: true },
            { text: "card", correct: false },
            { text: "ring", correct: false }
        ]
    },

    //level 2

    {
        word: "Gos",
        options: [
            { text: "Cat", correct: false },
            { text: "Dog", correct: true },
            { text: "Fish", correct: false }
        ]
    },
    {
        word: "Teulada",
        options: [
            { text: "Wall", correct: false },
            { text: "Door", correct: false },
            { text: "roof", correct: true }
        ]
    },
    {
        word: "fulla",
        options: [
            { text: "Pillow", correct: false },
            { text: "Blanket", correct: false },
            { text: "sheet", correct: true }
        ]
    },
    {
        word: "Raïm",
        options: [
            { text: "Banana", correct: false },
            { text: "Grape", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        word: "soroll",
        options: [
            { text: "silence", correct: false },
            { text: "peace", correct: false },
            { text: "noise", correct: true }
        ]
    },
    {
        word: "avi",
        options: [
            { text: "grandfather", correct: true },
            { text: "Brother", correct: false },
            { text: "Uncle", correct: false }
        ]
    },
    {
        word: "Granota",
        options: [
            { text: "Snake", correct: false },
            { text: "frog", correct: true },
            { text: "Bird", correct: false }
        ]
    },
    {
        word: "assumpte",
        options: [
            { text: "concern", correct: true },
            { text: "Joy", correct: false },
            { text: "Interest", correct: false }
        ]
    }
]


class Game {
    constructor() {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.gameStarted = false;
    }

}

const newGame = new Game();
console.log(newGame);
/* to do add button with */
newGame.gameStarted = true;



const wordElement = document.querySelector(".word");
const optionBtns = document.querySelectorAll(".btn");
const nextButton = document.querySelector(".next");
const containerElement = document.querySelector(".container");



function startQuiz() {

    newGame.currentQuestionIndex = 0;
    newGame.score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
    console.log(newGame);
}
function showQuestions() {
    // resetState();
    let currentQuestion = questions[newGame.currentQuestionIndex];
    console.log(currentQuestion)

    // let questionNbr= currentQuestionIndex + 1; // 
    wordElement.innerHTML = currentQuestion.word;

    console.log(optionBtns);

    optionBtns.forEach((buttonElement, index) => {
        buttonElement.innerHTML = currentQuestion.options[index].text;

        buttonElement.onclick = function () {
            if (currentQuestion.options[index].correct) {
                console.log("¡Respuesta correcta!");
                newGame.score++;
                containerElement.style.backgroundColor = "green";


            } else {
                console.log("Respuesta incorrecta!");
                containerElement.style.backgroundColor = "red";
            }
            nextButton.disabled = false;

            nextButton.onclick = function () {
                if (newGame.currentQuestionIndex < questions.length - 1) {
                    newGame.currentQuestionIndex++;
                    containerElement.style.backgroundColor = "powderblue";

                    showQuestions();
                } else {
                    console.log("¡Cuestionario terminado!");
                    console.log("Puntuación Final: " + newGame.score);
                }
                nextButton.disabled = true;
            };

        };
    });


}



startQuiz();



