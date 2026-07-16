const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("mouseover", function () {
    submitButton.style.backgroundColor = "gray";
});

submitButton.addEventListener("mouseout", function () {
    submitButton.style.backgroundColor = "darkslategray";
});