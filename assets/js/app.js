const version = "v.1.0.0";
document.getElementById("version").textContent = version;

const author = `timeo`;
console.log(`welcome voici l'été: "citation de ${author} "`);

const data = [
  {
    title: `GIMS-LA MANO PARISIENE`,
    src: `gims-parisiene.mp3`,
    category: `fun`,
    cover: "https://i.scdn.co/image/ab67616d0000b27393db7b33b63de6dc99a131ee",
  },
  {
    title: `MON BÉBÉ`,
    src: `monbebe.mp3`,
    category: `RAP`,
    cover: "https://i.scdn.co/image/ab67616d0000b273deb7071c9722a7c10a26ed6b",
  },
  {
    title: `QUEEN - Another One Bites the Dust`,
    src: `queen.mp3`,
    category: `remix`,
    cover: "https://i.ytimg.com/vi/NVIbCvfkO3E/maxresdefault.jpg",
  },
  {
    title: `Cyberpunk 2077`,
    src: `cyberpunk 2077.mp3`,
    category: `techno`,
    cover:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png",
  },
  {
    title: `R2-nuinart`,
    src: `R2-ruinart.mp3`,
    category: `RAP`,
    cover:
      "https://cdn-images.dzcdn.net/images/cover/405f1c98886bd62846f7609df66ce1f2/0x1900-000000-80-0-0.jpg",
  },
  {
    title: `attenta`,
    src: `Attentat.mp3`,
    category: `RAP fun`,
    cover: "https://i.scdn.co/image/ab67616d0000b273e7920f048947a2cb6371557a",
  },
  {
    title: `Copine`,
    src: `Copine.mp3`,
    category: `RAP`,
    cover: "https://i.scdn.co/image/ab67616d0000b273d34da31b55f52c4c06a12dff",
  },
  {
    title: `Loreen - Tattoo`,
    src: `Loreen - Tattoo.mp3`,
    category: `POP`,
    cover: "https://i.scdn.co/image/ab67616d0000b2732b0ba87db609976eee193bd6",
  },
];
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
