window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector('.visual');
    const colors = [
        "#06d394",
        "#d3c206",
        "#600311",
        "#022a03",
        "#2c0371",
        "#7d0383"
    ];

    // Let's get going with the sounds now
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        }); 
    });
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function (){
            visuals.removeChild(this);
        });
    };
});