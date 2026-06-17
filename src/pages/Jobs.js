import { useEffect, useState } from "react";
import API from "../services/api";
import { successAlert, errorAlert } from "../utils/alerts";

function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {

        loadJobs();

    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {

    const timer = setTimeout(() => {

        searchJobs();

    }, 400);

    return () => clearTimeout(timer);

}, [keyword]);

    const loadJobs = async () => {

        try {

            const response = await API.get("/jobs");

            setJobs(response.data);

        }
        catch (error) {

            if (error.response) {

                errorAlert(error.response.data);

            }

        }

    };

    const searchJobs = async () => {

        try {

            if (keyword.trim() === "") {

                loadJobs();
                return;

            }

            const response =
                await API.get(
                    `/jobs/search?keyword=${keyword}`
                );

            setJobs(response.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    const applyJob = async (jobId) => {

        try {

            await API.post("/applications", {

                userId:
                    sessionStorage.getItem("userId"),

                jobId: jobId

            });

            successAlert("Applied Successfully!");

        }
        catch (error) {

            errorAlert(
                "You have already applied for this job"
            );

        }

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Available Jobs
            </h2>

            <hr />

            {/* Search Box */}

            <div className="mb-4">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title or company..."
                    value={keyword}
                    onChange={(e) =>
                        setKeyword(e.target.value)
                    }
                />

            </div>

            {

                jobs.length > 0 ? (

                    jobs.map((job) => (

                        <div
                            className="card shadow p-4 mb-4"
                            key={job.jobId}
                        >

                            <h4>
                                {job.title}
                            </h4>

                            <h6 className="text-primary">
                                {job.companyName}
                            </h6>

                            <p>
                                <b>Location :</b>{" "}
                                {job.location}
                            </p>

                            <p>
                                <b>Skills :</b>{" "}
                                {job.skills}
                            </p>

                            <p>
                                <b>Salary :</b>{" "}
                                {job.salary || "Not Mentioned"}
                            </p>

                            <p>
                                <b>Description :</b>{" "}
                                {job.description}
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    applyJob(job.jobId)
                                }
                            >
                                Apply Now
                            </button>

                        </div>

                    ))

                ) : (

                    <div className="alert alert-info">

                        No jobs found.

                    </div>

                )

            }

        </div>

    );

}

export default Jobs;