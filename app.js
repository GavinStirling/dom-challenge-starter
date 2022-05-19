const welcomeHeading = document.getElementsByClassName("welcome__heading");


const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const formInput = document.querySelectorAll(".form-input");

welcomeHeading[0].innerText = "Welcome to Nology Conference 2022!";
name.classList.add("acive");

// console.log(welcomeHeading);


const handleRegister = () => {
    alert("The form was submitted.");
};

const handleInputChange = (event) => {
    if (event.target.value === ""){
        event.target.value.classList.add("invalid");
    } else {
        event.target.value.classList.add("valid");
    }
};

form.addEventListener("click", handleRegister);
formInput.forEach((input) => {
    input.addEventListener("input", handleInputChange);
});