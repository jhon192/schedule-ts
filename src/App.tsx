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

  const getContactdata = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      lastname: { value: string };
      number: { value: number };
    };

    setContactdata([
      ...Contactdata,
      {
        name: target.name.value,
        lastname: target.lastname.value,
        number: target.number.value,
      },
    ]);

    
  };

  return (
    <div className="w-100 h-100 d-flex">
      <Schedule getContactdata={getContactdata} />
      <Contacts Contacts={Contactdata} />
    </div>
  );
};

export default App;
