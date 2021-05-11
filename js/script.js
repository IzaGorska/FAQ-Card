
const btns = document.querySelectorAll('i');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        const paragraph = e.target.closest('.question').querySelector('p');
        const h4 = e.target.closest('.question').querySelector('h4')

        h4.classList.toggle('bold');
        paragraph.classList.toggle('invisible');

        e.target.classList.toggle('fa-chevron-down');
        e.target.classList.toggle('fa-chevron-up');


    })
})
