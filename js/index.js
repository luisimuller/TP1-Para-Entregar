// Efecto para mantener visible la tarjeta de Karta mientras el mouse esté sobre la zona de tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelector('.team-cards');
    const group1Card = document.querySelector('.group1-card');
    const group1Front = group1Card?.querySelector('.group1-front');
    const kartaCard = group1Card?.querySelector('.karta-card');
    let kartaVisible = false;
    if (group1Card && group1Front && kartaCard && teamCards) {
        group1Front.style.opacity = 1;
        kartaCard.style.opacity = 0;
        kartaCard.style.pointerEvents = 'none';

        group1Card.addEventListener('mouseenter', () => {
            group1Front.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1)';
            kartaCard.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1)';
            group1Front.style.opacity = 0;
            group1Front.style.pointerEvents = 'none';
            kartaCard.style.opacity = 1;
            kartaCard.style.pointerEvents = 'auto';
            kartaVisible = true;
        });
        teamCards.addEventListener('mouseleave', () => {
            group1Front.style.opacity = 1;
            group1Front.style.pointerEvents = 'auto';
            kartaCard.style.opacity = 0;
            kartaCard.style.pointerEvents = 'none';
            kartaVisible = false;
        });
    }
});
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