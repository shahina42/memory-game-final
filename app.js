// // FRONT PAGE JS
const Name = document.querySelector(".in1");
const nick = document.querySelector(".in2");
const button = document.querySelector("#sub");

document.getElementById("btn").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";

}
)

button.addEventListener('click', () => {
    if (Name.value == "" && nick.value != "") {
        alert("Enter your Name")
    }
    else if (Name.value != "" && nick.value == "") {

        alert("Enter your Nickname")
    }
    else if (Name.value != "" && nick.value != "") {
        sessionStorage.setItem('Fullname', Name.value);
        sessionStorage.setItem('Nickname', nick.value);
        window.location.href = "about.html"
    }
    else {
        alert("Enter the name")
    }

});





