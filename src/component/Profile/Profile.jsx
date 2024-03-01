import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = jwtDecode(localStorage.getItem("token"));
    setUserName(user.name);
    setUserRole(user.role);
    setUserId(user.id);
  }, []);

  return (
    <>
      <div className="vh-100 d-flex flex-column align-items-center">
        <img src={require("../../images/profile.jpg")} className="col-1" alt="" />
          <h2>
            Name: <span className="text-success">{userName}</span>
          </h2>
          <h6>ID: <span className="text-success">{userId}</span></h6>
          <h5>
            Role: <span className="text-success">{userRole}</span>
          </h5>
      </div>
    </>
  );
};
export default Profile;
