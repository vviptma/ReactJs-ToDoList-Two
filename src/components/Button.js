import React from 'react';

const Button = ({onAdd, showAddBtn}) => {
    return (
        <div>
            <button style={{backgroundColor : showAddBtn ? 'red' : 'green'}} className="btn btn-primary my-2" onClick={onAdd}>{showAddBtn ? 'Close Add Task' : 'Open Add Task'}</button>
        </div>
    )
}

export default Button
