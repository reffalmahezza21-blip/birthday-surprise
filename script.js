
// ==========================================
// CONFIGURATION
// ==========================================

// Ganti password sesuai keinginan.
// Password awal: sayangkuu
const SECRET_PASSWORD = "hesticantik";

// Tanggal ulang tahun
const BIRTHDAY_DATE = new Date("2026-11-05T00:00:00+07:00");


// ==========================================
// ELEMENTS
// ==========================================

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");
const loginButton = document.getElementById("loginButton");
const togglePassword = document.getElementById("togglePassword");

const mainContent = document.getElementById("mainContent");

const giftBox = document.getElementById("giftBox");
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

const flames = document.getElementById("flames");
const blowButton = document.getElementById("blowButton");
const wishMessage = document.getElementById("wishMessage");

const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letterButton");

const confettiContainer =
    document.getElementById("confettiContainer");


// ==========================================
// 1. PASSWORD SYSTEM
// ==========================================

function unlockWebsite() {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === SECRET_PASSWORD) {

        passwordMessage.textContent = "";

        passwordScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        musicButton.classList.remove("hidden");

        // Memulai musik setelah interaksi pengguna
        music.play()
            .then(() => {
                musicButton.classList.add("playing");
            })
            .catch(() => {
                musicButton.classList.remove("playing");
            });

        createConfetti(60);
        createHearts(15);

        window.scrollTo(0, 0);

    } else {

        passwordMessage.textContent =
            "Oops! Password-nya belum tepat, coba lagi ya ♡";

        passwordInput.value = "";
        passwordInput.focus();
    }
}

loginButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockWebsite();
    }

});


// Tampilkan/sembunyikan password
togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "◉";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "♡";

    }

});


// ==========================================
// 2. COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = new Date();

    const difference = BIRTHDAY_DATE.getTime() - now.getTime();

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdownMessage").textContent =
            "Happy Birthday, Sayangkuu! Today is your special day! ♥";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    document.getElementById("countdownMessage").textContent =
        "Counting every second until your special day ♡";
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ==========================================
// 3. GIFT BOX ANIMATION
// ==========================================

let giftOpened = false;

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;

    giftBox.classList.add("opened");

    giftMessage.textContent =
        "Surprise! Happy Birthday, my beautiful Sayangkuu! ♥";

    giftButton.textContent = "Your Surprise Is Here! ♡";

    createConfetti(150);
    createHearts(30);

    // Pindah perlahan menuju kue ulang tahun
    setTimeout(() => {

        document.getElementById("cake").scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);
}

giftButton.addEventListener("click", openGift);

giftBox.addEventListener("click", openGift);


// ==========================================
// 4. BLOW THE CANDLES
// ==========================================

let candlesBlown = false;

blowButton.addEventListener("click", () => {

    if (candlesBlown) {

        wishMessage.textContent =
            "May all your beautiful wishes come true, sweetheart! ♥";

        return;
    }

    candlesBlown = true;

    flames.classList.add("off");

    wishMessage.textContent =
        "Your wishes deserve to come true. I love you! ♥";

    blowButton.textContent = "Wish Made! ♥";

    createConfetti(120);
    createHearts(25);

});


// ==========================================
// 5. LOVE LETTER
// ==========================================

letterButton.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        letterButton.textContent = "Close Your Letter ♥";

        createHearts(15);

    } else {

        letterButton.textContent = "Open Your Letter 💌";

    }

});


// ==========================================
// 6. MUSIC CONTROL
// ==========================================

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play()
            .then(() => {
                musicButton.classList.add("playing");
            })
            .catch(() => {
                musicButton.classList.remove("playing");
            });

    } else {

        music.pause();

        musicButton.classList.remove("playing");

    }

});


// ==========================================
// 7. CONFETTI EFFECT
// ==========================================

function createConfetti(amount) {

    const colors = [
        "#d88f9e",
        "#f4c2c9",
        "#d5ae78",
        "#fff0df",
        "#b96e81"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.width =
            (Math.random() * 8 + 5) + "px";

        piece.style.height =
            (Math.random() * 10 + 5) + "px";

        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "2px";

        piece.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6500);

    }

}


// ==========================================
// 8. FLOATING HEARTS
// ==========================================

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart-particle");

        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top =
            (Math.random() * 70 + 20) + "vh";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);

    }

}


// ==========================================
// 9. HEART WHEN CLICKING THE PAGE
// ==========================================

document.addEventListener("click", (event) => {

    if (event.target.closest("button, a, input, .gift-box")) {
        return;
    }

    if (mainContent.classList.contains("hidden")) {
        return;
    }

    const heart = document.createElement("div");

    heart.classList.add("heart-particle");

    heart.innerHTML = "♡";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);

});
