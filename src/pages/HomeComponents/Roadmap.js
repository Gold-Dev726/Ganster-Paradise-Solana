import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Grid,
  Stack,
  TextField,
  Button,
  Typography,
  Link,
  Tabs,
  Tab,
  Fab,
  ButtonGroup,
  Hidden
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Step1 = [
  "Development Websites CMS",
  "Development Live Cam Website",
  "Starting of marketing campaign and models recruitment"
];

const Step2 = [
  "Launch of Models and Web Cam services with USDC payments",
  "Starting Refund of seed investors in USDC",
  "Activation of referral automation",
  "Improvement of marketing",
  "Development of WINK token",
  "Audit & KYC"
];

const Step3 = [
  "DeFi Website with analytics",
  "IDO of WINK Token",
  "Filling WINK-USDC LP",
  "WINK stake and WINK-USDC farm",
  "Farming Incentives campaign on principal DEXes",
  "Activation of buyback and burn reserves"
];

export default function Hero() {
  return (
    <Stack id="roadmap" sx={{ mt: 15 }} alignItems="center">
      <Stack alignItems="center" spacing={2} sx={{ mb: 10 }}>
        <Typography variant="h3" color="primary">
          Roadmap
        </Typography>
      </Stack>

      <Stack sx={{ position: "relative" }}>
        <Hidden mdDown>
          <Box
            component="img"
            src="/images/roadmap_desktop.png"
            sx={{ width: 500 }}
          />
        </Hidden>
        <Hidden mdUp>
          <Box
            component="img"
            src="/images/roadmap_mobile.png"
            sx={{ width: 500 }}
          />
        </Hidden>
        {/* <Stack
          alignItems="center"
          justifyContent="space-between"
          sx={{
            position: "absolute",
            width: 1,
            height: 1,
            top: 0,
            left: 0,
            px: 10,
            py: 20
          }}
        >
          <Typography component="ul">
            {Step1.map((item) => (
              <Typography component="li" sx={{ m: 1 }}>
                {item}
              </Typography>
            ))}
          </Typography>
          <Typography component="ul">
            {Step2.map((item) => (
              <Typography component="li" sx={{ m: 1 }}>
                {item}
              </Typography>
            ))}
          </Typography>
          <Typography component="ul">
            {Step3.map((item) => (
              <Typography component="li" sx={{ m: 1 }}>
                {item}
              </Typography>
            ))}
          </Typography>
        </Stack> */}
      </Stack>

      <Box
        component="img"
        src="/images/roadmap_bg.png"
        sx={{ width: "150%" }}
      />
    </Stack>
  );
}
