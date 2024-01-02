// Variables
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let convert = document.querySelector(".btn");


// EventListener to button
convert.addEventListener("click", () => {
    let inFahrenheit = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = inFahrenheit;
});
