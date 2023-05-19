import { useContext, useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import AppContextProvider from "./Context/AppContextProvider";
import UserList from "./components/User/UserList";
import CounterWithRedux from "./components/CounterWithRedux";
import UserListWithRedux from "./components/User/UserListWithRedux";
import { useSelector } from "react-redux";
import { selectLoading } from "./store/slices/App";
import FormComponent from "./components/FormComponent";

function App() {
  const loading = useSelector(selectLoading);
  return (
    <div className="App">
      <div className="card">
        {/*<h3>Pending process: {loading.toString()}</h3>
        <CounterWithRedux />
        {/*<Counter title="Contador" initialValue={0} />

        <UserListWithRedux />*/}
        <FormComponent />
      </div>
    </div>
  );
}

export default App;
