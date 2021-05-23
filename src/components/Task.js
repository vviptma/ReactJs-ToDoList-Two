import React from 'react';
import SingleTask from "./SingleTask";

const Task = ({tasks, onDelete, onCompleted}) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {tasks.map((task, index) => (
                <SingleTask task={task} key={index} onDelete={onDelete} onCompleted={onCompleted}/>
            ))}
        </div>
    );
}

export default Task;

