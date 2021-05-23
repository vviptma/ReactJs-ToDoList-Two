//import FaTimes from FontAwesome
import {FaEye, FaTimes, FaTrash} from "react-icons/fa";

const SingleTask = ({task},{index}) => {
    return (
        <>
            <div className="col" key={index}>
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Mission # {task.id}</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">{task.text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    Xem nhiệm vụ <FaEye/>
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    Xóa nhiệm vụ <FaTrash/></button>
                            </div>
                            <small className="text-muted">{task.day}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleTask;