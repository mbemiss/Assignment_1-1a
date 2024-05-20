// Add event listener to the button for revealing additional information
document.getElementById('reveal-button').addEventListener('click', function() {
    // Get the div element containing the additional information
    const moreInfo = document.getElementById('more-info');
    // Toggle the display property of the div
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Hide Information'; // Update button text
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Reveal More Information'; // Update button text
    }
});
