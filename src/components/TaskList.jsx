import Task from "./Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onChangeTask={onChangeTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
}
