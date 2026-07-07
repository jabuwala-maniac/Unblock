// Go to Page 2
function nextPage() {
    window.location.href = "page2.html";
}

// Runaway "Nope" button
function moveButton() {

    const btn = document.getElementById("noBtn");

    if (!btn) return;

    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = "fixed";
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

// Pressing ESC teleports the button too 😂
document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){
        moveButton();
    }

});

// Tiny greeting in the browser console 😆
console.log("Dear FATTUMI...");
console.log("If you're reading this...");
console.log("Please consider unblocking this poor fellow 😂❤️");
