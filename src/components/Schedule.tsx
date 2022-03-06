import React from "react";

interface props {
  getContactdata(event: React.ChangeEvent<HTMLInputElement>): void
  getClick(event: React.MouseEvent<HTMLButtonElement>): void
}

const Schedule = ({ getContactdata,  getClick}: props) => {
  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={getContactdata}
              />
              <label className="form-label">Name</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="lastname"
                name="lastname"
                onChange={getContactdata}
              />
              <label className="form-label">Lastname</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                name="number"
                onChange={getContactdata}
              />
              <label className="form-label">Phone number</label>
            </div>
            <div className="m-1 p-1 text-center">
              <button className="btn btn-success" onClick={getClick}>
                send info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
