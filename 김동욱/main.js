const moreBtin = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtin.addEventListener('click', () => {
    moreBtin.classList.toggle('clicked');
    title.classList.toggle('clamp');
});