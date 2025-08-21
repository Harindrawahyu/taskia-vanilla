class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  // Save tasks
  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isCompleted: false,
      // isArchived: false, //unused
      ...taskData,
    };

    this.tasks.push(newTaskData);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  // Complete tasks
  completeTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  // Uncomplete tasks
  uncompleteTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = false;
      this.updateLocalStorage();
    }
  }

  // Delete tasks
  deleteTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  // // Archive tasks
  // archiveTask(taskId) {
  //   console.log(taskId);
  //   const index = this.tasks.findIndex((task) => task.id === taskId);

  //   if (index !== -1) {
  //     this.tasks[index].isArchived = true;
  //     this.updateLocalStorage();
  //   }
  // }


  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
