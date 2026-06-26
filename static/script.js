// ===========================
// SELECT ELEMENTS
// ===========================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const checkBtn = document.getElementById("checkBtn");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const generatedPassword = document.getElementById("generatedPassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// Requirement List
const lengthReq = document.getElementById("length");
const upperReq = document.getElementById("uppercase");
const lowerReq = document.getElementById("lowercase");
const numberReq = document.getElementById("number");
const specialReq = document.getElementById("special");

// ===========================
// SHOW / HIDE PASSWORD
// ===========================

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.innerHTML = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.innerHTML = "👁";

    }

});

// ===========================
// CHECK PASSWORD
// ===========================

checkBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("input", checkPassword);

function checkPassword() {

    let password = passwordInput.value;

    let score = 0;

    // Length
    if (password.length >= 8) {

        score++;
        lengthReq.innerHTML = "✅ Minimum 8 Characters";

    } else {

        lengthReq.innerHTML = "❌ Minimum 8 Characters";

    }

    // Uppercase
    if (/[A-Z]/.test(password)) {

        score++;
        upperReq.innerHTML = "✅ One Uppercase Letter";

    } else {

        upperReq.innerHTML = "❌ One Uppercase Letter";

    }

    // Lowercase
    if (/[a-z]/.test(password)) {

        score++;
        lowerReq.innerHTML = "✅ One Lowercase Letter";

    } else {

        lowerReq.innerHTML = "❌ One Lowercase Letter";

    }

    // Number
    if (/[0-9]/.test(password)) {

        score++;
        numberReq.innerHTML = "✅ One Number";

    } else {

        numberReq.innerHTML = "❌ One Number";

    }

    // Special Character
    if (/[^A-Za-z0-9]/.test(password)) {

        score++;
        specialReq.innerHTML = "✅ One Special Character";

    } else {

        specialReq.innerHTML = "❌ One Special Character";

    }

    // Strength

    switch(score){

        case 0:
        case 1:
            strengthBar.style.width="20%";
            strengthBar.style.background="#ef4444";
            strengthText.innerHTML="🔴 Weak";
            break;

        case 2:
            strengthBar.style.width="40%";
            strengthBar.style.background="#f97316";
            strengthText.innerHTML="🟠 Fair";
            break;

        case 3:
            strengthBar.style.width="60%";
            strengthBar.style.background="#eab308";
            strengthText.innerHTML="🟡 Good";
            break;

        case 4:
            strengthBar.style.width="80%";
            strengthBar.style.background="#22c55e";
            strengthText.innerHTML="🟢 Strong";
            break;

        case 5:
            strengthBar.style.width="100%";
            strengthBar.style.background="#15803d";
            strengthText.innerHTML="🟢 Very Strong";
            break;

    }

}

// ===========================
// GENERATE PASSWORD
// ===========================

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){

    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const special="!@#$%^&*()_+{}[]<>?/";

    const all = upper + lower + numbers + special;

    let password="";

    password += upper[Math.floor(Math.random()*upper.length)];
    password += lower[Math.floor(Math.random()*lower.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += special[Math.floor(Math.random()*special.length)];

    for(let i=4;i<14;i++){

        password += all[Math.floor(Math.random()*all.length)];

    }

    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    generatedPassword.value = password;

}

// ===========================
// COPY PASSWORD
// ===========================

copyBtn.addEventListener("click", ()=>{

    if(generatedPassword.value===""){

        alert("Generate a password first!");

        return;

    }

    navigator.clipboard.writeText(generatedPassword.value);

    copyBtn.innerHTML="Copied ✅";

    setTimeout(()=>{

        copyBtn.innerHTML="Copy Password";

    },1500);

});