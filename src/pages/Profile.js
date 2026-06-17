import { useEffect, useState } from "react";
import API from "../services/api";
import Loader from "../components/Loader";
import { successAlert, errorAlert } from "../utils/alerts";


function Profile() {

    const [stats, setStats] = useState({});
    const [user, setUser] = useState({});
    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            setLoading(true);

            const userId =
                sessionStorage.getItem("userId");

            const userResult =
                await API.get(
                    `/api/users/${userId}`
                );

                
            setUser(userResult.data);

            let statResult;

            if (
                userResult.data.role === "CANDIDATE"
            ) {

                statResult =
                    await API.get(
                        `/api/applications/stats/${userId}`
                    );

            }
            else {

                statResult =
                    await API.get(
                        `/api/users/recruiter-stats/${userId}`
                    );

            }


           

            setStats(statResult.data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

        setLoading(false);

    }

    };

    const uploadResume = async () => {

        if (!resume) {

            errorAlert("Please select a resume");

            return;

        }

        try {

            const userId =
                sessionStorage.getItem("userId");

            const formData =
                new FormData();

            formData.append(
                "file",
                resume
            );

            await API.post(

                `/api/users/upload-resume/${userId}`,

                formData

            );

            successAlert(
                "Resume Uploaded Successfully"
            );

            loadProfile();
            setResume(null);

        }
        catch (error) {

            console.log(error);

            errorAlert(
                "Resume Upload Failed"
            );

        }

    };

    const uploadPhoto = async (selectedPhoto) => {

    try {

        const formData = new FormData();

        formData.append(
            "file",
            selectedPhoto
        );

        await API.post(
            `/api/users/upload-photo/${user.userId}`,
            formData
        );

        successAlert(
            "Photo Uploaded Successfully"
        );

        loadProfile();

    }
    catch(error){

        console.log(error);

        errorAlert(
            "Photo Upload Failed"
        );

    }

};

if (loading) {

    return <Loader />;

}

    return (

        <div className="container mt-5">

            <div className="card profile-card shadow-lg p-5">

                <div className="text-center">

    <img
    src={
        user.profilePhoto
        ?
        `https://nexthire-backend-production-b9c8.up.railway.app/uploads/${user.profilePhoto}`
        :
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
    alt="profile"
    className="profile-photo"
/>

    <div className="mt-3">

        <button
            className="btn btn-warning"
            onClick={() =>
                document
                    .getElementById("photoInput")
                    .click()
            }
        >
            Change Photo
        </button>

        <input
    id="photoInput"
    type="file"
    accept="image/*"
    style={{ display: "none" }}
    onChange={(e) => {

        const file = e.target.files[0];

        if(file){

            uploadPhoto(file);

        }

    }}
/>
        <h2 className="fw-bold">

                        {user.fullName}

                    </h2>

                    <span
                        className={
                            user.role === "RECRUITER"
                                ? "badge bg-warning fs-6"
                                : "badge bg-success fs-6"
                        }
                    >

                        {user.role}

                    </span>

    </div>

</div>

                <hr />

                <div className="row mt-4">

                    <div className="col-md-6">

                        <h5>

                            📧 Email

                        </h5>

                        <p>

                            {user.email}

                        </p>

                    </div>

                    <div className="col-md-6">

                        <h5>

                            🆔 User ID

                        </h5>

                        <p>

                            {user.userId}

                        </p>

                    </div>

                </div>

                {
                    user.role === "CANDIDATE" &&

                    <>

                        <hr />

                        <h3 className="mb-4">

                            📄 Resume

                        </h3>
                        <div className="mb-3">

                         {
                              user.resumeUrl ?

                              <span className="badge bg-success fs-6">
                                  Resume Uploaded ✅
                             </span>

                                       :

                             <span className="badge bg-danger fs-6">
                                   Resume Not Uploaded ❌
                             </span>
                         }

                        </div>



                        <div className="row g-3">

                            <div className="col-md-8">

                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={(e) =>
                                        setResume(
                                            e.target.files[0]
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-4">

                                <button
                                    className="btn btn-primary w-100"
                                    onClick={uploadResume}
                                >

                                    {
                                         user.resumeUrl
                                        ? "Replace Resume"
                                        : "Upload Resume"
                                    }

                                </button>

                            </div>
                                  {
    user.resumeUrl && (

        <div className="mt-3">

            <h6 className="text-light">
                Filename:
            </h6>

            <p className="text-light mb-3">

                {
                user.resumeUrl
                .split("/")
                .pop()
                .replace(/^[0-9]+_/, "")
                }

            </p>

            <a
    href={user.resumeUrl}
    target="_blank"
    rel="noreferrer"
    className="btn btn-success"
>
    View Resume
</a>

        </div>

    )
}

                        </div>

                    </>

                }

                <hr />

                <h3 className="text-center mb-4">

                    📊 Statistics

                </h3>

                {
                    user.role === "CANDIDATE"

                        ?

                        <div className="row g-4">

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.applied || 0}

                                    </h2>

                                    <p>

                                        Applied

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.shortlisted || 0}

                                    </h2>

                                    <p>

                                        Shortlisted

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.rejected || 0}

                                    </h2>

                                    <p>

                                        Rejected

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.pending || 0}

                                    </h2>

                                    <p>

                                        Pending

                                    </p>

                                </div>

                            </div>

                        </div>

                        :

                        <div className="row g-4">

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.jobsPosted || 0}

                                    </h2>

                                    <p>

                                        Jobs Posted

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.applicants || 0}

                                    </h2>

                                    <p>

                                        Applicants

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.shortlisted || 0}

                                    </h2>

                                    <p>

                                        Shortlisted

                                    </p>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="stat-card">

                                    <h2>

                                        {stats.rejected || 0}

                                    </h2>

                                    <p>

                                        Rejected

                                    </p>

                                </div>

                            </div>

                        </div>

                }

            </div>

        </div>

    );

}

export default Profile;