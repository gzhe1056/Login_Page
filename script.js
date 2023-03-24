const wrapper = document.querySelector('.wrapper');
const signinLink = document.querySelector('.signinLink');
const registerLink = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.iconClose');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

signinLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
