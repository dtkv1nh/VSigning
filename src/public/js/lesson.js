 //DOM Elements
 const circles = document.querySelectorAll(".circle"),
 progressBar = document.querySelector(".indicator"),
 buttons = document.querySelectorAll("button");

let currentStep = 0;

// function that updates the current step and updates the DOM
const updateSteps = (e) => {
 ++currentStep;
 circles.forEach((circle, index) => {
   circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
 });
 progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
 if (currentStep === 6) {
    window.location.href = "section_1.html";
  }
  
};
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


function createPopup(id){
    let Node = document.querySelector(id);
    function openPopup(){
        Node.classList.add("instruct");
    }
    function closePopup(){
        Node.classList.remove("instruct");
    }
    Node.querySelector(".overlay").addEventListener("click", closePopup);
    Node.querySelector('.close-btn').addEventListener("click", closePopup);
    document.querySelector("#cls-ac").addEventListener("click",closePopup);
    document.querySelector("#cls-er").addEventListener("click",closePopup);
    return openPopup;
}
document.querySelector("#open-popup-1").addEventListener("click",createPopup("#popup-1"));
document.querySelector("#open-popup-2").addEventListener("click",createPopup("#popup-2"));
document.querySelector("#open-popup-3").addEventListener("click",createPopup("#popup-3"));
document.querySelector("#open-popup-4").addEventListener("click",createPopup("#popup-4"));
document.querySelector("#open-popup-5").addEventListener("click",createPopup("#popup-5"));
document.querySelector("#open-popup-6").addEventListener("click",createPopup("#popup-6"));

function createVideo(id){
    let Node = document.querySelector(id);
    function openPopup(){
        Node.classList.add("watch");
        document.getElementById('title').innerHTML = 'Video Thực Hành';
    }
    function closePopup(){
        Node.classList.remove("watch");
        Node.classList.remove("instruction");
        document.getElementById('title').innerHTML = 'Hướng Dẫn';
    }
    Node.querySelector(".overlay").addEventListener("click", closePopup);
    Node.querySelector('.close-btn').addEventListener("click", closePopup);
    document.querySelector("#cls-ac").addEventListener("click",closePopup);
    document.querySelector("#cls-er").addEventListener("click",closePopup);
    return openPopup;
}
document.querySelector("#open-video-1").addEventListener("click",createVideo("#popup-1"));
document.querySelector("#open-video-2").addEventListener("click",createVideo("#popup-2"));
document.querySelector("#open-video-3").addEventListener("click",createVideo("#popup-3"));
document.querySelector("#open-video-4").addEventListener("click",createVideo("#popup-4"));
document.querySelector("#open-video-5").addEventListener("click",createVideo("#popup-5"));
document.querySelector("#open-video-6").addEventListener("click",createVideo("#popup-6"));

function createWebcam(id){
    let Node = document.querySelector(id);
    function openPopup(){
        Node.classList.remove("watch");
        Node.classList.add("webcam");
        document.getElementById('title').innerHTML = 'Webcam';
        document.querySelector(".web").classList.add("active");
    }
    function closePopup(){
        Node.classList.remove("webcam");
        Node.classList.remove("instruction");
        document.getElementById('title').innerHTML = 'Hướng Dẫn';
        document.querySelector(".web").classList.remove("active");
    }
    Node.querySelector(".overlay").addEventListener("click", closePopup);
    Node.querySelector('.close-btn').addEventListener("click", closePopup);
    document.querySelector("#cls-ac").addEventListener("click",closePopup);
    document.querySelector("#cls-er").addEventListener("click",closePopup);
    return openPopup;
}
document.querySelector("#open-webcam-1").addEventListener("click",createWebcam("#popup-1"));
document.querySelector("#open-webcam-2").addEventListener("click",createWebcam("#popup-2"));
document.querySelector("#open-webcam-3").addEventListener("click",createWebcam("#popup-3"));
document.querySelector("#open-webcam-4").addEventListener("click",createWebcam("#popup-4"));
document.querySelector("#open-webcam-5").addEventListener("click",createWebcam("#popup-5"));
document.querySelector("#open-webcam-6").addEventListener("click",createWebcam("#popup-6"));


let webcamStream = null;
const videoElement = document.getElementById('webcam');

async function enableCam() {
    try {
        if (webcamStream) {
            webcamStream.getTracks().forEach(track => track.stop());
            webcamStream = null;
        } else {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
            webcamStream = stream;
        }
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}
document.querySelector("#enable-1").addEventListener("click",enableCam);
document.querySelector("#enable-2").addEventListener("click",enableCam);
document.querySelector("#enable-3").addEventListener("click",enableCam);
document.querySelector("#enable-4").addEventListener("click",enableCam);
document.querySelector("#enable-5").addEventListener("click",enableCam);
document.querySelector("#enable-6").addEventListener("click",enableCam);

let pop_1 = document.querySelector(".accept")
let pop_2 = document.querySelector(".error")
document.querySelector("#cls-ac").addEventListener("click",closeAccept);
document.querySelector("#cls-er").addEventListener("click",closeError);
document.body.addEventListener("keydown", function(event) {
    if (event.keyCode === 65) {
        openAccept();
        updateSteps();
        enableCam();
    } else if(event.keyCode === 69){
        openError();
        enableCam();
    }
});
function openAccept(){
    pop_1.classList.add("active");
}
function closeAccept(){
    pop_1.classList.remove("active");
}
function openError(){
    pop_2.classList.add("active");
}
function closeError(){
    pop_2.classList.remove("active");
}