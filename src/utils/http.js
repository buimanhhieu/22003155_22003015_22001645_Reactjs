import axios from "axios"
import LocalStorage from "src/constants/localStorage"
import { toast } from "react-toastify"

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL, // 👉 Dùng URL cố định để dễ kiểm tra
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    })

    // Xử lý response trả về
    this.instance.interceptors.response.use(
      response => {
        const result = { ...response.data, status: response.status }
        return result
      },
      error => {
        const { response } = error || {}
        if (response?.status === 401) {
          toast.error(response.data.message || "Bạn chưa đăng nhập", {
            position: "top-center",
            autoClose: 3000
          })
        }
        const result = response
          ? { ...response.data, status: response.status }
          : { message: "Lỗi không xác định", status: 500 }

        return Promise.reject(result)
      }
    )

    // Thêm token nếu có
    this.instance.interceptors.request.use(
      config => {
        const token = localStorage.getItem(LocalStorage.accessToken)
        if (token) {
          config.headers.authorization = token
        }
        return config
      },
      error => {
        return Promise.reject(error?.response || { message: "Lỗi yêu cầu" })
      }
    )
  }

  get(url, config = null) {
    return this.instance.get(url, config)
  }

  post(url, data, config = null) {
    return this.instance.post(url, data, config)
  }

  put(url, data, config = null) {
    return this.instance.put(url, data, config)
  }

  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config
    })
  }
}

const http = new Http()
export default http
