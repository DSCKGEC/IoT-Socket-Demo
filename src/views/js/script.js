const port = 2053;
let Loaded = false;
let isLight = localStorage.getItem("isLight") === "true" ? true : false;
var socket = io(`http://localhost:${port}`);
console.log(socket);

window.onload = () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const toggle = document.getElementById("toggle");
  const slider = document.getElementById("slider");
  const brightness = document.getElementById("brightness");
  updateBrightness(brightness, slider.value, toggle.checked);
  // local theme loader script
  themeSwitch.checked = isLight;
  document.body.classList.toggle("dark", !isLight);
  //theme change event listener
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("isLight", themeSwitch.checked);
  });
  //socket.on events
  socket.on("connect", () => {
    socket.on("toggle", (data) => {
      toggle.checked = data;
      updateBrightness(brightness, slider.value, toggle.checked);
    });
    socket.on("slider", (data) => {
      slider.value = data;
      updateBrightness(brightness, slider.value, toggle.checked);
    });
  });

  //control toggle event listener
  toggle.addEventListener("change", () => {
    socket.emit("toggle", toggle.checked);
    updateBrightness(brightness, slider.value, toggle.checked);
  });
  //control slider event listener
  slider.addEventListener("input", () => {
    socket.emit("slider", slider.value);
    updateBrightness(brightness, slider.value, toggle.checked);
  });
  Loaded = true;
};

const updateBrightness = (doc, data, state) => {
  doc.innerText =
    state === true
      ? String(mathMap(data, 0, 1023, 0, 100).toFixed(0)) + "%"
      : "OFF";
};

const mathMap = (input, inmin, inmax, outmin, outmax) => {
  return ((input - inmin) * (outmax - outmin)) / (inmax - inmin);
};
