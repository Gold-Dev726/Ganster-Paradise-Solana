// i18n
import "./locales/i18n";
// scroll bar
import "simplebar/src/simplebar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// solana web3
import "@solana/wallet-adapter-react-ui/styles.css";

import React, { StrictMode, useMemo } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Providers
import { SearchProvider } from "./contexts/SearchContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Provider as ReduxProvider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { store } from "redux/store";
import { BrowserRouter } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import Web3Provider from "./Provider";
ReactDOM.render(
  <StrictMode>
    {/* <Web3Provider> */}
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <SearchProvider>
          <SettingsProvider>
            <ReduxProvider store={store}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </LocalizationProvider>
            </ReduxProvider>
          </SettingsProvider>
        </SearchProvider>
      </SnackbarProvider>
    {/* </Web3Provider> */}
  </StrictMode>,
  document.getElementById("root")
);
