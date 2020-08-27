import React from "react";
import "./App.css";
import UserForm from "./components/CustomHooks/UserForm";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Arash"}>
        <ChannelContext.Provider value={"Zich"}> */}
      <UserForm />
      {/* </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
