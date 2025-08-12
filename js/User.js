// User model

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      username: userData,
    };
    // Cek jika username sudah ada → hindari duplikasi
    const isDuplicate = this.users.some(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase()
    );
    if (isDuplicate) {
      return {
        success: false,
        message: "Username sudah terdaftar!",
      };
    }
    // push data ke local storage
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return {
      success: true,
    };
  }

  loginUser(usernameByInput) {
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExists) {
      return {
        success: true,
        usernameByInput,
      };
    } else {
      return {
        success: false,
        message:
          "Username kamu belum terdaftar, Silahkan daftar terlebih dahulu",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
