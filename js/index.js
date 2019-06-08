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
