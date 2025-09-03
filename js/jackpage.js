const modal  = document.getElementById("modal");
const cerrar  = document.getElementById("cerrar");
const ticket = document.getElementById("ticket");
const modalContent = document.getElementById("contentDiv");
const noBtn = document.querySelector(".noButton");
const yesBtn = document.querySelector(".yesButton");
let counter = 0; //contador de oles

const MODAL_MSG_1 = '<p style="color:black;">Entonces... me queres dar trabajo?</p>';
const MODAL_MSG_2 = '<p style="color:black;">Estas Seguro?</p>';
const MODAL_MSG_3 = '<p style="color:black;">Pensalo bien</p>';
const MODAL_MSG_4 = '<p style="color:black;">Pense que te caia bien</p>';
const MODAL_MSG_5 = '<p style="color:black;">Wow... se nota que es importante</p>';
const MODAL_MSG_6 = '<p style="color:black;">😡</p>';
const MODAL_MSG_SURRENDER = '<p style="color:black;">OK... me rindo</p>';

function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // bloquea scroll
    modalContent.innerHTML = MODAL_MSG_1;
}
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

//Yes button listener
yesBtn.addEventListener("mouseover",moveYesButton);

//open modal
ticket.addEventListener("click", openModal);
//close modal
noBtn.addEventListener("click", closeModal);
cerrar.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function moveYesButton(){
    switch(counter){
        case 0:
            moveYesBtnRandom();
            modalContent.innerHTML = MODAL_MSG_2;
            counter++;
            break;
        case 1:
            moveYesBtnRandom();
            modalContent.innerHTML = MODAL_MSG_3;
            counter++;
            break;
        case 2:
            moveYesBtnRandom();
            modalContent.innerHTML = MODAL_MSG_4;
            counter++;
            break;
        case 3:
            moveYesBtnRandom();
            modalContent.innerHTML = MODAL_MSG_5;
            counter++;
            break;
        case 4:
            moveYesBtnRandom();
            modalContent.innerHTML = MODAL_MSG_6;
            counter++;
            break;
        default:
            modalContent.innerHTML = MODAL_MSG_SURRENDER;
    }
}

function moveYesBtnRandom(){
    yesBtn.style.transform = `translateY(${randomInt(0, window.innerHeight/2)}px)`;
    yesBtn.style.transform += `translateX(${randomInt(0, window.innerWidth/2)}px)`;
}

function randomInt(min, max){
    min = Math.ceil(min); 
    max = Math.floor(max); 
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function openJira(){
    window.open("http://www.jira.com", "_blank");
    closeModal();
}