import React from 'react';

const Button = ({onAdd, showAddBtn}) => {
    return (
        <div>
            <button style={{backgroundColor : showAddBtn ? 'red' : 'green'}} className="btn btn-primary my-2" onClick={onAdd}>{showAddBtn ? 'Đóng không thêm nữa' : 'Thêm Nhiệm Vụ'}</button>
        </div>
    )
}

export default Button
