const container = document.querySelector('.container')
const heart = document.querySelector('.container i')

container.addEventListener('dblclick', () => {
    heart.style.transform = 'translate(-50%,-50%) scale(1)'
    heart.style.opacity = '0.8'

    setTimeout(function(){
        heart.style.transform = 'translate(-50%,-50%) scale(0)'
        heart.style.opacity = '0'
    },600)
})