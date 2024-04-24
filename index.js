const button = document.querySelector(`#btn`);
const canvas = document.querySelector(`#confetti`);

const jsConfetti = new JSConfetti();

button.addEventListener(`click`,()=>{
    jsConfetti.addConfetti({
            emojis: ['⚡️', '💥', '✨', '💫', '🌸'],   
    })
});

