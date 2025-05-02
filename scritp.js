
const button = document.getElementById("myButton");
const output = document.getElementById("output");

// Button Click
button.addEventListener("click", () => {
  output.textContent = "You clicked the button!";
});

// Double Click (Secret Action)
button.addEventListener("dblclick", () => {
  output.textContent = "🔐 Secret unlocked via double click!";
});

// Long Press (Secret Action)
let pressTimer;
button.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    output.textContent = "🔓 Secret unlocked via long press!";
  }, 1000); // 1 second long press
});
button.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

// Keypress Detection
document.addEventListener("keydown", (event) => {
  output.textContent = `You pressed: ${event.key}`;
});







    // Button toggle
const btn = document.getElementById("changeBtn");
let toggled = false;
btn.addEventListener("click", () => {
    toggled = !toggled;
      btn.textContent = toggled ? "Clicked!" : "Click me!";
      btn.style.backgroundColor = toggled ? "#e74c3c" : "#2ecc71";
});

    // Image gallery slideshow
const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1042/600/400"
];



let imgIndex = 0;
    setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
const img = document.getElementById("galleryImg");
    img.style.opacity = 0;
    setTimeout(() => {
    img.src = images[imgIndex];
    img.style.opacity = 1;
}, 300);
}, 3000);

    // Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById("tab-" + button.dataset.tab).classList.add("active");
    });
});