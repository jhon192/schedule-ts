import axios from "axios";
import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";
import { ContactDatas } from "./interfaces/ContactDatas";

const App = (): JSX.Element => {
  const [Contactdata, setContactdata] = useState<ContactDatas[]>([]);

  const [data, setData] = useState<ContactDatas[]>([]);

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getData = () => {
    console.log(data);
  };

  

  useEffect(() => {
    const getContactData = () => {
      axios.get<ContactDatas[]>("https://fierce-river-38674.herokuapp.com/api/schedule").then((value) => {
        value.data.map((value) => (
          setContactdata([
            ...Contactdata,
            {
              name: value.name,
              lastname: value.lastname,
              phone_number: value.phone_number,
            },
          ])
        ))
      })
    }
  
    return () => {
      getContactData();
      console.log(Contactdata);
    }
  }, [Contactdata])
  

  return (
    <div className="w-100 h-100 d-flex">
      <Schedule changeData={changeData} getData={getData} />
      <Contacts Contacts={Contactdata} />
    </div>
  );
};

export default App;
