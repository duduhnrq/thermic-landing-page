window.addEventListener('scroll', function () {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 0) {
    navbar.classList.add('shadow');
} else {
    navbar.classList.remove('shadow');
}
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})