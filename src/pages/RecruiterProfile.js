import { useEffect, useState } from "react";
import API from "../services/api";

function RecruiterProfile() {

    const [user, setUser] = useState({});

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        const result = await API.get(
            "/users/1"
        );

        setUser(result.data);

    };

    

    return (

        <div className="container mt-5">

            <div className="card shadow-lg p-4">

                <h2 className="text-center text-success">

                    Recruiter Profile

                </h2>

                <hr />

                <h4>

                    👤 {user.fullName}

                </h4>

                <h5>

                    📧 {user.email}

                </h5>

                <h5>

                    💼 {user.role}

                </h5>

            </div>

        </div>

    );

}

export default RecruiterProfile;