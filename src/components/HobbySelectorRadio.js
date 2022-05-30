import React, { useState } from "react";

export const HobbySelectorRadio = () => {
  let [hobby, setHobby] = useState(null);

  // Update radio button
  let updateRadiio = (event) => {
    setHobby(event.target.value);
  };
  return (
    <>
      {/* <pre>{JSON.stringify(hobby)}</pre> */}

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <p className="h3">Hobby Selector</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <form>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="coading"
                          name="hobby"
                          id="coadingradio"
                          onChange={updateRadiio}
                        />
                        <label class="form-check-label" htmlFor="coadingRadio">
                          Coading
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="eating"
                          name="hobby"
                          id="eatingRadio"
                          onChange={updateRadiio}
                        />
                        <label class="form-check-label" htmlFor="eatingRadio">
                          Eating
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="sleeping"
                          name="hobby"
                          id="sleepingRadio"
                          onChange={updateRadiio}
                        />
                        <label class="form-check-label" htmlFor="sleepingRadio">
                          Sleeping
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="movies"
                          name="hobby"
                          id="movieRadio"
                          onChange={updateRadiio}
                        />
                        <label class="form-check-label" htmlFor="movieRadio">
                          Movie
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-8">
                    {hobby === "coading" ? (
                      <>
                        <div className="card bg-success text-white animated jello">
                          <p className="display-4">Coading</p>
                        </div>
                      </>
                    ) : null}

                    {hobby === "sleeping" ? (
                      <>
                        <div className="card bg-warning text-white animated zoomIn dely-1s">
                          <marquee>
                            <p className="display-4">Sleeping</p>
                          </marquee>
                        </div>
                      </>
                    ) : null}

                    {hobby === "eating" ? (
                      <>
                        <div className="card bg-secondary text-white animated zoomIn">
                          <p className="display-4">Eating</p>
                        </div>
                      </>
                    ) : null}

                    {hobby === "movies" ? (
                      <>
                        <div className="card bg-dark text-white animated jello">
                          <p className="display-4">Movies Watching</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
