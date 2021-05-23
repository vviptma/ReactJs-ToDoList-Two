import React, {useState} from 'react'


const AddTask = ({onAddTask}) => {
    //Set default
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Can them nhiem vu hang ngay')
            return
        }

        onAddTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6 py-3 px-5 border">
                        <h1 className="text-center">Thêm nhiệm vụ</h1>
                        <form className="add-form" onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name_task" className="form-label">Tên nhiệm vụ</label>
                                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Tên nhiệm vụ"
                                       type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date_task" className="form-label">Ngày bắt đầu</label>
                                <input value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder="Ngày bắt đầu"
                                       className="form-control" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3 form-check">
                                <label className="form-check-label" htmlFor="exampleCheck1">Đã hoàn thành</label>
                                <input checked={reminder} value={reminder}
                                       onChange={(e) => setReminder(e.currentTarget.checked)} type="checkbox"
                                       className="form-check-input" id="exampleCheck1"/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
