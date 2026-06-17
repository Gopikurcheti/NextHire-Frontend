import { Link, useNavigate } from "react-router-dom";
import recruiterImage from "../assets/recruiter.png";

function RecruiterDashboard() {

    const navigate = useNavigate();

    const logout = () => {

        sessionStorage.clear();

        navigate("/login");

    };

    return (

        <div className="container mt-5">

            {/* Header */}

            <div className="text-center mb-5">

                <img
                    src={recruiterImage}
                    alt="Recruiter"
                    className="dashboard-image"
                />

                <h2 className="dashboard-title">

                    Recruiter Dashboard

                </h2>

                <p className="dashboard-subtitle">

                    Manage job postings and review candidates.

                </p>

            </div>

            {/* Cards */}

            <div className="row g-4 justify-content-center">

                <div className="col-lg-4 col-md-6">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>➕</h1>

                            <h4>Post Job</h4>

                            <p>

                                Create and publish new openings.

                            </p>

                            <Link
                                to="/post-job"
                                className="btn btn-primary"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4 col-md-6">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>📋</h1>

                            <h4>My Jobs</h4>

                            <p>

                                Manage all posted jobs.

                            </p>

                            <Link
                                to="/my-jobs"
                                className="btn btn-success action-btn"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4 col-md-6">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>👤</h1>

                            <h4>Profile</h4>

                            <p>

                                Update recruiter profile.

                            </p>

                            <Link
                                to="/profile"
                                className="btn btn-warning"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            {/* Logout */}

            <div className="text-center mt-5">

                <button
                    className="btn btn-danger btn-lg"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default RecruiterDashboard;