import { useLocation, Outlet } from "react-router-dom";
import { Box, Hidden } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <Box
        sx={{
          pt: { xs: 5, md: 10 },
          background: "url(/images/bg.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat, no-repeat",
          // backgroundPosition: "0px 0px, center bottom"
          height: "100vh"
        }}
      >
        <MainNavbar />
        <Box>
          <Outlet />
        </Box>
        <MainFooter />
      </Box>
    </>
  );
}
