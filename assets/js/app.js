const version = "v.1.0.0";
document.getElementById("version").textContent = version;

const author = `timeo`;
console.log(`welcome voici l'été: "citation de ${author} "`);

const data = [
  {
    title: `GIMS-LA MANO PARISIENE`,
    src: `gims-parisiene.mp3`,
    category: `fun`,
    cover:
      "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/",
  },
  {
    title: `MON BÉBÉ`,
    src: `monbebe.mp3`,
    category: `RAP`,
    cover:
      "https://static.vecteezy.com/ti/vecteur-libre/t2/1312577-mignon-heureux-baby-holding-baby-milk-bottle-vectoriel.jpg",
  },
];
console.table(data);

data.forEach((music) => {
  document.getElementById(`playlist`).innerHTML += `<li>
            <div class="cardaudio linear-gradient">
              <div class="cover">
                <img
                  src=" ${music.cover} "
                  alt="cover"
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

const dataLi = document.querySelectorAll("#playlist li");
dataLi.forEach((audio, index) => {
  audio.addEventListener("click", () => {
    document.querySelector("audio").src = `./assets/audio/${data[index].src}`;
    document.querySelector("audio").play();
  });
});
