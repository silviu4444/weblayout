const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const button = document.querySelector('#button');
const checkPw = document.querySelector('#checkPw');
const checkConfPw = document.querySelector('#checkConfPw');
const divPw = document.createElement('div');
const divCheckPw = document.createElement('div');



const checkPassword = () => {
    let inputValue = password.value;
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    checkPw.appendChild(divPw);
    const clearCheckPassword = () => {
        if(password.value === "") {
            checkPw.removeChild(divPw);
        }
    }

    if(inputValue === '') {
        checkPw.removeChild(divPw);
    }
    else if(!inputValue.match(passw)) {
        divPw.innerHTML = `<b>At least:</b>
        <li>1 uppercase letter</li>
        <li>1 lowercase letter</li>
        <li>1 number</li>`;
        divPw.setAttribute('class', 'unvalid-password')
        checkPw.appendChild(divPw);
    }
    else if(inputValue.match(passw)) {
        divPw.textContent = "Valid Password";
        divPw.setAttribute('class', 'valid-password')
        checkPw.appendChild(divPw);
    } 

    clearCheckPassword();
}

const checkConfPassword = () => {
    let inputPaswordValue = password.value;
    let inputConfrimPasswordValue = confirmPassword.value;
    checkConfPw.appendChild(divCheckPw);
    const clearCheckPassword = () => {
        if(confirmPassword.value === "") {
            checkConfPw.removeChild(divCheckPw);
        }
    }

    if(inputPaswordValue !== inputConfrimPasswordValue) {
        divCheckPw.textContent = 'Password Do Not Match!';
        divCheckPw.setAttribute('class', 'unvalid-password')
        checkConfPw.appendChild(divCheckPw);
    } 
    else if(inputPaswordValue === inputConfrimPasswordValue) {
        divCheckPw.textContent = 'Password Match!';
        divCheckPw.setAttribute('class', 'valid-password')
        checkConfPw.appendChild(divCheckPw);
    }
    else if(inputValue === '') {
        checkConfPw.removeChild(divCheckPw);
    }
    clearCheckPassword();
}

const buttonCheck = (event) => {

}

password.addEventListener('keyup', checkPassword)
password.addEventListener('blur', () => {
    if(password.value !== "") {
        checkPw.removeChild(divPw);
    }
})
password.addEventListener('focus', () => {
    checkPw.appendChild(divPw);
})
confirmPassword.addEventListener('keyup', checkConfPassword)
confirmPassword.addEventListener('blur', () => {
    checkConfPw.removeChild(divCheckPw);
})
confirmPassword.addEventListener('focus', () => {
    let inputPaswordValue = password.value;
    let inputConfrimPasswordValue = confirmPassword.value;
    checkConfPw.appendChild(divCheckPw);

    if(inputPaswordValue !== inputConfrimPasswordValue || inputPaswordValue === "") {
        divCheckPw.textContent = 'Password Do Not Match!';
        divCheckPw.setAttribute('class', 'unvalid-password')
        checkConfPw.appendChild(divCheckPw);
    } 
})

button.addEventListener('click', buttonCheck)
