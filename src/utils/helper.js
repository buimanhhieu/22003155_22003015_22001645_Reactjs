// src/utils/helper.js

// Kiểm tra email hợp lệ
export const isEmail = (value) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

// Hàm tạo asyncThunk chung
export const payloadCreator = (asyncFunc) => async (data, thunkAPI) => {
  try {
    const res = await asyncFunc(data)
    return res
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

// Tạo nameId dùng cho URL, ví dụ "Product-Name-i.123"
export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(
    `${name.replace(/\s/g, "-").replace(/%/g, "")}-i.${_id}`
  )

// Lấy ID ra từ nameId, ví dụ "Product-Name-i.123" → "123"
export const getIdFromNameId = (url) => {
  if (typeof url !== "string" || !url) {
    console.warn("getIdFromNameId received invalid url:", url)
    return ""
  }
  const arr = url.split("-i.")
  return arr[arr.length - 1]
}

// Tính phần trăm giảm giá
export const SalePercent = (original, sale) =>
  Math.round(((original - sale) / original) * 100) + "%"

// Định dạng tiền với dấu phân cách hàng nghìn
export const formatMoney = (value, character = ".") =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)
