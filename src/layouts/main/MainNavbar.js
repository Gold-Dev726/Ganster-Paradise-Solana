import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Stack,
  Link,
  Typography
} from "@mui/material";
// hooks
import useOffSetTop from "hooks/useOffSetTop";
// components
import Logo from "components/Logo";

import PhantomButton from "components/PhantomButton";
import LanguagePopover from "./LanguagePopover";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 64;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  // transition: theme.transitions.create(["height", "background-color"], {
  //   easing: theme.transitions.easing.easeInOut,
  //   duration: theme.transitions.duration.shorter
  // }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled("div")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 20,
  zIndex: -1,
  margin: "auto",
  position: "absolute",
  width: "100%",
  boxShadow: `0 1px 2px 0 #ffffff20`
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <AppBar sx={{ boxShadow: 0, bgcolor: "black", backgroundImage: "none" }}>
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "transparent",
              height: APP_BAR_DESKTOP
            })
          }}
        >
          <Container maxWidth="xl">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={5}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ height: 64, px: 3, bgcolor: "#302929" }}
              >
                <Box component="img" src="/icons/menu.png" />
                <Typography>My Collections</Typography>
              </Stack>
              {/* <Box component={RouterLink} to="/"> */}
              <Typography variant="h4" align="center" lineHeight={1}>
                Gangsters <br />
                Paradise
              </Typography>
              {/* </Box> */}

              {/* <Hidden mdDown>
                <MenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              </Hidden> */}

              <Stack direction="row" spacing={2}>
                <PhantomButton />
              </Stack>
              <Hidden mdUp>
                <MenuMobile navConfig={navConfig} />
              </Hidden>
            </Stack>
          </Container>
        </ToolbarStyle>
        {isOffset && <ToolbarShadowStyle />}
      </AppBar>
    </>
  );
}
