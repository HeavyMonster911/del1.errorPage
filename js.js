var content = document.getElementById("content");
window.onmousemove = function(e) {
    var x = - e.clientX/5,
        y = - e.clientY/5;
    content.style.backgroundPositionX = x + 'px'
    content.style.backgroundPositionY = y + 'px'
}