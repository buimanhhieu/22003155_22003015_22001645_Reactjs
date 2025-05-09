import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { payloadCreator } from "src/utils/helper"
import purchaseApi from "src/api/purchase.api"
import { logout } from "../Auth/auth.slice.jsx"

export const getCartPurchases = createAsyncThunk(
  "cart/getCartPurchases",
  payloadCreator(purchaseApi.getCartPurchases)
)

export const updatePurchase = createAsyncThunk(
  "cart/updatePurchase",
  payloadCreator(purchaseApi.updatePurchases)
)

export const deletePurchase = createAsyncThunk(
  "cart/deletePurchase",
  payloadCreator(purchaseApi.deletePurchases)
)

export const buyPurchase = createAsyncThunk(
  "cart/buyPurchase",
  payloadCreator(purchaseApi.buyPurchases)
)

const cart = createSlice({
  name: "cart",
  initialState: {
    purchases: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartPurchases.fulfilled, (state, action) => {
        state.purchases = action.payload.data
      })
      .addCase(logout.fulfilled, (state) => {
        state.purchases = []
      })
  }
})

const cartReducer = cart.reducer
export default cartReducer
