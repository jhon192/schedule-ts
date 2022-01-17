import { useState } from "react";
import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";
import { ContactDatas } from "./interfaces/ContactDatas";



const App = (): JSX.Element => {

  const [Contactdata, setContactdata] = useState<ContactDatas[]>([]);

  return (
    <div className="w-100 h-100 d-flex">
      <Schedule />
      <Contacts Contacts={Contactdata}/>
    </div>
  );
};

export default App;
