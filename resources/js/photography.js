var imgArray = [
    'resources/images/February2021-173.jpg',
    'resources/images/February2021-174.jpg',
    '/resources/images/February2021-170.jpg',
    'resources/images/January2021-28.jpg',
    'resources/images/March2021-181.jpg',
    'resources/images/January2021-220.jpg',
    'resources/images/February2021-196.jpg',
    'resources/images/June2021-35.jpg',
    'resources/images/Mayl2021-105.jpg',
    'resources/images/November2020-38.jpg',
    'resources/images/April2021-191.jpg'
];

var img = document.createElement('img');
img.style.height = '25%';
img.style.width = '60%';
document.getElementById('slideshow').appendChild(img);

var imageCounter = 0;
function changePicture() {
    img.src = imgArray[imageCounter];
    imageCounter++;
    if(imageCounter == imgArray.length) {
        imageCounter = 0;    
    }
    
    setTimeout("changePicture()", 3000);
}