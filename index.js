//function that takes a title and description and will create an task object depending on the title.
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    markComplete: function completeTask() {
      return this.complete;
    },

    logState: function logTaskState() {
      console.log(
        `${this.title} has${this.complete ? "  " : "not "}been completed `
      );
    }
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
