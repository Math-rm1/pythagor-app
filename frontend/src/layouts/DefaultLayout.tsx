import { Outlet } from 'react-router-dom'
import { Attribution } from '../components/Attribution'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Attribution />
    </>
  )
}
