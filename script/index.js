loadProfile();

function loadProfile() {
    var storedImage = localStorage.getItem('userImage');
    var profileImage = $('#profileImage');
    
    if (storedImage) {
        profileImage.attr('src', storedImage);
    }
    else {
        // Set a default image if no stored image is found
        profileImage.attr('src', 'image/abstract-user-flat-4.png');
    }
}