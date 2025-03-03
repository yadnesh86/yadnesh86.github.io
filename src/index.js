////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Header Section 
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const closeBtn = document.querySelector(".close-btn");
        const nav = document.querySelector("nav");
        const navLinks = document.querySelectorAll("nav ul li a");

        // Open the navigation menu
        hamburger.addEventListener("click", () => {
            nav.classList.add("open");
        });

        // Close the navigation menu
        closeBtn.addEventListener("click", () => {
            nav.classList.remove("open");
        });

        // Close the navigation menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
            });
        });
    });









////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Gallery Section 

const galleryImages = document.querySelectorAll('.gallery-grid img');

// Create a lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
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
document.body.appendChild(lightbox);

// Create an image element for the lightbox
const lightboxImg = document.createElement('img');
lightboxImg.style.maxWidth = '90%';
lightboxImg.style.maxHeight = '90%';
lightbox.appendChild(lightboxImg);

// Create a cancel button
const cancelButton = document.createElement('span');
cancelButton.innerHTML = '&times;';
cancelButton.style.position = 'absolute';
cancelButton.style.top = '20px';
cancelButton.style.right = '30px';
cancelButton.style.fontSize = '2em';
cancelButton.style.color = 'white';
cancelButton.style.cursor = 'pointer';
cancelButton.style.display = 'none'; // Initially hidden
lightbox.appendChild(cancelButton);

// Function to open the lightbox
function openLightbox(img) {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
    cancelButton.style.display = 'block'; // Show cancel button
}

// Function to close the lightbox
function closeLightbox(event) {
    if (!event || event.target === lightbox || event.target === cancelButton) {
        lightbox.style.display = 'none';
        cancelButton.style.display = 'none'; // Hide cancel button
    }
}

// Add event listeners to images
galleryImages.forEach(image => {
    image.addEventListener('click', () => openLightbox(image));
});

// Add event listeners for closing the lightbox
lightbox.addEventListener('click', closeLightbox);
cancelButton.addEventListener('click', closeLightbox);


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-grid img');
    const baseDelay = 6; // seconds per image slot in the 36s cycle
    
    images.forEach((img, index) => {
      img.style.animationDelay = `${index * baseDelay}s`;
    });
  });



// small screen
// document.addEventListener("DOMContentLoaded", () => {
//     const gallery = document.querySelector(".gallery-grid");
//     let scrollAmount = 0;
  
//     function autoScroll() {
//       if (gallery) {
//         scrollAmount += 1; // Pixels to scroll per frame
//         gallery.scrollLeft = scrollAmount;
  
//         // Reset scroll position if at the end
//         if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
//           scrollAmount = 0;
//         }
  
//         requestAnimationFrame(autoScroll); // Create smooth continuous scroll
//       }
//     }
  
//     autoScroll();
//   });




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server Section 
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:5000/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
});