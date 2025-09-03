function toggleFiltro() {
    const overlay = document.getElementById("filtro");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
    let lightswitch = document.getElementById("lightswitch");
    let state = lightswitch.getAttribute("src");
    const texto = document.querySelector("#filtroButton span");
    if(state === "img/lightoff.png"){
    lightswitch.setAttribute("src","img/lighton.png");
    lightswitch.setAttribute("class","on");
    texto.innerHTML = "Lights ON";
    }else{
    lightswitch.setAttribute("src","img/lightoff.png");
    lightswitch.removeAttribute("class")
    texto.innerHTML = "Lights OFF";
    }
}