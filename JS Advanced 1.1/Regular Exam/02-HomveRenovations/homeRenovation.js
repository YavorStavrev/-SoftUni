class HomeRenovation {
    constructor(budget) {
        this.budget = Number(budget);
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        cost = Number(cost);
        priority = Number(priority);
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }
        const task = {
            description,
            cost,
            priority
        };

        this.tasks.push(task);
        this.budget -= cost;
        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        const taskIndex = this.tasks.findIndex(task => task.description === description);

        if (taskIndex === -1) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        const task = this.tasks.splice(taskIndex, 1)[0];
        this.completedTasks.push(task);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        minimalPriority = Number(minimalPriority);

        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }

        const tasksCount = this.tasks.filter(task => task.priority >= minimalPriority).length;
        
        if (tasksCount > 0) {
            return `You have ${tasksCount} tasks to prioritize.`;
        }
        return `No tasks found with priority ${minimalPriority} or higher.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        }

        let buff = `Budget left $${this.budget}.\n`;
        buff += `You have completed ${this.completedTasks.length} tasks.\n`;
        buff += "Pending tasks in the renovation plan:\n";

        this.tasks.forEach(task => {
            buff += `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}\n`;
        });

        return buff.trim(); 
    }
}


