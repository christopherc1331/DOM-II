// Your code goes here
let headNav = document.querySelectorAll("nav a");

headNav.forEach(item => {
  item.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.5rem";
  });
  item.addEventListener("mouseout", e => {
    e.target.style.fontSize = "1.6rem";
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

// ctnr.addEventListener("wheel", item => {
//   item.stopPropagation();
//   i++;
//   item.target.style.backgroundColor = colorList[i];
// });
