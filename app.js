document.getElementById("btn").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";

}
)


let name;
let Nickname;
 
document.getElementById("sub").addEventListener("click",function(){
    let name=document.querySelector(".in1").value
    console.log(name);

    let Nickname=document.querySelector(".in2").value
    console.log(Nickname);


    localStorage.setItem("name",name);
    localStorage.setItem("Nickname",Nickname);

window.location.href="about.html";




})
