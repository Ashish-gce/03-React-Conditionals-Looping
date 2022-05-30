import React, { useState } from "react";

export const HobbySelector = () => {
  let [hobby, setHobby] = useState({
    eating: false,
    coding: false,
    sleeping: false,
    movies: false,
  });

  //   update check box
  let updateCheck = (event) => {
    setHobby({
      ...hobby,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      {/* <pre>{JSON.stringify(hobby)}</pre> */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="card-header bg-primary text-center text-white">
              <p className="lead font-weight-bold">Hobby Selector</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <form>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="eating"
                        value={hobby.eating}
                        onChange={updateCheck}
                        id="eatingCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="eatingCheckbox"
                      >
                        Eating
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="coding"
                        value={hobby.coding}
                        onChange={updateCheck}
                        id="codingCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="codingCheckbox"
                      >
                        Coding
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="sleeping"
                        value={hobby.sleeping}
                        onChange={updateCheck}
                        id="sleepingCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="sleepingCheckbox"
                      >
                        Sleeping
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="movies"
                        value={hobby.movies}
                        onChange={updateCheck}
                        id="moviesCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="moviesCheckbox"
                      >
                        Movie
                      </label>
                    </div>
                  </form>
                </div>

                <div className="col-md-8">
                  {hobby.eating ? (
                    <>
                      <div className="card bg-danger text-white animated jello">
                        <p className="h3">Eating</p>
                      </div>
                    </>
                  ) : null}
                  {hobby.coding ? (
                    <>
                      <div className="card bg-warning text-white animated jello">
                        <p className="h3">Coding</p>
                      </div>
                    </>
                  ) : null}
                  {hobby.sleeping ? (
                    <>
                      <div className="card bg-success text-white animated zoomIn">
                        <p className="h3">Sleepingng</p>
                      </div>
                    </>
                  ) : null}
                  {hobby.movies ? (
                    <>
                      <div className="card bg-secondary text-white animated jello">
                        <p className="h3">Watching Movie</p>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
