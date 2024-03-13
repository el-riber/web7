import React, { useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const newTask = {
            id: Date.now(), // Using timestamp as id
            title: 'New Task', // Default task title
            completed: false // Task starts as not completed
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title} - Completed: {task.completed ? 'Yes' : 'No'}
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            Toggle Completion
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
