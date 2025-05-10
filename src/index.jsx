import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import store from "./store"
import "./i18n/i18n"

const basename = import.meta.env.BASE_URL // Lấy base URL từ vite.config.js

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)