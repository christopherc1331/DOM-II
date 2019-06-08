// Your code goes here
let headNav = document.querySelectorAll("nav a");

headNav.forEach(item => {
  item.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.5rem";
  });
  item.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem";
  });
  item.addEventListener("click", e => {
    e.preventDefault();
  });
});

let btns = document.querySelectorAll(".btn");

btns.forEach(item => {
  item.addEventListener("dblclick", e => {
    alert("EMAIL: fakeEmail@fakeEmailHost.com FOR MORE INFO!!!!");
  });
});

colorList = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000"
];

let ctnr = document.querySelectorAll(".container");

let i = 0;

let logo = document.querySelector(".logo-heading");
console.log(logo);

// logo.textContent = "Chris is awesome!";

ctnr.forEach(item => {
  item.addEventListener("wheel", event => {
    if (i > colorList.length) {
      i = 0;
    } else {
      i++;
    }
    event.target.style.backgroundColor = colorList[i];
    event.stopPropagation();
  });
});

logo.addEventListener("click", event => {
  if (logo.textContent === "Chris is awesome!") {
    logo.textContent = "Fun Bus";
  } else {
    logo.textContent = "Chris is awesome!";
  }
});

document.querySelector(".intro img").addEventListener("drag", item => {
  item.target.style.display = "none";
});

let allPics = document.querySelectorAll("img");

allPics.forEach(item => {
  item.addEventListener("click", event => {
    event.target.style.filter = "invert(100%)";
  });
});

let allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach(item => {
  item.addEventListener("cut", event => {
    event.target.textContent =
      "Whoa whoa there buddy, save the cutting for Edward Scissorhands!";
  });
  item.addEventListener("copy", event => {
    event.target.textContent =
      "If you're gonna copy my style at least gimme a shoutout!  My name is Blake Johnson, and I'm ready for action!";
  });
});
