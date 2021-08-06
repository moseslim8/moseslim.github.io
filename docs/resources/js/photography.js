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

link[1].onclick = function() {
    modal[1].style.display = 'block';
    link[1].style.color = 'rgba(255,255,255,0)';
    
    // Add class that removes the ability for the body to scroll when modal window is open
    scrolling.classList.add('model-opened');
}

span[0].onclick = function() {
    modal[0].style.display = 'none';
    link[0].style.color = null;
    scrolling.classList.remove('model-opened');
}

span[1].onclick = function() {
    modal[1].style.display = 'none';
    link[1].style.color = null;
    scrolling.classList.remove('model-opened');
}

window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = 'none';
        link[0].style.color = null;
        scrolling.classList.remove('model-opened');
    }
    
    if (event.target == modal[1]) {
        modal[1].style.display = 'none';
        link[1].style.color = null;
        scrolling.classList.remove('model-opened');
    }
}

var imgArray = [
    'resources/images/February2021-173.jpg',
    'resources/images/February2021-174.jpg',
    'resources/images/February2021-170.jpg',
    'resources/images/January2021-220.jpg',
    'resources/images/July2021-31.jpg',
    'resources/images/July2021-35.jpg',
    'resources/images/February2021-196.jpg',
    'resources/images/July2021-34.jpg',
    'resources/images/June2021-35.jpg',
    'resources/images/Mayl2021-105.jpg',
    'resources/images/November2020-38.jpg',
    'resources/images/April2021-191.jpg'
];

// Creates an img tag for picture slideshow
var img = document.createElement('img');
img.style.width = '72%';
img.style.display = 'block';
img.style.margin = '0 auto';
document.getElementById('slideshow').appendChild(img);

// Iterates through the array to display the images
var imageCounter = 0;
function changePicture() {
    img.src = imgArray[imageCounter];
    imageCounter++;
    if(imageCounter == imgArray.length) {
        imageCounter = 0;    
    }
    
    setTimeout("changePicture()", 3000);
}
