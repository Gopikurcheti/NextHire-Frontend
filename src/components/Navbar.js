import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

function Navbar() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");

    const logout = () => {

        sessionStorage.clear();

        navigate("/login");

        window.location.reload();

    };
    const closeMenu = () => {
    setIsOpen(false);
};

    return (

        <nav className="navbar navbar-expand-lg glass-navbar">

            <div className="container">

                <Link
                    to="/"
                    className="navbar-brand"
                >
                    <Logo />
                </Link>

                <div className="d-none d-lg-flex ms-auto align-items-center">

    <Link className="nav-link" to="/">
        Home
    </Link>

    <Link className="nav-link" to="/about">
        About
    </Link>

    <Link className="nav-link" to="/contact">
        Contact
    </Link>

    {
        !token ?

        <>
            <Link
                to="/login"
                className="btn btn-outline-light ms-2"
            >
                Login
            </Link>

            <Link
                to="/register"
                className="btn btn-primary ms-2"
            >
                Register
            </Link>
        </>

        :

        <>
            <Link
                className="btn btn-success ms-2"
                to={
                    role === "RECRUITER"
                    ? "/recruiter"
                    : "/candidate"
                }
            >
                Dashboard
            </Link>

            <button
                className="btn btn-danger ms-2"
                onClick={logout}
            >
                Logout
            </button>
        </>
    }

</div>

                <button
                    className="navbar-toggler"
                  onClick={() => setIsOpen(true)}
>
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`mobile-sidebar ${isOpen ? "active" : ""}`}>

    <div className="sidebar-header">

        <h4>NextHire</h4>

        <button
            className="btn-close btn-close-white"
            onClick={closeMenu}
        ></button>

    </div>

    <ul className="navbar-nav">

        <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeMenu}>
                Home
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={closeMenu}>
                About
            </Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
            </Link>
        </li>

        {
            !token ?

            <>
                <li className="mt-3">
                    <Link
                        to="/login"
                        className="btn btn-outline-light w-100"
                        onClick={closeMenu}
                    >
                        Login
                    </Link>
                </li>

                <li className="mt-2">
                    <Link
                        to="/register"
                        className="btn btn-primary w-100"
                        onClick={closeMenu}
                    >
                        Register
                    </Link>
                </li>
            </>

            :

            <>
                <li className="mt-3">
                    <Link
                        className="btn btn-success w-100"
                        to={
                            role === "RECRUITER"
                                ? "/recruiter"
                                : "/candidate"
                        }
                        onClick={closeMenu}
                    >
                        Dashboard
                    </Link>
                </li>

                <li className="mt-2">
                    <button
                        className="btn btn-danger w-100"
                        onClick={() => {
                            closeMenu();
                            logout();
                        }}
                    >
                        Logout
                    </button>
                </li>
            </>
        }

    </ul>

</div>

{
    isOpen &&
    <div
        className="sidebar-overlay"
        onClick={closeMenu}
    ></div>
}
                

            </div>

        </nav>

    );

}

export default Navbar;