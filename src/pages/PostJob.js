import { useState } from "react";
import API from "../services/api";
import { successAlert, errorAlert } from "../utils/alerts";

function PostJob() {

    const [job, setJob] = useState({

        title: "",
        companyName: "",
        location: "",
        salary: "",
        skills: "",
        description: ""

    });

    const change = (e) => {

        setJob({

            ...job,

            [e.target.name]: e.target.value

        });

    };

   const postJob = async () => {

    if (
        !job.title.trim() ||
        !job.companyName.trim() ||
        !job.location.trim() ||
        !job.salary.trim() ||
        !job.skills.trim() ||
        !job.description.trim()
    ) {

        errorAlert("Please fill all fields");

        return;
    }

    try {

        await API.post("/jobs", job);

        successAlert("Job Posted Successfully");

        setJob({
            title: "",
            companyName: "",
            location: "",
            salary: "",
            skills: "",
            description: ""
        });

    } catch (error) {

        console.log(error);

    }

};

    return (

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="text-center text-primary">

                    Post New Job

                </h2>

                <hr/>

                <input
                    className="form-control mb-3"
                    placeholder="Job Title"
                    name="title"
                    value={job.title}
                    onChange={change}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Company Name"
                    name="companyName"
                    value={job.companyName}
                    onChange={change}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Location"
                    name="location"
                    value={job.location}
                    onChange={change}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Salary"
                    name="salary"
                    value={job.salary}
                    onChange={change}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Skills"
                    name="skills"
                    value={job.skills}
                    onChange={change}
                />

                <textarea
                    rows="5"
                    className="form-control mb-4"
                    placeholder="Description"
                    name="description"
                    value={job.description}
                    onChange={change}
                />

                <button
                    className="btn btn-primary"
                    onClick={postJob}
                >

                    Post Job

                </button>

            </div>

        </div>

    );

}

export default PostJob;