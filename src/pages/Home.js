import { Link } from "react-router-dom";
import "../styles/Home.css";
import homeImage from "../assets/home-hero.png";
import { useEffect, useState } from "react";
import API from "../services/api";





function Home() {
    
    const [stats,setStats] = useState({
    
    jobs:0,
    recruiters:0,
    candidates:0
    
    });
    
     useEffect(() => {
    
            loadStats();
    
        }, []);
    
    const loadStats = async () => {
    
        try {
    
            const result =
                await API.get(
                    "/home/stats"
                );
    
            setStats(result.data);
    
        }
        catch(error) {
    
            console.log(error);
    
        }
    
    };

    return (

        <>
            <section className="hero">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <h1>
                                Find Your Dream Job
                            </h1>

                            <p className="mt-4">

                                NextHire connects talented candidates
                                with top recruiters across industries.

                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/register"
                                    className="btn btn-light hero-btn"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    to="/jobs"
                                    className="btn btn-outline-light hero-btn"
                                >
                                    Browse Jobs
                                </Link>

                            </div>

                        </div>

                        <div className="col-lg-6 text-center">

                            <img
                                src={homeImage}
                                alt="NextHire"
                                className="hero-image"
                            />

                        </div>

                    </div>

                </div>

            </section>

            <div className="container stats">

                <div className="row g-3">

                    <div className="col-4 col-md-4">

                        <div className="stat-card">

                            <h2>{stats.jobs}</h2>
                            <h5>Jobs Posted</h5>

                        </div>

                    </div>

                    <div className="col-4 col-md-4">

                        <div className="stat-card">

                            <h2>{stats.recruiters}</h2>
                            <h5>Recruiters</h5>

                        </div>

                    </div>

                    <div className="col-4 col-md-4">

                        <div className="stat-card">

                            <h2>{stats.candidates}</h2>
                            <h5>Candidates</h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container mt-5">

                <h2 className="text-center fw-bold">

                    Why Choose NextHire?

                </h2>

                <div className="row mt-4 g-3">

                    <div className="col-md-3">

                        <div className="feature-card">

                            <h4>💼</h4>

                            <h5>Easy Job Search</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="feature-card">

                            <h4>🏢</h4>

                            <h5>Top Companies</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="feature-card">

                            <h4>⚡</h4>

                            <h5>Fast Hiring</h5>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="feature-card">

                            <h4>🔒</h4>

                            <h5>Secure Platform</h5>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Home;