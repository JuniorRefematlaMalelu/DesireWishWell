

function goToPage2() {
    const nameInput = document.getElementById("hisName");
    const greeting = document.getElementById("greeting");
    const name = nameInput.value.trim();

    if (name === "") {
        greeting.textContent = "Enter your name first, handsome! 💗🥹";
        nameInput.focus();
        return;
    }

    sessionStorage.setItem("bestieName", name);

    window.location.href = "page2.html";
}

function getBestieName() {
    return sessionStorage.getItem("bestieName") || "handsome";
}

