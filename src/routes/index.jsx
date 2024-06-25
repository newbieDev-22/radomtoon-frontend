import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomeDummy from "../pages/HomeDummy";

const Header = lazy(() => import('../layouts/Header'))
const Footer = lazy(() => import('../layouts/Footer'))
const Landing = lazy(() => import('../pages/Landing'))
const LogIn = lazy(() => import('../pages/LogIn'))
const Home = lazy(() => import('../pages/Home'))
const Campaign = lazy(() => import('../pages/Campaign'))
const Tier = lazy(() => import('../pages/SelectTier'))
const Payment = lazy(() => import('../pages/Payment'))

const router = createBrowserRouter([ {
  path: '/',
  element:
  <>
    <Header />
    <div className="min-h-[80vh]"><Outlet /></div>
    <Footer />
  </>,
  children: [
    { path: '/landing', element: <Landing />},
    { path: '/', element: <Home />},
    { path: '/homedummy', element: <HomeDummy /> },
    { path: '/login', element: <LogIn />},

    { path: '/campaign/:productId', element: <Campaign />},
    { path: '/campaign/:productId/payment', element: <Payment />},
    { path: '/campaign/:productId/tiers', element: <Tier />},
    
    { path: '/campaign/:productId/tiers', element: <Tier />},
    
  ]
} ])

export default function Router() {
  return <RouterProvider router={router} />
}