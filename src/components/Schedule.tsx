import React from "react";

const Schedule = () => {
  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">
          <form className="">
            <div className="m-1 p-1 form-floating">
              <input type="text" className="form-control" placeholder="Name" />
              <label className="form-label">Name</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="lastname"
              />
              <label className="form-label">Lastname</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
              />
              <label className="form-label">Phone number</label>
            </div>
            <div className="m-1 p-1 text-center">
              <input
                type="submit"
                className="btn btn-success"
                value="Send info"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
