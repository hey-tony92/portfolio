document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector('.nav-links');

   hamburger.addEventListener('click', function() {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle('active');
   });
});

//form submission confirmation

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
                </div>`;
        }
    } catch (error) {
        console.error('Error', error);
        alert('Whoops! There was a problem submitting your message. Try again!');
    }
});
