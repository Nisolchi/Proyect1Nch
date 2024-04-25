const jsConfetti = new JSConfetti()
const questions = [

    {
        word: "CADIRA",
        options: [
            { text: "Chair", correct: true },
            { text: "Table", correct: false },
            { text: "Window", correct: false }]
    },
    {
        word: "SORRA",
        options: [
            { text: "Snow", correct: false },
            { text: "Sand", correct: true },
            { text: "Iron", correct: false }]
    },
    {
        word: "FRED",
        options: [
            { text: "Cold", correct: true },
            { text: "Wind", correct: false },
            { text: "Fresh", correct: false }
        ]

    },
    {
        word: "CLAU",
        options: [
            { text: "Key", correct: true },
            { text: "Card", correct: false },
            { text: "Ring", correct: false }
        ]
    },

    {
        word: "GOS",
        options: [
            { text: "Cat", correct: false },
            { text: "Dog", correct: true },
            { text: "Fish", correct: false }
        ]
    },
    {
        word: "TEULADA",
        options: [
            { text: "Wall", correct: false },
            { text: "Door", correct: false },
            { text: "Roof", correct: true }
        ]
    },
    {
        word: "FULLA",
        options: [
            { text: "Pillow", correct: false },
            { text: "Blanket", correct: false },
            { text: "Sheet", correct: true }
        ]
    },
    {
        word: "RAïM",
        options: [
            { text: "Banana", correct: false },
            { text: "Grape", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        word: "SOROLL",
        options: [
            { text: "Silence", correct: false },
            { text: "Peace", correct: false },
            { text: "Noise", correct: true }
        ]
    },
    {
        word: "AVI",
        options: [
            { text: "Grandfather", correct: true },
            { text: "Brother", correct: false },
            { text: "Uncle", correct: false }
        ]
    },
    {
        word: "GRANOTA",
        options: [
            { text: "Snake", correct: false },
            { text: "Frog", correct: true },
            { text: "Bird", correct: false }
        ]
    },
    {
        word: "ASSUMPTE",
        options: [
            { text: "Concern", correct: true },
            { text: "Joy", correct: false },
            { text: "Interest", correct: false }
        ]
    },
    {
        word: "ESTERNUT",
        options: [
            { text: "Jump", correct: false },
            { text: "Sneeze", correct: true },
            { text: "Shout", correct: false }
        ]
    },
    {
        word: "PUNXÓ",
        options: [
            { text: "Knife", correct: false },
            { text: "Punch", correct: true },
            { text: "Nail", correct: false }
        ]
    },
    {
        word: "VIDRE",
        options: [
            { text: "Wall", correct: false },
            { text: "Glass", correct: true },
            { text: "Water", correct: false }
        ]
    },
    {
        word: "OMBRA",
        options: [
            { text: "Tree", correct: false },
            { text: "Shadow", correct: true },
            { text: "Wave", correct: false }
        ]
    },
    {
        word: "FORQUILLA",
        options: [
            { text: "Spoon", correct: false },
            { text: "Fork", correct: true },
            { text: "Knife", correct: false }
        ]
    },
    {
        word: "ESPATLLES",
        options: [
            { text: "Elbows", correct: false },
            { text: "Shoulders", correct: true },
            { text: "Knees", correct: false }
        ]
    },
    {
        word: "CAPSETA",
        options: [
            { text: "Cabinet", correct: false },
            { text: "Box", correct: true },
            { text: "Bag", correct: false }
        ]
    }
];


class Game {
    constructor() {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.gameStarted = false;
    }

}

const newGame = new Game();
console.log(newGame);

newGame.gameStarted = true;



const wordElement = document.querySelector(".word");
const optionBtns = document.querySelectorAll(".btn");
const nextButton = document.querySelector(".next");
const containerElement = document.querySelector(".container");





let winAudio = new Audio("./sounds/274177__littlerobotsoundfactory__jingle_win_synth_03.wav");

let loseAudio = new Audio("./sounds/159408__noirenex__life-lost-game-over.wav");

let finalAudio = new Audio("./sounds/133284__leszek_szary__level-completed.wav");



function startQuiz() {

    newGame.currentQuestionIndex = 0;
    newGame.score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
    console.log(newGame);
    updateScore();
}
function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = newGame.score;
}
function showQuestions() {
    let currentQuestion = questions[newGame.currentQuestionIndex];
    console.log(currentQuestion)

    wordElement.innerHTML = currentQuestion.word;

    console.log(optionBtns);

    optionBtns.forEach((buttonElement, index) => {
        buttonElement.innerHTML = currentQuestion.options[index].text;

        function endGame() {
            console.log("¡end quiz!");
            console.log("Puntuation Final: " + newGame.score);
            finalAudio.play();
            nextButton.style.display = "none";
            document.querySelector(".restart").style.display = "block";
        }

        function restartGame() {
            const restartButton = document.querySelector(".restart");
            restartButton.addEventListener("click", function () {
                startQuiz();
                nextButton.style.display = "block";
                restartButton.style.display = "none";
            });
        }


        buttonElement.onclick = function () {
            if (currentQuestion.options[index].correct) {
                console.log("¡corret!");
                winAudio.play();
                jsConfetti.addConfetti({
                    emojis: ['⚡️', '💥', '✨', '💫', '🪙'],
                })
                newGame.score++;
                updateScore();
                containerElement.style.backgroundColor = "yellowgreen";


            } else {
                console.log(" incorrect!");
                loseAudio.play();

                containerElement.style.backgroundColor = "red";
            }
            nextButton.disabled = false;

            nextButton.onclick = function () {
                if (newGame.currentQuestionIndex < questions.length - 1) {
                    newGame.currentQuestionIndex++;
                    containerElement.style.backgroundColor = "powderblue";

                    showQuestions();
                } else {
                    endGame();
                    console.log("¡Cuestionario terminado!");
                    console.log("Puntuación Final: " + newGame.score);

                }
                nextButton.disabled = true;
            };
            restartGame();
        };
    });


}

startQuiz();
