var btn = document.querySelector("#status")
var addFriend = document.querySelector('h6')
var flag = 0

btn.addEventListener('click', () => {
    if(!flag){
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "#dadada"
        btn.style.color = "#000"
        addFriend.innerHTML = 'Friends'
        addFriend.style.color = 'green'
        flag = 1
    }
    else {
        btn.innerHTML = "Add Friends"
        btn.style.backgroundColor = "#1a6edb"
        btn.style.color = "#fff"
        addFriend.innerHTML = 'Stranger'
        addFriend.style.color = 'salmon'
        flag = 0
    }
})