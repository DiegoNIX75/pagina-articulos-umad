const toggleButton = document.querySelector("#header-menu");
const hiddenLinks = document.querySelector("#hiddenLinks");

console.log("Hola");
console.log({ toggleButton, hiddenLinks });

toggleButton.addEventListener("click",() => {
    hiddenLinks.classList.toggle("hidden")
})