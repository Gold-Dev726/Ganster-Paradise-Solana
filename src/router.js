import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts/main";
import DashboardLayout from "layouts/dashboard";
import Homepage from "./pages/Homepage";
import Collectionpage from "./pages/Collectionpage";
import Buypage from "./pages/Buypage";
import Mypage from "./pages/Mypage";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/collection", element: <Collectionpage /> }
      ]
    }
  ]);
}

// IMPORT COMPONENTS
