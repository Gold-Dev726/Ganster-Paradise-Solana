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
  { color: "#ed1e79", text: "EXPENCES" },
  { color: "#00a99d", text: "PROFITS" },
  { color: "#0071bc", text: "TOKEN" }
];

export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, pb: 10 }}>
      <Stack alignItems="center" spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h3" color="primary">
          Models profits Flow
        </Typography>
      </Stack>

      <Stack spacing={3}>
        <Stack
          sx={{
            background: "linear-gradient(90deg, #1a262e, #1c1c29)",
            p: 5,
            borderRadius: 3
          }}
        >
          <Box component="img" src="/images/model_flow.png" />
        </Stack>
      </Stack>
    </Container>
  );
}
