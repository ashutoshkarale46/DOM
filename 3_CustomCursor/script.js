var main  = document.querySelector('#main')
var curse = document.querySelector('.cursor')

main.addEventListener("mousemove", function(dets){
    curse.style.left = dets.x+'px'
    curse.style.top = dets.y+'px'
})