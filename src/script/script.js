const icon = document.querySelector('.icon');
const kegiatanElement = document.getElementById('kegiatan-id');
const keseruanElement = document.getElementById('keseruan-id');
const sejarahElement = document.getElementById('sejarah-id');

// icon.style.display = 'none';

let darkMode = () => {
    /*Memberi warna pada body di html dengan membuat page dark mode */
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

let kegiatanEventHandler = () => {
    kegiatanElement.addEventListener('click', () => {
            kegiatanElement.style.backgroundColor = 'red';
        }
    );
}

let keseruanEventHandler = () => {
    keseruanElement.addEventListener('click', () => {
            keseruanElement.style.backgroundColor = 'green';
        }
    );
}

let sejarahEventHandler = () => {
    sejarahElement.addEventListener('click', () => {
            sejarahElement.style.backgroundColor = 'cyan';
        }
    );
}

