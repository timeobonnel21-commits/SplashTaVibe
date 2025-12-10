const version = "v.0.1.0";

console.log(21.5);

const year = 2025;
const dob = 2011;
const isAdult = true;
const user = {
  name: "lisa",
  age: 20,
};
const family = ["Jéremy", "Mélanie", "Clara", "Lisa", "Timéo", "Joy"];
console.log(typeof family);
const age = year - dob;
console.log(age);

const userName = "timeo";
console.log("bonjour " + userName + " bienvenue sur mon site");

console.log(`bonsoir ${family[3]},je connais ton age: ${user.age}`);

console.table(family);
console.table(user);
console.warn("Attention au hack");
console.error("erreur 21");

const fullFamily = [
  { name: "jeremy", age: 45, isAdult: true },
  { name: "timeo", age: 14, isAdult: false },
];
console.table(fullFamily);
console.log(fullFamily[1].name);

function hello(name) {
  console.log(`bonjour ${name}`);
}
hello(family[3]);
hello(family[5]);

family.forEach((user) => {
  console.log(`salut ${user}`);
});

console.log(document.getElementById("version"));
document.getElementById("version").textContent = version;

// premier etape declare les piste audio

const audio = {
  title: "string",
  category: "string",
  cover: "string",
  src: "string",
};

const playlist = [
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
  audio,
];
console.table(playlist);
