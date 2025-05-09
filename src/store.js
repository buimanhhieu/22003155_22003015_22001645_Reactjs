import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./pages/Auth/auth.slice.jsx"
import appReducer from "./app.slice.jsx"
import cartReducer from "./pages/Cart/cart.slice.jsx"

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  cart: cartReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE === "development", // Vite dùng import.meta.env thay vì process.env
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
