const emailInput = document.getElementById("email");
const fullnameInput = document.getElementById("fullname");
const passwordInput = document.getElementById("password");
const checkInput = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", sendFormAccount);


/* la función solo envía los datos a la consola 
 puesto que no hay un backend implementado */
function sendFormAccount(event) {
    event.preventDefault();

    let name = fullnameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    
    let formcheck = checkForm(name, email, password);

    if(formcheck){
        let user = {
            fullName: name,
            emailAddress: email,
            passWord: password
        }

        console.log(user);
        const content = JSON.stringify(user);
        console.log(content);
        cleanInputs();
    }else{
        return;
    }
}


function checkForm(name, email, password) {

    const pattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/g;

    if (!name || (!email || !pattern.test(email)) || 
        (!password || password.length < 8) || 
        (!checkInput.checked)) {

        return false;
    }

    return true;
}


function cleanInputs() {
    emailInput.value = "";
    fullnameInput.value = "";
    passwordInput.value = "";
    checkInput.checked = false;
}