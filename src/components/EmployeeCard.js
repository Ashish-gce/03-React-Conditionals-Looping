import React, { useState } from "react";

export const EmployeeCard = () => {
  // define state for future change in value
  let [employees, setEmployees] = useState([
    //   Array of nobjects
    {
      sno: 0,
      name: "Ashish",
      age: 25,
      education: "B.Tech",
      designation: "Software Developer",
      location: "Hydrabad",
    },
    {
      sno: 1,
      name: "Manish",
      age: 21,
      education: "NEET",
      designation: "studying",
      location: "Jehanabad",
    },
    {
      sno: 2,
      name: "Ranjan",
      age: 25,
      education: "B.Tech",
      designation: "TCS",
      location: "Patna",
    },
    {
      sno: 3,
      name: "Ujjawal",
      age: 25,
      education: "B.Tech",
      designation: "Blue Berry",
      location: "Katihar",
    },
    {
      sno: 4,
      name: "Abhishek",
      age: 25,
      education: "B.Tech",
      designation: "Innoskacks",
      location: "Motihari",
    },
  ]);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            {employees.map((employee) => {
              return (
                <>
                  <div key={employee.sno} className="card m-2">
                    <div className="card-body bg-danger">
                      <div className="col-md-5">
                        <ul className="list-group">
                          <li className="list-group-item">
                            SNO : {employee.sno}
                          </li>
                          <li className="list-group-item">
                            NAME : {employee.name}
                          </li>
                          <li className="list-group-item">
                            AGE : {employee.age}
                          </li>
                          <li className="list-group-item">
                            EDUCATION : {employee.education}
                          </li>
                          <li className="list-group-item">
                            DESIGNATION : {employee.designation}
                          </li>
                          <li className="list-group-item">
                            LOCATION : {employee.location}
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-5 float-right m-auto">
                        <ul className="list-group">
                          <li className="list-group-item">
                            SNO: {employee.sno}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="col"> */}
            {/* {employees.map((employee) => {
                return ( */}
            {/* <div key={employee.sno}> */}
            {/* <ul className="list-group">
                <li className="list-group-item">SNO: {employee.sno}</li>
              </ul> */}
            {/* </div> */}
            {/* );
              })} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
