//check type props
import PropTypes from 'prop-types';

//use React lib
import React, {useState} from 'react'

//Import components
import Button from "./Button";
import Task from "./Task";
import AddTask from "./AddTask";


//Return view
const Header = (props) => {
    const [tasks, setState] = useState(
        [
            {
                id: 1,
                text: 'Learn English',
                day: '21/1/2021',
                reminder: true
            },
            {
                id: 2,
                text: 'Learn English 2',
                day: '21/1/2021',
                reminder: false
            },
            {
                id: 3,
                text: 'Learn English 3',
                day: '21/1/2021',
                reminder: true
            },
            {
                id: 4,
                text: 'Learn English 4',
                day: '21/1/2021',
                reminder: false
            },
            {
                id: 5,
                text: 'Learn English 5',
                day: '21/1/2021',
                reminder: false
            },
            {
                id: 6,
                text: 'Learn English 6',
                day: '21/1/2022',
                reminder: false
            },
        ]
    )
    const onCompleted = (id) => {
        setState(
            tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
        )
    }

    const deleteTask = (id) => {
        setState(tasks.filter((task) => task.id !== id));
    }

    const addTask = (nhiemvu) => {
        const id = Math.floor(Math.random() * 10000) + 1
        console.log(id)

        const newTask = {id, ...nhiemvu}

        setState([...tasks, newTask])
    }

    //
    const [showAddTask, setShowAddTask] = useState(false)

    return (
        <div>
            <div className="b-example-divider"></div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="">
                            <img src={"./logo.svg"}
                                 width="80" height="80" alt="Logo"></img>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href={"/"} className="nav-link px-2 text-secondary">Home</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..."
                                   aria-label="Search"/>
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login
                            </button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="my-2 container">
                    <Button onAdd = {() => setShowAddTask(!showAddTask)}
                            showAddBtn = {showAddTask}/>
                    {showAddTask && <AddTask onAddTask={addTask}/>}
                </div>
            </section>
            <main>
                <div className="album py-5 bg-light">
                    <div className="container">

                        {/*Add component*/}
                        {tasks.length > 0 ?
                            <Task tasks={tasks} onDelete={deleteTask} onCompleted={onCompleted}/> : "No task"}

                    </div>
                </div>

                <section className="py-5 text-center container">
                    <div className="row py-lg-2">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Todo List</h1>
                            <p className="lead text-muted">Đây là project nhỏ nhằm mục đích tự mài dũa kỹ năng
                                ReactJs</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

//Declare props/defaultProps
Header.defaultProps = {
    title: 'Tieu de'
}

//Check propTypes expected
Header.propTypes = {
    title: PropTypes.string.isRequired
}

//Declare TitleCss
// const TitleCss = {
//     color: 'red',
//     backgroundColor:'black',
//     width: '400px'
// }

export default Header
