//check type props
import PropTypes from 'prop-types';

//use React lib
import React, {useState} from 'react'

//Import components
import Button from "./Button";
import Task from "./Task";

//Return view
const Header = (props) => {
    const [tasks, setTasks] = useState(
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

    return (
        <div>
            <div className="b-example-divider"></div>

            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
                                 width="80" height="80"></img>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
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

            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-2">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Todo List</h1>
                            <p className="lead text-muted">Đây là project nhỏ nhằm mục đích tự mài dũa kỹ năng ReactJs</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2 mx-2">Hành động 1</a>
                                <a href="#" className="btn btn-secondary my-2 mx-2">Hành động 2</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">


                            <Task tasks={tasks}/>

                    </div>
                </div>

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