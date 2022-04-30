import { Link } from "react-router-dom";
import { ContactDatas } from "../interfaces/ContactDatas";

interface Props {
  Contacts: ContactDatas[];
  deleteContactData(id: number): void;
}

const Contacts = ({ Contacts, deleteContactData }: Props) => {

  console.log(Contacts);

  return (
    <div className="w-100 h-100 m-1 p-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map((x) => (
            <tr className="table-info">
            <td>{x.name}</td>
            <td>{x.lastname}</td>
            <td>{x.phone_number}</td>
            <td><Link to={`/edit/${x.id}`} className="btn btn-warning rounded-3"><i className="fas fa-edit"></i></Link></td>
            <td><button className="btn btn-danger rounded-3" onClick={() => deleteContactData(x.id)}><i className="fas fa-trash"></i></button></td>
          </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Contacts;
