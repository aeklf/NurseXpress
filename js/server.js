const userForm = document.querySelector("form.user-form");
const nurseForm = document.querySelector("form.nurse-form");
const userBtn = document.querySelector("label.user");
const nurseBtn = document.querySelector("label.nurse");


nurseBtn.onclick = ( () =>{
    userForm.style.marginLeft = "-50%";
});
userBtn.onclick = (() => {
    userForm.style.marginLeft = "0%";
});



function openForm() {
    const loginPop = document.getElementById("popup-form");
    if (loginPop.style.display === "none") {
        loginPop.style.display = "block";
    } else {
    loginPop.style.display = "none";
    }
}

