import { useContext, useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import AppContextProvider from "./Context/AppContextProvider";
import UserList from "./components/User/UserList";
import CounterWithRedux from "./components/CounterWithRedux";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div className="card">
        {/*<Counter title="Contador" initialValue={0} />*/}
        <CounterWithRedux />
      </div>
    </div>
  );
}

export default App;
