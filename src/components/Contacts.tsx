import { ContactDatas } from "../interfaces/ContactDatas";

interface Props {
  Contacts: ContactDatas[];
}

const Contacts = ({ Contacts }: Props) => {
  return (
    <div className="w-100 h-100 m-1 p-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map((x) => (
            <tr className="table-info">
            <td>{x.name}</td>
            <td>{x.lastname}</td>
            <td>{x.number}</td>
            <td><button className="btn btn-warning rounded-3"><i className="fas fa-edit"></i></button></td>
            <td><button className="btn btn-danger rounded-3"><i className="fas fa-trash"></i></button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
