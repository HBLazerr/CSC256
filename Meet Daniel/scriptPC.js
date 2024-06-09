// PC Page
// Runs on page load
document.addEventListener('DOMContentLoaded', initLinks);

// Array of images
var images = [
    './media/PCs/MarioPC.JPG',
    './media/PCs/PhantomV2PC.JPG',
    './media/PCs/LarryPC.JPG',
    './media/PCs/ElvisPC.JPG',
    './media/PCs/PhantomV1PC.JPG',
    './media/PCs/CrisPC.JPG',
    './media/PCs/AlexPC.JPG',
    './media/PCs/AlejandroPC.JPG',
    './media/PCs/LuisPC.JPG',
];

// Current image
var currentImage = 0;

// Sets up event listeners for nav links
function initLinks() {
    // Add event listeners to prev and next 'a' links to call processPrev and processNext when clicked
    document.getElementById('prev').addEventListener('click', processPrev);
    document.getElementById('next').addEventListener('click', processNext);
}

// Handles prev and next links click events
function processPrev(event) {
    // prevent default action(#) of link
    event.preventDefault();

    if (currentImage == 0) {
        // logs if previous link is clicked on first image 
        console.log('first image');
    }
    else {
        currentImage--;
    }

    // Update image
    document.getElementById('image').src = images[currentImage];
}

function processNext(event) {
    // prevent default action(#) of link
    event.preventDefault();

    if (currentImage == images.length - 1) {
        // logs if next link is clicked on last image
        console.log('last image');
    } else {
        currentImage++;
    }

    // Update image
    document.getElementById('image').src = images[currentImage];
}