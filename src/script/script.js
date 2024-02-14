const icon = document.querySelector('.icon');
icon.style.display = 'none';

// const slides = document.querySelectorAll('.item');
//
// if (slides.length > 1) {
//   icon.style.display = 'block';
// }else{
//     icon.style.display = 'none';
// }

let darkMode = () => {
    /*Memberi warna pada body di html dengan membuat page dark mode */
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}