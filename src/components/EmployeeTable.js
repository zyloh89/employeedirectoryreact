import React from "react";

function EmployeeTable(props) {
  return (
  <div className="card">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-auto img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div class="col-md-auto">
          {props.firstName} {props.surname}
        </div>
        <div class="col-md-auto">
          {props.email}
        </div>
        <div class="col-md-auto">
          {props.phone}
        </div>
      </div>
    </div>
  </div>
  );
}

export default EmployeeTable;
