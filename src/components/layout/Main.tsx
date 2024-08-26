import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import s from './layout.module.scss'

const Layout = () => (
  <div className={s.layout}>
    <Header />
    <main className={s.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
