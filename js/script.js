const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(numberValue === '') {
        setError(number, 'Phone Number is required');
    } else if (numberValue.length < 10 ) {
        setError(number, 'Number must be at least 10 character.')
    } else {
        setSuccess(number);
    }

    if(messageValue === '') {
        setError(message, 'Message is required');
    } else {
        setSuccess(message);
    }

};

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 3000)
function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = imgList.length }
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}