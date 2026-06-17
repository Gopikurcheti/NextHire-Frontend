import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import { successAlert } from "../utils/alerts";
function Applicants() {

    const { jobId } = useParams();

    const [apps, setApps] = useState([]);

  useEffect(() => {

    const fetchApplicants = async () => {

        try {

            const result =
                await API.get(
                    `/applications/details/${jobId}`
                );

            setApps(result.data);

        }
        catch (error) {

            console.log(error);

        }

    };

    fetchApplicants();

}, [jobId]);

    const loadApplicants = async () => {

        try {

            const result =
                await API.get(
                    `/applications/details/${jobId}`
                );

              

            setApps(result.data);

        }
        catch (error) {

            console.log(error);

        }

    };



    const updateStatus = async (
        id,
        status
    ) => {

        try {

            await API.put(
                `/applications/${id}/${status}`
            );

            successAlert("Status Updated");

            loadApplicants();

        }
        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <h2>

                Applicants

            </h2>

            <hr />

            {

                apps.length === 0 ?

                (

                    <div className="alert alert-info">

                        No Applicants Yet

                    </div>

                )

                :

                (

                    apps.map(app => (

                        

                        <div
                            className="card shadow p-3 mb-3"
                            key={app.applicationId}
                        >

                            <h5>

                                👤 {app.candidateName}

                            </h5>

                            <p>

                                📧 {app.email}

                            </p>

                            <a
                                 href={`https://nexthire-backend-production-b9c8.up.railway.app/uploads/${app.resumeUrl}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-info mb-2"
                            >
                                  📄 View Resume
                            </a>

                            <p>

                                📌 Status :
                                <b> {app.status}</b>

                            </p>

                            <div className="d-flex gap-2 mt-3">

    <button
        className="btn btn-success"
        onClick={() =>
            updateStatus(
                app.applicationId,
                "SHORTLISTED"
            )
        }
    >
        Shortlist
    </button>

    <button
        className="btn btn-danger"
        onClick={() =>
            updateStatus(
                app.applicationId,
                "REJECTED"
            )
        }
    >
        Reject
    </button>

</div>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default Applicants;