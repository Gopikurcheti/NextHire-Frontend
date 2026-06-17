import { useEffect, useState } from "react";
import API from "../services/api";

function MyApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {

        try {

            const userId =
                sessionStorage.getItem(
                    "userId"
                );

            const result =
                await API.get(

                    `/applications/user/${userId}`

                );
            

            setApplications(result.data );

        }
        catch(error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <div className="card my-applications-card p-4 shadow">

                <h2 className="text-center mb-4">

                    📄 My Applications

                </h2>

                <div className="table-responsive">

                <table className="table applications-table">

                    <thead>

                        <tr>

                            <th>
                                Application ID
                            </th>

                            <th>
                                Job ID
                            </th>

                            <th>
                                Applied At
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            applications.map(
                                app => (

                                <tr
                                    key={
                                        app.applicationId
                                    }
                                >

                                    <td>
                                        {
                                        app.applicationId
                                        }
                                    </td>

                                    <td>
                                        {
                                        app.jobId
                                        }
                                    </td>

                                    <td>
                                        {
                                            new Date(app.appliedAt)
                                            .toLocaleString("en-IN", {

                                                 day:"2-digit",
                                                 month:"short",
                                                 year:"numeric",

                                                 hour:"2-digit",
                                                 minute:"2-digit",

                                                 hour12:true

                                        })
                                        }
                                    </td>

                                    <td>

                                        <span className="badge bg-primary">

                                            {
                                            app.status
                                            }

                                        </span>

                                    </td>

                                    

                                </tr>

                            ))
                        }

                    </tbody>

                    

                </table>

                </div>

            </div>

        </div>

    );

}

export default MyApplications;