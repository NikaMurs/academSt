const facultyTechButtonsWrapper = document.querySelector('.facultyTechButtonsWrapper');
const facultyTechButtons = document.querySelectorAll('.facultyCenter .rectangleHref');


for (let i = 0; i < facultyTechButtons.length; i++){
    facultyTechButtons[i].addEventListener('click', ()=>{
        facultyTechButtonsWrapper.classList.remove('hide')
    })
}

facultyTechButtonsWrapper.addEventListener('click', ()=>{
    facultyTechButtonsWrapper.classList.add('hide')
})