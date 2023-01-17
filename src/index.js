import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style/global-style";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/reducers";

const store = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);
