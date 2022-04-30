import axios from "axios";
import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";
import { ContactDatas } from "./interfaces/ContactDatas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./Edit";

const App = (): JSX.Element => {
  const [Contactdata, setContactdata] = useState<ContactDatas[]>([]);

  const [dataInfo, setDataInfo] = useState<ContactDatas[]>([]);

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInfo({ ...dataInfo, [e.target.name]: e.target.value });
  };
  
  const [dataUpdated, setDataUpdated] = useState<ContactDatas[]>([]);

  const changeDataUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUpdated({ ...dataUpdated, [e.target.name]: e.target.value });
  };

  const getContactData = async () => {
    await axios
      .get<ContactDatas[]>(
        "https://fierce-river-38674.herokuapp.com/api/schedule"
      )
      .then((value) => {
        value.data.map((value) =>
          setContactdata((Contactdata) => [...Contactdata, value])
        );
      });
  };

  const postContactData = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://fierce-river-38674.herokuapp.com/api/schedule",
      data: dataInfo,
    })
      .then((result) => result.data)
      .then((value) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const putContactData = async (id: string) => {
    await axios({
      method: "PUT",
      url: `https://fierce-river-38674.herokuapp.com/api/schedule/${id}`,
      data: dataUpdated,
    })
      .then((result) => result.data)
      .then((value) => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteContactData = async (id: number) => {
    if (window.confirm("Quieres eliminar este registro?")) {
      await axios({
        method: "DELETE",
        url: `https://fierce-river-38674.herokuapp.com/api/schedule/${id}`,
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <div className="w-100 h-100 d-flex">
            <Schedule
              changeData={changeData}
              postContactData={postContactData}
            />
            <Contacts
              Contacts={Contactdata}
              deleteContactData={deleteContactData}
            />
          </div>
        </Route>
        <Route path={"/edit/:id"}>
          <Edit changeDataUpdated={changeDataUpdated} putContactData={putContactData}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
