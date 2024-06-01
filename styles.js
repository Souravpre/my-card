document.addEventListener("DOMContentLoaded", function() {
    // Apply styles via JavaScript if needed (optional as we use CSS for this example)
    
    // Making sure the profile picture is round
    const profilePic = document.getElementById('profile-pic');
    profilePic.style.borderRadius = '50%';
    
    // Making sure the input box is round
    const emailInput = document.getElementById('email-input');
    emailInput.style.borderRadius = '50px';
});
