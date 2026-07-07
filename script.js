const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Thank you for visiting my portfolio!");
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const text = "Frontend Web Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();