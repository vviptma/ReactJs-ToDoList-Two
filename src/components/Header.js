//Check prop-types
import PropTypes from 'prop-types';

//Using Lib
import React, {useState, useEffect} from 'react'

//Import Components
import Button from "./Button";
import Task from "./Task";
import AddTask from "./AddTask";
import About from "./About";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Footer from "./Footer";

//return Header
const Header = (props) => {
    const [tasks, setState] = useState([])

    //useEffect to view
    useEffect(() => {
        const getTask = async () => {
            const taskfromServer = await fetchTask()
            setState(taskfromServer)
        }
        getTask()
    }, [])

    //Async with db.json
    const fetchTask = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data;
    }

    //Async with ID
    const fetchIDTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data;
    }
    //Update reminder with ID
    const onCompleted = async (id) => {
        const tasktoCompleted = await fetchIDTask(id)
        const updateTask = {...tasktoCompleted, reminder: !tasktoCompleted.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateTask),
        })
        const data = await res.json()

        setState(
            tasks.map((tasks) => tasks.id === id ? {...tasks, reminder: data.reminder} : tasks)
        )
    }

    //deleteTask with ID
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

        setState(tasks.filter((task) => task.id !== id));
    }

    //addTask with setState and async
    const addTask = async (nhiemvu) => {

        const res = await fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nhiemvu),
        })
        const data = await res.json()

        setState([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1
        // console.log(id)
        // const newTask = {id, ...nhiemvu}
        // setState([...tasks, newTask])
    }

    const [showAddTask, setShowAddTask] = useState(false)

    return (
        <Router>
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

                <Route path='/' exact render={(props) => (
                    <>
                        <section>
                            <div className="my-2 container">
                                <Button onAdd={() => setShowAddTask(!showAddTask)}
                                        showAddBtn={showAddTask}/>
                                {showAddTask && <AddTask onAddTask={addTask}/>}
                            </div>
                            <div className="album py-5 bg-light">
                                <div className="container">

                                    {/*Add component*/}
                                    {tasks.length > 0 ?
                                        <Task tasks={tasks} onDelete={deleteTask}
                                              onCompleted={onCompleted}/> : "Không có nhiệm vụ nào cả!"}
                                </div>
                            </div>
                        </section>

                        <div className="py-5 text-center container">
                            <div className="row py-lg-2">
                                <div className="col-lg-6 col-md-8 mx-auto">
                                    <h1 className="fw-light">Todo List</h1>
                                    <p className="lead text-muted">Project nhỏ nhằm mài dũa kỹ năng ReactJs, Boostrap 5</p>
                                </div>

                            </div>
                        </div>

                    </>
                )}>
                </Route>
                <Route path='/about' component={About}/>
            </div>
            <Footer/>
        </Router>
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
