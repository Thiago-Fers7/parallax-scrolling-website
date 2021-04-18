const AnimationElements = {
    stars: document.getElementById('stars'),
    moon: document.getElementById('moon'),
    mountains_behind: document.getElementById('mountains_behind'),
    text: document.getElementById('text'),
    btn: document.getElementById('btn'),
    mountains_front: document.getElementById('mountains_front'),
    header: document.getElementById('header'),

    moveElements() {
        let value = window.scrollY
        
        this.stars.style.left = `${value * 0.25}px`
        
        if (value < 500) {
            this.moon.style.top = `${value * 1.05}px`
        }

        this.mountains_behind.style.top = `${value * -0.05}px`

        this.text.style.marginRight = `${value * 4}px`
        this.text.style.marginTop = `${value * 1.5}px`
        
        this.btn.style.marginTop = `${value * 1.5}px`
        
        this.header.style.top = `${value * 0.5}px`
    }
}

window.addEventListener('scroll', AnimationElements.moveElements)