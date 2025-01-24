
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Gallery Section 

// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery-grid img');

// Create a lightbox element
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Add CSS styles for the lightbox
lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
lightbox.style.display = 'none';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';

// Add click event to images to open the lightbox
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        const img = document.createElement('img');
        img.src = image.src;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        lightbox.innerHTML = ''; // Clear previous content
        lightbox.appendChild(img);
    });
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return; // Ensure only clicking on the background closes it
    lightbox.style.display = 'none';
});
