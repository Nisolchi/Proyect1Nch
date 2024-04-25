const button = document.querySelector(`#btn`);
 const canvas = document.querySelector(`#confetti`);
 let enjoyAudio = new Audio("./sounds/quiz-game-music-loop-bpm-90-61070.mp3");

const jsConfetti = new JSConfetti();

button.addEventListener(`click`,()=>{
    enjoyAudio.play();
    jsConfetti.addConfetti({
            emojis: ['⚡️', '💥', '✨', '💫', '🌸'],   
    })
});

