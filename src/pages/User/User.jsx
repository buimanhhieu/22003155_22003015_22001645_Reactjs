// src/pages/User/User.jsx
import React from "react"
import * as S from "./user.style"
import { path } from "src/constants/path"
import { Routes, Route, Navigate } from "react-router-dom"
import Profile from "./Profile/Profile"
import Password from "./Password/Password"
import Purchase from "./Purchase/Purchase"

function User() {
  return (
    <S.Container className="container">
      <S.Sidebar>
        <S.Brief>
          <S.BriefAvatar to={path.profile}>
            <img
              src="https://lh3.googleusercontent.com/..."
              alt="avatar"
            />
          </S.BriefAvatar>
          <S.BriefRight>
            <S.BriefRightUsername>quocuvongta1023@gmail.com</S.BriefRightUsername>
            <S.BriefEdit to={path.profile}>
              <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                  fill="#9B9B9B"
                  fillRule="evenodd"
                />
              </svg>
              Sửa hồ sơ
            </S.BriefEdit>
          </S.BriefRight>
        </S.Brief>

        <S.SidebarMenu>
          <S.SideBarMenuEntry to={path.profile}>
            <S.SideBarMenuEntryIcon>
              <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
            </S.SideBarMenuEntryIcon>
            Tài khoản của tôi
          </S.SideBarMenuEntry>

          <S.SideBarMenuEntry to={path.password}>
            <S.SideBarMenuEntryIcon>
              <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
            </S.SideBarMenuEntryIcon>
            Đổi mật khẩu
          </S.SideBarMenuEntry>

          <S.SideBarMenuEntry to={path.purchase}>
            <S.SideBarMenuEntryIcon>
              <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" />
            </S.SideBarMenuEntryIcon>
            Đơn mua
          </S.SideBarMenuEntry>
        </S.SidebarMenu>
      </S.Sidebar>

      <S.Main>
        <Routes>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="password" element={<Password />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="*" element={<Navigate to="profile" replace />} />
        </Routes>
      </S.Main>
    </S.Container>
  )
}

export default User
