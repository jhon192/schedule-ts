import React from "react";

const Contacts = () => {
  return (
    <div className="w-100 h-100 m-1 p-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
              <td>Jhon</td>
              <td>Garcia</td>
              <td>809-398-6251</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
