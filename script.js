function SlidePlugin(active_slide = 0){
    const slides = document.querySelectorAll('.slide')

    slides[active_slide].classList.add('active')

    for (const slide of slides) {
    slide.addEventListener('click', () => {
        ClearActive()

        slide.classList.add('active')

        
    })
    }

    function ClearActive(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    }
}

SlidePlugin(1)