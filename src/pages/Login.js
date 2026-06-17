import { useEffect , useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import {errorAlert} from "../utils/alerts";
function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({

        email: "",
        password: ""

    })
    useEffect(() => {

    setLogin({
        email: "",
        password: ""
    });

}, []);

    const change = (e) => {

        setLogin({

            ...login,
            [e.target.name]: e.target.value

        });

    };

    const loginUser = async () => {

        try {

            const res = await API.post(
                "/auth/login",
                login
            );

            

            if (res.data.token) {

                sessionStorage.setItem(
                    "token",
                    res.data.token
                );

                sessionStorage.setItem(
                    "role",
                    res.data.role
                );

                sessionStorage.setItem(
                    "userId",
                    res.data.userId
                );

                sessionStorage.setItem(
                    "email",
                    res.data.email
                );

                if (res.data.role === "RECRUITER") {

                    navigate("/recruiter");

                }
                else {

                    navigate("/candidate");

                }

            }
            else {

                errorAlert(res.data.message);

            }

        }
        catch (error) {

            console.log(error);

            errorAlert("Login Failed");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2 className="auth-title">

                    Welcome Back

                </h2>

                <div className="mb-3">

                    <label>

                        <FaEnvelope /> Email

                    </label>

                    <input
                        autoComplete="off"
                        className="form-control"
                        name="email"
                        value={login.email}
                         onChange={change}
                        placeholder="john@example.com" 
                    />

                </div>

                <div className="mb-4">

                    <label>

                        <FaLock /> Password

                    </label>

                    <input
                        type="password"
                        autoComplete="new-password"
                        className="form-control"
                        name="password"
                        value={login.password}
                        onChange={change}
                        placeholder="Enter password"
                    />

                </div>

                <button
                    className="btn-auth"
                    onClick={loginUser}
                >

                    Login

                </button>

            </div>

        </div>

    );

}

export default Login;