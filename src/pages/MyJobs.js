import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import { successAlert, errorAlert } from "../utils/alerts";

function MyJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        loadJobs();

    }, []);

    const loadJobs = async () => {

        try {

            const result = await API.get(
                "/jobs"
            );

            setJobs(result.data);

        }
        catch (error) {

            console.log(error);

            errorAlert("Failed to load jobs");

        }

    };

    const deleteJob = async (id) => {

        const ok = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!ok) return;

        try {

            await API.delete(`/jobs/${id}`);

            successAlert("Job Deleted Successfully");

            loadJobs();

        }
        catch (error) {

            console.log(error);

            errorAlert("Unable to delete job");

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">

                My Jobs

            </h2>

            {

                jobs.length === 0 ?

                (

                    <div className="alert alert-info">

                        No Jobs Posted Yet

                    </div>

                )

                :

                (

                    jobs.map((job) => (

                        <div
                            className="card shadow mb-3 p-3"
                            key={job.jobId}
                        >

                            <h4>{job.title}</h4>

                            <p>
                                <b>Company :</b> {job.companyName}
                            </p>

                            <p>
                                <b>Location :</b> {job.location}
                            </p>

                            <p>
                                <b>Skills :</b> {job.skills}
                            </p>

                            <p>
                               <b>Salary :</b> {job.salary || " Not Mentioned"}
                            </p>

                            <div>

                                <Link
                                    to={`/applicants/${job.jobId}`}
                                    className="btn btn-primary me-2"
                                >

                                    View Applicants

                                </Link>

                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        deleteJob(job.jobId)
                                    }
                                >

                                    Delete

                                </button>

                            </div>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default MyJobs;