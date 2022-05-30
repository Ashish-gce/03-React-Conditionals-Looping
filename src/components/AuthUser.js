import React, { useState } from "react";

export const AuthUser = () => {
  let [loggedIn, setLoggedIn] = useState(false);

  let login = () => {
    setLoggedIn(true);
  };

  let logOut = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-white bg-secondary lead">
                <p className="h3 text-center">Auto Authorization</p>
              </div>
              <div className="card-body">
                {!loggedIn ? (
                  <small>
                    <button className="btn btn-success btn-sm" onClick={login}>
                      Login
                    </button>
                    You're in Guest Dashboard,
                    <span className="text-warning font-weight-bold">
                      plz login for Admin Dasshboard{" "}
                    </span>
                  </small>
                ) : (
                  <small>
                    <button className="btn btn-danger btn-sm" onClick={logOut}>
                      LogOut
                    </button>
                    You're in Admin Dashboard,
                    <span className="text-warning font-weight-bold">
                      Logout to go back guest Dasshboard
                    </span>
                  </small>
                )}

                {loggedIn ? (
                  <h3>Welcome Back Admin Dashboard</h3>
                ) : (
                  <h3>Welcome to Guest Dashboard</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
