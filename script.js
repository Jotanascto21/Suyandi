// Música de fundo
document.getElementById("playButton").addEventListener("click", function () {
    let audio = document.getElementById("musica");
    if (audio.paused) {
        audio.play();
        this.innerText = "🔇 Parar Música";
    } else {
        audio.pause();
        this.innerText = "🎶 Tocar Música";
    }
});

// Corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.innerHTML = "❤️";
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 5000);
}

setInterval(criarCoracao, 300);
