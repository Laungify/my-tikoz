import './wdyr'; // <--- first import

import 'react-hot-loader';
import {hot} from 'react-hot-loader/root';

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store,persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./index.css";

const HotApp = hot(App);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Router>
          <HotApp />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
