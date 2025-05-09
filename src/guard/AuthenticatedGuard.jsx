// src/guard/AuthenticatedGuard.jsx
import React, { Fragment } from "react"
import { Navigate } from "react-router-dom"
import { path } from "src/constants/path"
import { useAuthenticated } from "src/hooks/useAuthenticated"
import PropTypes from "prop-types"

function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (!authenticated) {
    // React Router v6: dùng Navigate thay cho Redirect
    return <Navigate to={path.login} replace />
  }

  return <Fragment>{children}</Fragment>
}

AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default AuthenticatedGuard
