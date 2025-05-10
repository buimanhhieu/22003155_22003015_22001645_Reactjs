// src/components/Authorization/Authorization.jsx
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"        // ← đổi import
import { unauthorize } from "src/pages/Auth/auth.slice.jsx"
import { getCartPurchases } from "src/pages/Cart/cart.slice.jsx"
import { useAuthenticated } from "src/hooks/useAuthenticated"
import { path } from "src/constants/path"

function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()                        // ← thay thế useHistory
  const authenticated = useAuthenticated()

  // Khi API trả về 401, logout và redirect về login
  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      navigate(path.login, { replace: true })            // ← sử dụng navigate
    }
  }, [status, dispatch, navigate])

  // Khi đã authenticated, tự động fetch cart
  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [authenticated, dispatch])

  return null
}

export default Authorization