let button = document.getElementById("changeButton");
let colorText = document.getElementById("colorText");

button.addEventListener("click", function() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = color;

    colorText.textContent = color;
});
