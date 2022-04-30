import React from "react";

interface props {
  changeData(e: React.ChangeEvent<HTMLInputElement>): void
  postContactData(e: React.FormEvent): void
}

const Schedule = ({ changeData, postContactData }: props) => {
  return (
    <div className="h-100 w-100 d-flex align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">
          <form onSubmit={postContactData}>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={changeData}
              />
              <label className="form-label">Name</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="lastname"
                name="lastname"
                onChange={changeData}
              />
              <label className="form-label">Lastname</label>
            </div>
            <div className="m-1 p-1 form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                name="phone_number"
                onChange={changeData}
              />
              <label className="form-label">Phone number</label>
            </div>
            <div className="m-1 p-1 text-center">
              <input type="submit" value="Send Information!!" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
