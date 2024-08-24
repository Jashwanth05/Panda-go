import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-5 profile">
              <div className="d-flex align-items-center mb-4">
                <figure className="avatar avatar-profile text-center mr-3">
                  <img
                    className="rounded-circle figure-img img-fluid"
                    src={user?.avatar.url || ""}
                    alt={user?.name || "WSA Developer"}
                  />
                </figure>
                <span>Welcome {user?.name || "WSA Developer"}!</span>
              </div>
              <Link to="./UpdateProfile.jsx" id="edit_profile" className="btn btn-primary btn-block my-5">
                Edit Profile
              </Link>
              <h4>Full Name:</h4>
              <p>{user?.name || "WSA Developer"}</p>

              <h4>Email Address</h4>
              <p>{user?.email || "abc@email.com"}</p>

              <h4>Joined On</h4>
              <p>{user?.createdAt }</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
