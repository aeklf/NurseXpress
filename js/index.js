// Constants for login, user, nurse forms
const userForm = document.querySelector("form.user-form");
const nurseForm = document.querySelector("form.nurse-form");
const userBtn = document.querySelector("label.user");
const nurseBtn = document.querySelector("label.nurse");
const popBtn = document.getElementById("popup-login");
const loginPop = document.getElementById("popup-form");

//Event listeners login, forms
popBtn.addEventListener('click', openForm);
nurseBtn.addEventListener('click', showNurse);
userBtn.addEventListener('click', showUser);

// Show log-in pop-up
function openForm () {
    console.log(getComputedStyle(loginPop).getPropertyValue('display'));
    if (getComputedStyle(loginPop).getPropertyValue('display') === "none") {
        loginPop.style.display = "block";
    } else {
        loginPop.style.display = "none";
    }
    console.log(loginPop.style.display);
}

// Change between forms
function showNurse (params) {
    userForm.style.display = "none";
    nurseForm.style.display = "block";
}

function showUser (params) {
    userForm.style.display = "block";
    nurseForm.style.display = "none";
}






