import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectRouteCreator from "../features/authentication/components/ProtectRouteCreator";
import ProtectRouteSupporter from "../features/authentication/components/ProtectRouteSupporter";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const CreatorRegister = lazy(() => import("../pages/CreatorRegister"));
const SupporterRegister = lazy(() => import("../pages/SupporterRegister"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CampaignPage = lazy(() => import("../pages/CampaignPage"));
const SelectTierPage = lazy(() => import("../pages/SelectTierPage"));
const PaymentPage = lazy(() => import("../pages/PaymentPage"));
const SupporterHistoryPage = lazy(() => import("../pages/SupporterHistoryPage"));
const CreatorPanel = lazy(() => import("../pages/CreatorPanel"));
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const CreatorManagePage = lazy(() => import("../pages/CreatorManagePage"));
const CampaignSetup = lazy(() => import("../pages/CampaignSetup"));
const HomeByFilterProduct = lazy(() => import("../layouts/HomeByFilterProduct"));

const MainContainer = lazy(() => import("../layouts/MainContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/landing", element: <LandingPage /> },
      { path: "/", element: <HomePage /> },
      { path: "/campaign/:productId", element: <CampaignPage /> },
      { path: "/campaign/:productId/tier", element: <SelectTierPage /> },
      {
        path: "/campaign/:productId/tier/:tierId/payment",
        element: (
          <ProtectRouteSupporter>
            <PaymentPage />
          </ProtectRouteSupporter>
        ),
      },
      {
        path: "/supporter-histories",
        element: (
          <ProtectRouteSupporter>
            <SupporterHistoryPage />
          </ProtectRouteSupporter>
        ),
      },
      { path: "/creator-panel/:creatorId", element: <CreatorPanel /> },
      { path: "/search", element: <HomeByFilterProduct /> },
      {
        path: "/creator-campaign-setup",
        element: (
          <ProtectRouteCreator>
            <CampaignSetup />
          </ProtectRouteCreator>
        ),
      },
      {
        path: "/product/:productId/status",
        element: (
          <ProtectRouteCreator>
            <CreatorManagePage />
          </ProtectRouteCreator>
        ),
      },
      { path: "/admin-panel", element: <AdminPanel /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/creator-register", element: <CreatorRegister /> },
  { path: "/supporter-register", element: <SupporterRegister /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
