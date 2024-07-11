document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation (you can add more advanced validation)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Form feedback
    document.getElementById('form-feedback').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('form-feedback').classList.add('hidden');
    }, 3000);

    // You can add AJAX or Fetch API here to send form data to your server

    // Clear form
    document.getElementById('login-form').reset();
});
