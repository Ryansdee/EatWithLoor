let keepClosed = false;
// Open the newsletter subscription popup
const openNewsletterPopup = () => {
    // Update the style and element properties
    document.querySelector('.newsletter-popup').style.display = 'flex';
    document.querySelector('.newsletter-popup').getBoundingClientRect();
    document.querySelector('.newsletter-popup').classList.add('open');
    document.querySelector('.newsletter-popup-container').getBoundingClientRect();
    document.querySelector('.newsletter-popup-container').classList.add('open');
};
const closeNewsletterPopup = () => {
    // Revert the element properties
    document.querySelector('.newsletter-popup').style.display = 'none';
    document.querySelector('.newsletter-popup').classList.remove('open');
    document.querySelector('.newsletter-popup-container').classList.remove('open');
    // Keep it closed!
    keepClosed = true;
};
// Get the subscription form
const newsletterForm = document.querySelector('.newsletter-popup form');
// On submit event handler (submit button is pressed)
newsletterForm.onsubmit = event => {
    event.preventDefault();
    // Bind the subscription form and execute AJAX request
    fetch(newsletterForm.action, {
        method: 'POST',
        body: new FormData(newsletterForm)
    }).then(response => response.text()).then(data => {
        // Output the response
        document.querySelector('.newsletter-msg').innerHTML = data;
    });
};
// Close button onclick event handler
document.querySelector('.newsletter-popup-close-btn').onclick = event => {
    event.preventDefault();
    // CLose the popup widget
    closeNewsletterPopup();
};
// Open the popup widget when the user reaches a specific point while scrolling down
document.addEventListener('scroll', () => {
    // If you want to open the widget further down the page, increase the 400 value
    if (window.scrollY >= 400 && !keepClosed) {
        // Open the widget
        openNewsletterPopup();
    }
});