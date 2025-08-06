// SignIn User Controller

// jika DOM terisi oleh data/value
document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById('username').value;

        const result = userManager.loginUser(usernameInput);

        if (result.success) {
            localStorage.setItem('usernameLoggedIn', usernameInput);
            return window.location.href = '../tasks.html';
        }
        else {
            alert(result.message)
            return window.location.href = '../add-user.html';

        }
    })


})