console.log();
const questions = [
    {
        word: "Cadira",
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
            { text: "fresh", correct: false }]

    },
    {
        word: "clau",
       options: [
        { text: "key", correct: true },
        { text: "card", correct: false },
        { text: "ring", correct: false }]
    },
]


const wordElement = document.querySelector(".word");
const  optionBtnElement= document.querySelector(".optionBtn");
const NextButton= document.querySelector(".next");


