// Add User Controller

// jika DOM terisi oleh data/value
document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = document.getElementById("username").value;

        const result = userManager.saveUser(userData);

        if (result.success) {
            return window.location.href = '../login.html';
        }
        else {
            alert('Username kamu sudah terdaftar, Silahkan Login')
            return window.location.href = '../login.html';
        }
    })


})