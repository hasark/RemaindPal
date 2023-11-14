function loadProfile() {
    var storedName = localStorage.getItem('firstname');
    var storedFamily = localStorage.getItem('family');
    var storedAge = localStorage.getItem('age');
    var storedPassword = localStorage.getItem('password');
    var storedEmail = localStorage.getItem('email');
    var storedImage = localStorage.getItem('userImage');

    $('#firstname').val(storedName);
    $('#family').val(storedFamily);
    $('#age').val(storedAge);
    $('#password').val(storedPassword);
    $('#email').val(storedEmail);

    var profileImage = $('#profileImage');

    if (storedImage) {
        $('#imagePreview').css('background-image', 'url(' + storedImage + ')');
        profileImage.attr('src', storedImage);
    }
    else {
        // Set a default image if no stored image is found
        profileImage.attr('src', 'image/abstract-user-flat-4.png');
    }
}

// Call loadProfile on page load
loadProfile();

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imageUpload").change(function () {
    readURL(this);
});

function updateProfile() {
    // Get user inputs
    var firstname = $("#firstname").val();
    var family = $("#family").val();
    var age = $("#age").val();
    var password = $("#password").val();
    var email = $("#email").val();

    // Save user inputs to localStorage
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('family', family);
    localStorage.setItem('age', age);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);

    // Save image to localStorage
    var imageBase64 = $('#imagePreview').css('background-image')
        .replace('url("', '')
        .replace('")', '');

    localStorage.setItem('userImage', imageBase64);

}