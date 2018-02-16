let input = document.getElementById("input-txt");
let submit = document.getElementById("submit");
let output = document.getElementById("output");

function factorialize (num) {
    if (num < 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}
function outputVal () {
    output.innerHTML = factorialize(input.value);
}
submit.addEventListener("click", outputVal);