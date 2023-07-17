const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.but');
for (let i = 0; i < openModal.length; i++)
{
    //Working With Classes
    openModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');   
        overlay.classList.remove('hidden');
    })
    
}
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');  
    overlay.classList.add('hidden');
})
document.addEventListener('keydown', function (e) {
    if(e.key==='Escape' && !modal.classList.contains('hidden'))
    {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
})
