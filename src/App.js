import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import MyApplications from "./pages/MyApplications";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import MyJobs from "./pages/MyJobs";
import Applicants from "./pages/Applicants";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import RecruiterProfile from "./pages/RecruiterProfile";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/candidate"
          element={<CandidateDashboard />}
        />

        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />

        <Route
    path="/my-applications"
    element={<MyApplications />}
      />

      <Route
    path="/profile"
    element={<Profile />}
      />

      <Route
    path="/post-job"
    element={<PostJob />}
      />

    <Route
    path="/my-jobs"
    element={<MyJobs />}
      />

    <Route
    path="/applicants/:jobId"
    element={<Applicants />}
      />

      <Route
    path="/about"
    element={<About />}
      />

      <Route
    path="/contact"
    element={<Contact />}
      />

      <Route
    path="/recruiter-profile"
    element={<RecruiterProfile />}
      />
      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

export default App;