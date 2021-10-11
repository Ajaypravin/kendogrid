import React from "react";
import { Provider } from "react-redux";
import { store } from "./state";
import StateListContainer from "./containers/stateList-container";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <StateListContainer />
    </Provider>
  );
};

export default App;
