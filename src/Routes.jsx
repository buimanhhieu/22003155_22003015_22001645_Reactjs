import React, { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { path } from "./constants/path"

import MainLayout from "./Layouts/MainLayout/MainLayout"
import RegisterLayout from "./Layouts/RegisterLayout/RegisterLayout"
import CartLayout from "./Layouts/CartLayout/CartLayout"
import Fallback from "./components/Fallback/Fallback"
import AuthenticatedGuard from "./guard/AuthenticatedGuard"
import UnauthenticatedGuard from "./guard/UnauthenticatedGuard"

const Home = lazy(() => import("./pages/Home/Home"))
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"))
const Login = lazy(() => import("./pages/Auth/Login/Login"))
const Register = lazy(() => import("./pages/Auth/Register/Register"))
const Cart = lazy(() => import("./pages/Cart/Cart"))
const User = lazy(() => import("./pages/User/User"))
const NotFound = lazy(() => import("./pages/NotFound/NotFound"))

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path={path.productDetail}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ProductDetail />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path={path.cart}
        element={
          <AuthenticatedGuard>
            <CartLayout>
              <Suspense fallback={<Fallback />}>
                <Cart />
              </Suspense>
            </CartLayout>
          </AuthenticatedGuard>
        }
      />
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Suspense fallback={<Fallback />}>
                <Login />
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />
      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Suspense fallback={<Fallback />}>
                <Register />
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      />
      <Route
        path={path.user}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <User />
              </Suspense>
            </MainLayout>
          </AuthenticatedGuard>
        }
      />
      <Route
        path={path.notFound}
        element={
          <Suspense fallback={<div style={{ padding: 20 }}>Đang tải...</div>}>
            <NotFound />
          </Suspense>
        }
      />
      {/* Catch-all path redirect */}
      <Route path="*" element={<Navigate to={path.home} />} />
    </Routes>
  )
}

export default AppRoutes
