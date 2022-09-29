function buttonLogout() {
    const btnLogout = document.querySelector(".button__nav__logout");

    btnLogout.addEventListener("click", () => {
        window.location.assign("../../index.html");
    });
}
buttonLogout()

