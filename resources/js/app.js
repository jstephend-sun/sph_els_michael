import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CookiesProvider } from "react-cookie";

import Main from "./components/Main";
import reducers from "./reducers";

ReactDOM.render(
    <CookiesProvider>
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Main />
            </Router>
        </Provider>
    </CookiesProvider>,

    document.querySelector("#root")
);
