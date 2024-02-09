let state = false;
let passwordInput = document.getElementById("password");
let eyeIcon = document.getElementById("eye");

function eyeToggle() {
    if (state) {
        passwordInput.setAttribute("type", "password");
        eyeIcon.setAttribute("class", "fa fa-eye")
        state = false;
    } else {
        passwordInput.setAttribute("type", "text");
        eyeIcon.setAttribute("class", "fa fa-eye-slash")
        state = true;
    }
}

// Event listener to show eye icon when password input is focused or clicked
// passwordInput.addEventListener("click", function () {
//     eyeIcon.classList.toggle('eye-icon-show');
// });
