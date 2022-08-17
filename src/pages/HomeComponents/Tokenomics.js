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

const Profits = [
  {
    color: "#ed1e79",
    text: "LIQUIDITY POOL",
    percent: 25,
    number: "25.000.000",
    lock: "10 Years Lock"
  },
  {
    color: "#ff7bac",
    text: "SEED INVESTORS",
    number: "10.000.000",
    percent: 10
  },
  {
    color: "#0071bc",
    text: "TEAM",
    percent: 25,
    number: "25.000.000",
    lock: "3 Years Vesting"
  },
  { color: "#29abe2", text: "ICO INVESTORS", percent: 40, number: "40.000.000" }
];

export default function Hero() {
  return (
    <Hidden mdDown>
      <Container maxWidth="lg" sx={{ mt: 15, pb: 10 }} id="tokenomics">
        <Stack alignItems="center" spacing={2} sx={{ mb: 10 }}>
          <Typography variant="h3" color="primary">
            Tokenomics
          </Typography>
        </Stack>

        <Stack direction="row" spacing={5} alignItems="center">
          <Stack flex={1}>
            <Stack spacing={1}>
              <Typography>Initial Supply = 100.000.000 WINK</Typography>
              <Typography>Max Supply = Unlimited</Typography>
              <Typography>Token Launch Price = 0,25$</Typography>
            </Stack>

            <Stack spacing={2} sx={{ mt: 10 }}>
              {Profits.map((item) => (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: item.color,
                      borderRadius: "50%"
                    }}
                  />
                  <Typography sx={{ width: 160 }}>{item.text}</Typography>
                  <Typography>{item.percent}%</Typography>
                  <Typography>{item.number}</Typography>
                  {item.lock && (
                    <Typography color="secondary" fontWeight="bold">
                      {item.lock}
                    </Typography>
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack flex={1} alignItems="center" spacing={5}>
            <Box component="img" src="/images/ring4.png" sx={{ width: 400 }} />
          </Stack>
        </Stack>
      </Container>
    </Hidden>
  );
}
