// Constant variables for login, user, nurse forms
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
function showNurse (_params) {
    userForm.style.display = "none";
    nurseForm.style.display = "block";
}

function showUser (_params) {
    userForm.style.display = "block";
    nurseForm.style.display = "none";
}


// Password verification

    // Let variables for password verification
let userPwd = document.querySelector('#user-password');
let userVerify = document.querySelector('#user-verify');
let userMessage = document.querySelector('#user-message');
let nursePwd = document.querySelector('#nurse-password');
let nurseVerify = document.querySelector('#nurse-verify');
let nurseMessage = document.querySelector('#nurse-message');

var verify = function () {
    if (userPwd.value ===
        userVerify.value) {
        userMessage.style.color = 'green';
        userMessage.innerHTML = 'Password matches';
    } else {
        userMessage.style.color = 'red';
        userMessage.innerHTML = 'Password is not the same';
    }

    if (nursePwd.value ===
        nurseVerify.value) {
        nurseMessage.style.color = 'green';
        nurseMessage.innerHTML = 'Password matches';
    } else {
        nurseMessage.style.color = 'red';
        nurseMessage.innerHTML = 'Password is not the same';
    }
}

// Show/hide input password
const showUserPwd = document.querySelector('#show-user-password');
const showNursePwd = document.querySelector('#show-nurse-password');
const password = document.querySelector('#id_password');

showUserPwd.addEventListener('click', function (_e) {
    
    const type = userPwd.getAttribute('type') === 'password' ? 'text' : 'password';
    userPwd.setAttribute('type', type);
    
    this.classList.toggle('fa-eye-slash');
});

showNursePwd.addEventListener('click', function (_f) {

    const type = nursePwd.getAttribute('type') === 'password' ? 'text' : 'password';
    nursePwd.setAttribute('type', type);
    
    this.classList.toggle('fa-eye-slash');
});



