// Function for dynamic display area
function displayType(type) {
    const displayArea = document.getElementById('displayArea');
    if (type === 'Text') {
        displayArea.innerHTML = '<p>Hello All.. This is Java Full Stack Class...!!!</p>';
    } else if (type === 'Image') {
        displayArea.innerHTML = '<img src="https://www.kluniversity.in/fphotos/actual/7633.jpg" alt="Demo Image" style="max-width:150px;">';
    } else if (type === 'Animation') {
        displayArea.innerHTML = '<div class="animated-box"></div>';
    }
}

// Increment Visitor Counter
const visitorCount = document.getElementById('visitorCount');
let count = 0;
if (visitorCount) {
    count++;
    visitorCount.textContent = count;
}

// Toggle Image Functionality
const toggleImageButton = document.getElementById('toggleImageButton');
const toggleImage = document.getElementById('toggleImage');

if (toggleImageButton && toggleImage) {
    const placeholder1 = "https://www.kluniversity.in/fphotos/actual/7633.jpg";
    const placeholder2 = "https://www.kluniversity.in/fphotos/actual/6655.jpg";

    toggleImageButton.addEventListener('click', () => {
        toggleImage.src = toggleImage.src === placeholder1 ? placeholder2 : placeholder1;
    });
}