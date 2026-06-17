import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import candidateImage from "../assets/candidate.png";

function CandidateDashboard() {

    const navigate = useNavigate();

    const [stats, setStats] = useState({
        applied: 0,
        shortlisted: 0,
        rejected: 0,
        pending: 0
    });

    useEffect(() => {

        loadStats();

    }, []);

    const loadStats = async () => {

        try {

            const userId =
                sessionStorage.getItem("userId");

            const result =
                await axios.get(
                    `http://localhost:8080/api/applications/stats/${userId}`
                );

            setStats(result.data);

        }
        catch(error) {

            console.log(error);

        }

    };

    const logout = () => {

        sessionStorage.clear();

        navigate("/login");

    };

    return (

        <div className="container mt-5">

            <div className="row align-items-center mb-5">

                <div className="col-md-7">

                    <h1
                        style={{
                            color:"#FFFFFF",
                            fontWeight:"700"
                        }}
                    >
                        Welcome Candidate 👨‍💻
                    </h1>

                    <p
                        style={{
                            color:"#E9D5FF"
                        }}
                        className="fs-5"
                    >
                        Track applications, explore jobs
                        and build your career with NextHire.
                    </p>

                </div>

                <div className="col-md-5 text-center">

                    <img
                        src={candidateImage}
                        alt="Candidate"
                        className="img-fluid"
                        style={{
                            maxHeight:"280px"
                        }}
                    />

                </div>

            </div>

            {/* Statistics */}

            <div className="row g-4 mb-5">

                <div className="col-md-3">

                    <div className="stat-card">

                        <h2>{stats.applied}</h2>

                        <p>Applied</p>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="stat-card">

                        <h2>{stats.shortlisted}</h2>

                        <p>Shortlisted</p>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="stat-card">

                        <h2>{stats.rejected}</h2>

                        <p>Rejected</p>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="stat-card">

                        <h2>{stats.pending}</h2>

                        <p>Pending</p>

                    </div>

                </div>

            </div>

            {/* Menu Cards */}

            <div className="row g-4">

                <div className="col-md-4">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>💼</h1>

                            <h4>Browse Jobs</h4>

                            <Link
                                to="/jobs"
                                className="btn btn-primary"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>📄</h1>

                            <h4>My Applications</h4>

                            <Link
                                to="/my-applications"
                                className="btn btn-primary"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card dashboard-card">

                        <div className="card-body text-center">

                            <h1>👤</h1>

                            <h4>My Profile</h4>

                            <Link
                                to="/profile"
                                className="btn btn-primary"
                            >
                                Open
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            <div className="text-center mt-5">

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default CandidateDashboard;