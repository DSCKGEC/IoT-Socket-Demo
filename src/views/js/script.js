const port = 4000;
let Loaded = false;
let isLight = localStorage.getItem("isLight") == "true" ? true : false;
var socket = io(`http://localhost:${port}`);
console.log(socket);

window.onload = () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const toggle = document.getElementById("toggle");
  const slider = document.getElementById("slider");
  const brightness = document.getElementById("brightness");
  // local theme loader script
  themeSwitch.checked = isLight;
  document.body.classList.toggle("dark", !isLight);
  //theme change event listener
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("isLight", themeSwitch.checked);
  });
  socket.on("toggle", (data) => {
    toggle.checked = data;
  });
  socket.on("slider", (data) => {
    slider.value = data;
    updateBrightness(brightness, data);
  });
  //control toggle event listener
  toggle.addEventListener("change", () => {
    socket.emit("toggle", toggle.checked);
  });
  //control slider event listener
  slider.addEventListener("input", () => {
    socket.emit("slider", slider.value);
    updateBrightness(brightness, slider.value);
  });
  Loaded = true;
};

const updateBrightness = (doc, data) => {
  doc.innerText = String(mathMap(data, 0, 1023, 0, 100).toFixed(0)) + "%";
};

const mathMap = (input, inmin, inmax, outmin, outmax) => {
  return (input - inmin)*(outmax - outmin)/(inmax - inmin);
}