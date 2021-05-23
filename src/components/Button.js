import React from 'react'

const Button = ({ text,color,onclick}) => {
    return (
        <div>
            <button className="btn btn-primary my-2" >{text}</button>
        </div>
    )
}

export default Button
