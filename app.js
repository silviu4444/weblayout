const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const button = document.querySelector('#button');
const errorMessagePw = document.createElement('div');
const errorMessageCheckPw = document.createElement('div');
const parentNode = password.parentNode;

const checkPassword = () => {
    let inputPaswordValue = password.value;
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    parentNode.insertBefore(errorMessagePw, confirmPassword);

    const clearCheckPassword = () => {
        if(inputPaswordValue === "" && confirmPassword.previousElementSibling === errorMessagePw) {
            parentNode.removeChild(errorMessagePw);
        }
    };

    if(inputPaswordValue === '' && confirmPassword.previousElementSibling === errorMessagePw) {
        parentNode.removeChild(errorMessagePw);
    } else if(!inputPaswordValue.match(passw)) {
        errorMessagePw.innerHTML = `
        <b>At least:</b>
        <li>1 uppercase letter</li>
        <li>1 lowercase letter</li>
        <li>1 number</li>`;
        errorMessagePw.setAttribute('class', 'unvalid-password')
        parentNode.insertBefore(errorMessagePw, confirmPassword);
        checkConfPassword();
    } else if(inputPaswordValue.match(passw)) {
        errorMessagePw.textContent = "Valid Password";
        errorMessagePw.setAttribute('class', 'valid-password');
        parentNode.insertBefore(errorMessagePw, confirmPassword);
        checkConfPassword();
    } 
    clearCheckPassword();
};

const passwordBlurEvent = () => {
    if(password.value === "" && confirmPassword.previousElementSibling === errorMessagePw) {
        parentNode.removeChild(errorMessagePw);
    } else if(password.value !== "" && confirmPassword.previousElementSibling === errorMessagePw) {
        parentNode.removeChild(errorMessagePw);
    }
};

const passwordFocusEvent = () => {
    let inputPaswordValue = password.value;
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

    if(!inputPaswordValue.match(passw)) {
        errorMessagePw.innerHTML = `
        <b>At least:</b>
        <li>1 uppercase letter</li>
        <li>1 lowercase letter</li>
        <li>1 number</li>`;
        errorMessagePw.setAttribute('class', 'unvalid-password')
    }

    parentNode.insertBefore(errorMessagePw, confirmPassword);
};

const checkConfPassword = () => {
    let inputPaswordValue = password.value;
    let inputConfrimPasswordValue = confirmPassword.value;
    parentNode.insertBefore(errorMessageCheckPw, button);

    const clearCheckPassword = () => {

        if(inputConfrimPasswordValue === "") {
            parentNode.removeChild(errorMessageCheckPw);
        }
    };

    if(inputPaswordValue !== inputConfrimPasswordValue) {
        errorMessageCheckPw.textContent = 'Passwords Do Not Matches!';
        errorMessageCheckPw.setAttribute('class', 'unvalid-password');
        parentNode.insertBefore(errorMessageCheckPw, button);
        button.disabled = true;
    } else if(inputPaswordValue === inputConfrimPasswordValue) {
        errorMessageCheckPw.textContent = 'Passwords Matches!';
        errorMessageCheckPw.setAttribute('class', 'valid-password');
        parentNode.insertBefore(errorMessageCheckPw, button);
        button.disabled = false;
    }

    clearCheckPassword();
};

const confirmPasswordBlurEvent = () => {
    if(confirmPassword === '' && button.previousElementSibling === errorMessageCheckPw) {
        parentNode.removeChild(errorMessageCheckPw);
    } else if(confirmPassword !== '' && button.previousElementSibling === errorMessageCheckPw) {
        parentNode.removeChild(errorMessageCheckPw);
    }
};

const confirmPasswordFocusEvent = () => {
    let inputPaswordValue = password.value;
    let inputConfrimPasswordValue = confirmPassword.value;
    parentNode.insertBefore(errorMessageCheckPw, button);

    if(inputPaswordValue !== inputConfrimPasswordValue || inputPaswordValue === "") {
        errorMessageCheckPw.textContent = 'Passwords Do Not Matches!';
        errorMessageCheckPw.setAttribute('class', 'unvalid-password');
        parentNode.insertBefore(errorMessageCheckPw, button);
    }
};

password.addEventListener('keyup', checkPassword);
password.addEventListener('blur', passwordBlurEvent);
password.addEventListener('focus', passwordFocusEvent);

confirmPassword.addEventListener('keyup', checkConfPassword);
confirmPassword.addEventListener('blur', confirmPasswordBlurEvent);
confirmPassword.addEventListener('focus', confirmPasswordFocusEvent);
