import React, { useState } from "react";
import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";
import { ContactDatas } from "./interfaces/ContactDatas";

const App = (): JSX.Element => {
  const [Contactdata, setContactdata] = useState<ContactDatas[]>([
    {
      name: "jhon",
      lastname: "garcia",
      number: 1234567890,
    },
  ]);

  const getContactdata = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactdata([ ...Contactdata, { [event.target.name]: event.target.value } ])
  };

  const getClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault()

    console.log(Contactdata);

  }

  return (
    <div className="w-100 h-100 d-flex">
      <Schedule getContactdata={getContactdata} getClick={getClick} />
      <Contacts Contacts={Contactdata} />
    </div>
  );
};

export default App;
