let pop = document.querySelector(".modal")
document.body.addEventListener("keydown", function(event) {
    if (event.keyCode === 65) {
        openPopup();
    }   
});
function openPopup(){
    pop.classList.add("active");
}
function closePopup(){
    pop.classList.remove("active");
}
