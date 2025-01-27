import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageProvider } from "./Context/PageContext";
import $ from 'jquery'; 
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <PageProvider>
  <BrowserRouter>
    <GlobalStyles />
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </BrowserRouter>
  </PageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
