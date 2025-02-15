const wijzig = () => {
    const pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
const setup = () =>{
    const button = document.getElementById("changeTextButton");
    button.addEventListener("click",wijzig);
}
window.addEventListener("load", setup);