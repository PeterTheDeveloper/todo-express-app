class TaskList {
    constructor(){
        this.tasks = {}
        this.completedTasks = {}
    }
    addTask(task){
        this.tasks[this.count] = task
        return this.count
    }
    
    completeTask(taskID){
        const myTask = this.tasks[this.count]
        this.completedTasks[taskID] = myTask
        delete this.tasks[this.count];
        return myTask;
    }
    
    deleteTask(taskID){
        if(this.tasks[taskID]) { //check
            const myTask = this.tasks[taskID] // save then return
            delete this.tasks[taskID]
            return myTask
        }
        else if (this.completedTasks[taskID]){
            const myTask = this.completedTasks[taskID]
            delete this.completedTasks[taskID]
            return myTask;
        }
    }
    
    updateTask(taskID, newTitle, newDesc){
        this.tasks[taskID].title = newTitle;
        this.tasks[taskID].description = newDesc;
        return this.tasks[taskID]
    }
}

TaskList.count = 0;

module.exports = TaskList;