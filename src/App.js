import React from "react";
import "./App.css";
import CounterOne from "./components/CustomHooks/CounterOne";
import CounterTwo from "./components/CustomHooks/CounterTwo";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Arash"}>
        <ChannelContext.Provider value={"Zich"}> */}
      <CounterOne />
      <CounterTwo />
      {/* </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
