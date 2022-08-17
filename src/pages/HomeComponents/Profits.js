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
  ButtonGroup
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Profits1 = [
  { color: "#ed1e79", text: "MODELS FUND" },
  { color: "#29abe2", text: "EXPENCES" },
  { color: "#ff7bac", text: "BACKING" },
  { color: "#00a99d", text: "LIQUIDITY" },
  { color: "#0071bc", text: "TEAM" },
  { color: "#8cc63f", text: "REFERRAL" }
];

const Profits2 = [
  { color: "#ed1e79", text: "MODELS FUND" },
  { color: "#2e3192", text: "PRIZE (AIRDROP)" },
  { color: "#93278f", text: "BURN" },
  { color: "#00a99d", text: "LIQUIDITY" },
  { color: "#0071bc", text: "TEAM" },
  { color: "#8cc63f", text: "REFERRAL" },
  { color: "#29abe2", text: "EXPENCES" }
];
export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, pb: 10 }}>
      <Stack alignItems="center" spacing={2} sx={{ mb: 10 }}>
        <Typography variant="h3" color="primary">
          Profits Sharing
        </Typography>
        <Typography textAlign="center">
          Services can be purchased in USDC or WINK and profits will
          automatically be splitted as follows:
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 10, md: 5 }}
      >
        <Stack flex={1} alignItems="center" spacing={5}>
          <Box
            component="img"
            src="/images/ring2.png"
            sx={{ width: { xs: 1, md: 400 } }}
          />
          <Grid
            container
            alignItems="center"
            rowSpacing={1.5}
            columnSpacing={3}
            sx={{ width: 400 }}
          >
            {Profits1.map((item) => (
              <Grid item xs={6} md={6}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: item.color,
                      borderRadius: "50%"
                    }}
                  />
                  <Typography>{item.text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        <Stack flex={1} alignItems="center" spacing={5}>
          <Box component="img" src="/images/ring3.png" sx={{ width: 400 }} />
          <Grid
            container
            alignItems="center"
            rowSpacing={1.5}
            columnSpacing={3}
            sx={{ width: 400 }}
          >
            {Profits2.map((item) => (
              <Grid item xs={6} md={6}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: item.color,
                      borderRadius: "50%"
                    }}
                  />
                  <Typography>{item.text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
