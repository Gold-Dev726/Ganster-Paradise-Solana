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

export default function Hero() {
  return (
    <Stack sx={{ mt: 15 }} alignItems="center">
      <Stack alignItems="center" sx={{ mb: 10 }}>
        <Typography variant="h3" color="primary">
          Possible Scenario (1 YEAR)
        </Typography>
      </Stack>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Hidden mdDown>
          <Box component="img" src="/images/scenario.png" />
        </Hidden>
        <Hidden mdUp>
          <Stack spacing={3}>
            <Box component="img" src="/images/scena1.png" />

            <Stack
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                background: "url(/images/scena2.png)",
                backgroundSize: "100% 100%",
                width: 1,
                height: 80,
                px: 3
              }}
            >
              <Typography variant="h6">Worst case scenario</Typography>
              <Typography fontSize={12} fontWeight="bold">
                100% USDC Refund 1X
              </Typography>
            </Stack>

            <Stack
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                background: "url(/images/scena3.png)",
                backgroundSize: "100% 100%",
                width: 1,
                height: 80,
                px: 3
              }}
            >
              <Typography variant="h6">Probable scenario</Typography>
              <Typography fontSize={12} fontWeight="bold">
                100% USDC Refund + 11.900%
              </Typography>
              <Typography fontSize={12} fontWeight="bold">
                WINK Token Value 120 X
              </Typography>
            </Stack>

            <Stack
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                background: "url(/images/scena4.png)",
                backgroundSize: "100% 100%",
                width: 1,
                height: 80,
                px: 3
              }}
            >
              <Typography variant="h6">Optimistic scenario</Typography>
              <Typography fontSize={12} fontWeight="bold">
                100% USDC Refund + 20.000 / 30.000%
              </Typography>
              <Typography fontSize={12} fontWeight="bold">
                WINK Token Value 200X / 300X
              </Typography>
            </Stack>
          </Stack>
        </Hidden>
      </Container>
    </Stack>
  );
}
