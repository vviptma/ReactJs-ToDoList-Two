//import FaTimes from FontAwesome
import {FaCheck, FaTrash} from "react-icons/fa";

const SingleTask = ({task, onDelete, onCompleted}, {index}) => {
    return (
        <>
            <div className="col" key={index}>
                <div className="card shadow-sm">
                    <div className={`${task.reminder ? `completed col` : 'col'}`}>
                    </div>
                    <div className={`${task.reminder ? `completed card-body` : 'card-body'}`}>
                        <p>{task.text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button onClick={() => onCompleted(task.id)}
                                        type="button"
                                            className={`${task.reminder ? `completed` : 'btn btn-sm btn-outline-secondary'}`}>
                                        <FaCheck/>
                                </button>
                                <button onClick={() => onDelete(task.id)}
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary">
                                        <FaTrash/>
                                </button>
                            </div>
                            <small>{task.day}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTask;