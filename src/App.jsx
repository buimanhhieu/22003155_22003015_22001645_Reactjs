import React from "react"
import "normalize.css"
import "./assets/styles/global.scss"
import AppRoutes from "./Routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Authorization from "./components/Authorization/Authorization"
import Loading from "./components/Loading/Loading"

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Loading />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
