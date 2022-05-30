import React, { useState } from "react";
import { customerData } from "./customerStore";

export const Customer = () => {
  let [customers, setCustomer] = useState(customerData);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card z-depth-0">
              <div className="card-header text-white bg-secondary text-center">
                <p className="h2">Customer's Details</p>
              </div>
              <div className="card-body">
                <p className="lead">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <table className="table table-hover table-striped text-center table-primary">
              <thead className="bg-info text-white">
                <tr>
                  <th>S.No</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {customer.login.uuid.substring(
                            customer.login.uuid.length - 5
                          )}
                        </td>
                        <td>
                          <img
                            src={customer.picture.large}
                            alt=""
                            width="60"
                            height="60"
                          />
                        </td>
                        <td>{customer.name.first}</td>
                        <td>{customer.dob.age}</td>
                        <td>{customer.email}</td>
                        <td>{customer.location.street.name}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
