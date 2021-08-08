// Display modal window
var modal = document.getElementsByClassName("modal-click");
var link = document.getElementsByClassName("modal-link");
var span = document.getElementsByClassName("close");
var scrolling = document.getElementById("scrolling");

link[0].onclick = function() {
    modal[0].style.display = 'block';
    link[0].style.color = 'rgba(255,255,255,0)';
    
    // Add class that removes the ability for the body to scroll when modal window is open
    scrolling.classList.add('model-opened');
}

span[0].onclick = function() {
    modal[0].style.display = 'none';
    link[0].style.color = null;
    scrolling.classList.remove('model-opened');
}

window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = 'none';
        link[0].style.color = null;
        scrolling.classList.remove('model-opened');
    }
}