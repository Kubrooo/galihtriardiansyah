const card = document.querySelectorAll('.card')
card.forEach(n => {
    n.addEventListener('click', function(){
        this.classList.toggle('active');
    });
})