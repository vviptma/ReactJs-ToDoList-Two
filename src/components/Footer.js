import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <Link to='/about' class="text-success text-decoration-none">Giới thiệu</Link><br/>
                    <Link to='/' class="text-success text-decoration-none">Trang chủ</Link>
                    <p className="text-muted">Copyright &copy; Mai Anh Tu 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
