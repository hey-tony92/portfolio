document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector('.nav-links');

   hamburger.addEventListener('click', function() {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle('active');
   });
});

//form submission confirmation
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('form').addEventListener('submit', async function(e) {
        e.preventDefault();
    
        try {
            const response = await fetch('https://formspree.io/f/xqaqwqqr', {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if(response.ok) {
                this.reset(); //clears the form
    
                //show success message
                const formContainer = document.getElementById('form-container');
                formContainer.innerHTML = `
                    <div class="success-message">
                        <h2>Message Sent!</h2>
                        <p>Thank you! I'll get back to you shortly.</p>
                        <div class="button-container">
                        <button onclick="window.location.href='index.html'" class="home-button">
                        Back to Home
                        </button>
                        </div>
                    </div>`;
            }
        } catch (error) {
            console.error('Error', error);
            alert('Whoops! There was a problem submitting your message. Try again!');
        }
    });

});



//modal functionality



document.addEventListener("DOMContentLoaded", () => {
    const projectImages = document.querySelectorAll('.project-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxDescription = document.getElementById("lightboxDescription");
    const lightboxExtraImg = document.querySelector('.lightbox-extra-img');
    const lightboxExtraImg2 = document.querySelector('.lightbox-extra-img-2');

    projectImages.forEach((image) => {


        image.addEventListener('click', function() {
            lightbox.classList.remove('hidden');
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightboxExtraImg2.src = image.dataset.extra2 || '';
            lightboxTitle.textContent = image.dataset.title || '';
            lightboxDescription.textContent = image.dataset.description || '';

             if (image.dataset.extra) {
            lightboxExtraImg.src = image.dataset.extra;
            lightboxExtraImg.style.display = 'block';
        } else {
            lightboxExtraImg.style.display = 'none';
        }

        console.log("Extra 2 image set to:", image.dataset.extra2);
        if(image.dataset.extra2) {
            lightboxExtraImg2.src = image.dataset.extra2;
            lightboxExtraImg2.style.display = 'block';
        } else {
            lightboxExtraImg2.style.display = 'none';
            lightboxExtraImg2.src = '';
        }
    });

        
     
 

    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Close if you click outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
});




    // projectImages.forEach((image) => {
    //     image.addEventListener('click', () => {
    //         console.log(`Image clicked: ${image.src}`);
    //     });
    // })

});


//     const projectImages = document.querySelectorAll('.project-item img');
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.querySelector('.lightbox-img');
//     const closeBtn = document.querySelector('.lightbox-close');
//     const lightboxTitle = document.getElementById("lightboxTitle");
//     const lightboxDescription = document.getElementById("lightboxDescription");
//     const lightboxExtraImg = document.querySelector('.lightbox-extra-img');
//     const lightboxExtraImg2 = document.querySelector('.lightbox-extra-img-2');

//     projectImages.forEach((image) => {


//         image.addEventListener('click', function() {
//             lightbox.classList.remove('hidden');
//             lightboxImg.src = image.src;
//             lightboxImg.alt = image.alt;
//             lightboxExtraImg2.src = image.dataset.extra2 || '';
//             lightboxTitle.textContent = image.dataset.title || '';
//             lightboxDescription.textContent = image.dataset.description || '';

//              if (image.dataset.extra) {
//             lightboxExtraImg.src = image.dataset.extra;
//             lightboxExtraImg.style.display = 'block';
//         } else {
//             lightboxExtraImg.style.display = 'none';
//         }

//         if(image.dataset.extra2) {
//             lightboxExtraImg2.src = image.dataset.extra2;
//             lightboxExtraImg2.style.display = 'block';
//         } else {
//             lightboxExtraImg2.style.display = 'none';
//             lightboxExtraImg2.src = '';
//         }
//     });

        
     
 

//     closeBtn.addEventListener('click', () => {
//         lightbox.classList.add('hidden');
//     });

//     // Close if you click outside the image
//     lightbox.addEventListener('click', (e) => {
//         if (e.target === lightbox) {
//             lightbox.classList.add('hidden');
//         }
//     });
// });


