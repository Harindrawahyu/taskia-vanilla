document.addEventListener('DOMContentLoaded', () => {
    const myTask = new Task();

    const existingTasks = myTask.getTasks();

    const taskWrapper = document.getElementById('taskWrapper');
    const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');

    // Function display Task
    function displayAllTasks() {
        if (existingTasks.length === 0) {
            //return taskWrapperEmpty
            taskWrapper.className = 'hidden';
            console.log("Task tidak tersedia.")

        } else {
            //return taskWrapper
            taskWrapperEmpty.className = 'hidden';
            console.log("Task tersedia.")
        }
    }

    displayAllTasks()
});
