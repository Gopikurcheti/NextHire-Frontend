import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaUsers } from "react-icons/fa";
import axios from "axios";
import { successAlert, errorAlert } from "../utils/alerts";

function Register() {

    const [user, setUser] = useState({

        fullName: "",
        email: "",
        password: "",
        role: "CANDIDATE"

    });

    useEffect(() => {

        setUser({

            fullName: "",
            email: "",
            password: "",
            role: "CANDIDATE"

        });

    }, []);

    const change = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const register = async () => {

        try {

            const res = await axios.post(

                "http://localhost:8080/api/auth/register",

                user

            );

            successAlert(res.data.message);

            setUser({

                fullName: "",
                email: "",
                password: "",
                role: "CANDIDATE"

            });

        }

        catch {

            errorAlert("Registration Failed");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">

                    Create Account

                </h2>

                <div className="mb-3">

                    <label>

                        <FaUser />

                        {" "}Full Name

                    </label>

                    <input
                        className="form-control"
                        name="fullName"
                        autoComplete="off"
                        value={user.fullName}
                        onChange={change}
                        placeholder="John"
                    />

                </div>

                <div className="mb-3">

                    <label>

                        <FaEnvelope />

                        {" "}Email

                    </label>

                    <input
                        className="form-control"
                        name="email"
                        autoComplete="off"
                        value={user.email}
                        onChange={change}
                        placeholder="john@example.com"
                    />

                </div>

                <div className="mb-3">

                    <label>

                        <FaLock />

                        {" "}Password

                    </label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="new-password"
                        value={user.password}
                        onChange={change}
                        placeholder="Create a password"
                    />

                </div>

                <div className="mb-4">

                    <label>

                        <FaUsers />

                        {" "}Role

                    </label>

                    <select
                        className="form-control"
                        name="role"
                        value={user.role}
                        onChange={change}
                    >

                        <option value="CANDIDATE">

                            CANDIDATE

                        </option>

                        <option value="RECRUITER">

                            RECRUITER

                        </option>

                    </select>

                </div>

                <button
                    className="btn-auth"
                    onClick={register}
                >

                    Register

                </button>

            </div>

        </div>

    );

}

export default Register;