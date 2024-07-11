document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Form feedback
    document.getElementById('form-feedback').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('form-feedback').classList.add('hidden');
    }, 3000);

    // You can add AJAX or Fetch API here to send form data to your server

    // Clear form
    document.getElementById('signup-form').reset();
});
