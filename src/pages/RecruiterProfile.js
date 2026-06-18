import { useEffect, useState } from "react";
import API from "../services/api";

function RecruiterProfile() {

    const [user, setUser] = useState({});

    useEffect(() => {

        loadProfile();

    }, []);

   const loadProfile = async () => {

    try {

        const userId =
            sessionStorage.getItem("userId");

        const result =
            await API.get(
                `/users/${userId}`
            );

        setUser(result.data);

    }
    catch(error){

        console.log(error);

    }

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