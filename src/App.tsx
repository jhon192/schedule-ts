import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";

const App = () => {
  return (
    <div className="w-100 h-100 d-flex">
      <Schedule />
      <Contacts />
    </div>
  );
};

export default App;
