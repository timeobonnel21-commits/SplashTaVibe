import { data } from "./data-audio.js";
const year= new Date().getFullYear()
document.querySelector("#year").textContent = year

console.log (year)
const version = "v.1.0.0";
document.getElementById("version").textContent = version;

const author = `timeo`;
console.log(`welcome voici l'été: "citation de ${author} "`);

console.table(data);

data.forEach((music) => {
  document.getElementById(`playlist`).innerHTML += `<li>
            <div class="cardaudio linear-gradient">
              <div class="cover">
                <img
                  src="${music.cover}"
                  alt="${music.title}"
                  loading="lazy"
                />
              </div>
              <div class="content">
                <h3>${music.title}</h3>
                <p>categorie : ${music.category} </p>
              </div>
            </div>
          </li>`;
});

document.querySelector("#title").addEventListener("click", () => {
  const title = document.querySelector("#title").textContent;
  if (title === "STV") {
    document.querySelector("#title").textContent = "SplashTaVibe";
  } else {
    document.querySelector("#title").textContent = "STV";
  }
});

const audioPlayer = document.querySelector("audio");
let currentCard = null;

const dataLi = document.querySelectorAll("#playlist li");
dataLi.forEach((card, index) => {
  card.classList.remove("play");
  card.addEventListener("click", () => {
    dataLi.forEach((item) => item.classList.remove("play", "paused")); // only keep clicked card active
    card.classList.add("play");
    currentCard = card;
    audioPlayer.src = `./assets/audio/${data[index].src}`;
    audioPlayer.play();
  });
});

audioPlayer.addEventListener("pause", () => {
  if (currentCard) {
    currentCard.classList.add("paused");
  }
});

audioPlayer.addEventListener("play", () => {
  if (currentCard) {
    currentCard.classList.remove("paused");
  }
});
