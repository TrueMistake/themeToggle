const main = document.querySelector('.main');
const input = document.querySelector('.checkbox-input');
const day = document.querySelector('.checkbox-day');
const nigth = document.querySelector('.checkbox-night');

input.addEventListener('change', () => {
    main.classList.toggle('dark');
    day.classList.toggle('none');
    nigth.classList.toggle('none');
});
