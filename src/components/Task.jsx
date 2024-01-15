import { useState } from "react";

export default function Task({ task, onDeleteTask, onChangeTask }) {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChangeTask({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChangeTask({
                            ...task,
                            done: e.target.checked,
                        });
                    }}
                />

                {taskContent}

                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </label>
        </li>
    );
}
