import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  if (userInfo)
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap ">
            <div className="p-8 lg:w-2/3 mx-auto">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-8 rounded-lg overflow-hidden  relative">
                <h1 className="title-font sm:text-2xl text-xl font-bold text-gray-900 mb-2 text-center">
                  User Details
                </h1>
                <div className="leading-relaxed mb-3 ">
                  <p className="text-lg font-semibold inline">
                    Username: &nbsp;
                  </p>{" "}
                  {userInfo.username}
                </div>
                <div className="leading-relaxed mb-3 ">
                  <p className="text-lg font-semibold inline">Email: &nbsp;</p>{" "}
                  {userInfo.email}
                </div>
                <div className="leading-relaxed mb-3">
                  <p className="text-lg font-semibold inline">
                    Hashed password: &nbsp;
                  </p>
                  {userInfo.password}
                </div>
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-400 py-4 w-1/4 mt-8 block mx-auto"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else {
    alert("User not Loggedin");
    return <Redirect to="/login" />;
  }
};

export default Profile;
