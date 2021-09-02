import React from 'react';
import AppRoute from "./routes/App.Route";
import {Provider} from "react-redux";
import rootStore from "./redux";

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <AppRoute/>
    </Provider>
  );
}

export default App;
