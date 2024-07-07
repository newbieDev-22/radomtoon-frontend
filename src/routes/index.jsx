import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
const ProductManagePage = lazy(() => import("../pages/ProductManagePage"));
const CampaignSetup = lazy(() => import("../pages/CampaignSetup"));
const HomeDummy = lazy(() => import("../pages/HomeDummy"));
const MainContainer = lazy(() => import("../layouts/MainContainer"));
const CategoryContainer = lazy(() => import("../features/home-filter/components/CategoryContainer"));

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
        element: <PaymentPage />,
      },
      { path: "/supporter-histories", element: <SupporterHistoryPage /> },
      { path: "/creator-panel/:creatorId", element: <CreatorPanel /> },
      { path: "/creator-campaign-setup", element: <CampaignSetup /> },
      { path: "/product/:productId/status", element: <ProductManagePage /> },
      { path: "/product/:categotyProductId/", element: <CategoryContainer /> },
      { path: "/admin-panel", element: <AdminPanel /> },
      { path: "/home-dummy", element: <HomeDummy /> },
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
