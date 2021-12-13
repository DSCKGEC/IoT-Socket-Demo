const port = 4000;
let Loaded = false;
let isDark = localStorage.getItem("isDark") == "true" ? true : false;
var socket = io(`http://localhost:${port}`);
console.log(socket);

window.onload = () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const toggle = document.getElementById("toggle");
  const slider = document.getElementById("slider");
  // local theme loader script
  themeSwitch.checked = isDark;
  document.body.classList.toggle("dark", isDark);
  //theme change event listener
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("isDark", themeSwitch.checked);
  });
  //control toggle event listener
  toggle.addEventListener("change", () => {
    socket.emit("toggle", toggle.checked);
  });
  //control slider event listener
  slider.addEventListener("input", () => {
    socket.emit("slider", slider.value);
  });
  Loaded = true;
};
