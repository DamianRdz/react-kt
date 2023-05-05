import React, { PropsWithChildren, useReducer } from "react";
import { AppReducer } from "../reducers/AppReducer";
import { AppContext, INITIAL_STATE } from "./AppContext";

interface Props {}

const AppContextProvider: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
