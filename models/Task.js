const TaskList = require("./TaskList.js");

class Task {
    constructor(title, description) {
        this.id = TaskList.count++;
        this.title = title;
        this.description = description;
        this.dueDate = new Date()
    }
}

module.exports = Task;