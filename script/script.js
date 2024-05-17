const button1 = document.getElementById("btn_toggle1");
const button2 = document.getElementById("btn_toggle2");
const button3 = document.getElementById("btn_toggle3");

let list = document.querySelector("ul");

function handleClick() {
  button1.classList.toggle("origin-center"),
    button1.classList.toggle("-rotate-45"),
    button1.classList.toggle("translate-x-[-5px]"),
    button1.classList.toggle("translate-y-[5px]");
  button2.classList.toggle("opacity-0"), button2.classList.toggle("w-0");
  button3.classList.toggle("origin-center"),
    button3.classList.toggle("rotate-45"),
    button3.classList.toggle("translate-x-[-5px]"),
    button3.classList.toggle("translate-y-[-9px]");

  list.classList.toggle("top-[92px]"), list.classList.toggle("opacity-100");
}
