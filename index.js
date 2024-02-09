// eye Toggle
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


// Generate & save Password
let passwordLength = document.getElementById('passwordLength')
let password = document.getElementById('password')
let saveButton = document.getElementById('saveButton')

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlhpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "0123456789"
    const simbol = "!@#$%^&*()_+{}|:'`,./\[];~?><"

    const data = lowerAlphabet + upperAlhpabet + number + simbol
    let generator = '';
    for(let index = 0; index < len; index++){
        generator += data[~~(Math.random() * data.length)]
    }
    return generator;
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    setTimeout(() => {
        alert('password has been generated')
        password.value = newPassword
    }, 500);
}

const savePassword = () => {
    const passwordValue = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${passwordValue}`))
    saveButton.setAttribute('download', `${document.title}.txt`)
}