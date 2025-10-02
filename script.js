const backgrounds = [
  "gtr1.jpg",
  "gtr2.jpg",
  "gtr3.jpg",
  "gtr4.jpg",
  "gtr5.jpg",
  "gtr6.jpg",
  "gtr7.jpg",
];

let current = 0;
function changeBackground() {
  current = (current + 1) % backgrounds.length;
  document.getElementById("bg-image").style.backgroundImage = `url('${backgrounds[current]}')`;
}


