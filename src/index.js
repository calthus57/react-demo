import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store, persistor } from "./08-antd-mobile/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./08-antd-mobile/App";



const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>);

// root.render(
//   <App/>);

