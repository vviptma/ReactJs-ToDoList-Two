//import FaTimes from FontAwesome
import {FaEye, FaTrash} from "react-icons/fa";

const SingleTask = ({task, onDelete, onCompleted}, {index}) => {
    return (
        <>
            <div className="col" key={index}>
                <div className="card shadow-sm">
                    <div className={`${task.reminder ? `completed col` : 'col'}`}>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="40%" y="50%" fill="#eceeef" dy=".3em">Mission # {task.id}</text>
                        </svg>
                    </div>
                    <div className="card-body">
                        <p>{task.text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button onClick={() => onCompleted(task.id)}
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary">
                                        <FaEye/>
                                </button>
                                <button onClick={() => onDelete(task.id)}
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary">
                                        <FaTrash/>
                                </button>
                            </div>
                            <small className={`${task.reminder ? `completed` : ''}`}>{task.day}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTask;