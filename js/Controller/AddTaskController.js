// Add User Controller

// jika DOM terisi oleh data/value
document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName: document.getElementById("taskName").value,
            taskPriority: document.getElementById("taskPriority").value
        }

        const result = taskManager.saveTask(taskData);

        if (result.success) {
            alert('Task berhasil diubah.')
            return window.location.href = '../tasks.html';
        }
        else {
            alert('Task gagal diubah.')
            // return window.location.href = '../login.html';
        }
    })


})