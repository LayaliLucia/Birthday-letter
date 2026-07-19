// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const giftBtn = document.querySelector(".gift-btn");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

// Open the letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    document.body.classList.add("letter-open");

    if (music.paused) {
        music.volume = 0.35;
        music.play().catch(() => {});
        musicToggle.textContent = "🔊 Music";
    }

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

// Open the gift
giftBtn.addEventListener("click", () => {

    // Little animation
    giftBtn.style.transform = "scale(1.15) rotate(8deg)";

    setTimeout(() => {

        buttons.style.display = "none";

        finalText.innerHTML = `
        🎉 <strong>Happy Birthday!</strong> 🎉<br><br>

        Wishing you a day filled with happiness,
        laughter, delicious cake 🍰,
        and unforgettable memories.<br><br>

        May this new year of your life bring
        success, good health,
        exciting adventures,
        and all the happiness you deserve. ✨<br><br>

        🎈 Have an amazing birthday! 🎁
        `;

        finalText.style.display = "block";

        setTimeout(() => {
            finalText.classList.add("show");
        }, 20);

    }, 350);

});

// Music Toggle
musicToggle.addEventListener("click", () => {

    if (music.paused) {
        music.play().catch(() => {});
        musicToggle.textContent = "🔊 Music";
    } else {
        music.pause();
        musicToggle.textContent = "🔈 Music";
    }

});