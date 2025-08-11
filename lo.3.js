const loginForm = document.queryselector(".login-form");
const registerForm = document.queryselector(".register-Form");
const wrapper = document.queryselector(".wrapper");
const LoginTitle = document.queryselector(".title-Login");
const RegisterTitle = document.queryselector(".title-register");
const SignUpBtn = document.queryselector("#SignUpbtn");
const SignInBtn = document.queryselector("#SignInbtn");


function loginFunction(){
    loginForm.style.left="50%";
    loginForm.style.opacity=1;
    registerForm.style.left="150%";
    registerForm.style.opacity=0;
    wrapper.style.height="500px";
    LoginTitle.style.top="50%";
    LoginTitle.style.opacity=1;
    registerTitle.style.top="50px";
    registerTitle.style.opacity=0;
}

function registerFunction(){
    loginForm.style.left="-50%";
    loginForm.style.opacity=0;
    registerForm.style.left="50%";
    registerForm.style.opacity=1;
    wrapper.style.height="580px";
    LoginTitle.style.top="-60px";
    LoginTitle.style.opacity=0;
    registerTitle.style.top="50%";
    registerTitle.style.opacity=1;
}