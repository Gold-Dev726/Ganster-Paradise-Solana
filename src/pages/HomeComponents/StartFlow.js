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
    <Container maxWidth="lg" sx={{ mt: 15, pb: 10 }}>
      <Stack alignItems="center" spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h3" color="primary">
          Starting Flow
        </Typography>
        <Stack direction="row" spacing={{ xs: 1, md: 5 }}>
          {Profits1.map((item) => (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: item.color,
                  borderRadius: "50%"
                }}
              />
              <Typography fontSize={14}>{item.text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Stack
          sx={{
            background: "linear-gradient(90deg, #1a262e, #1c1c29)",
            p: 5,
            borderRadius: 3
          }}
        >
          <Typography variant="h4" color="secondary" align="center">
            Phase 1
          </Typography>
          <Box component="img" src="/images/flow1.png" />
        </Stack>

        <Stack
          sx={{
            background: "linear-gradient(90deg, #1a262e, #1c1c29)",
            p: 5,
            borderRadius: 3
          }}
        >
          <Typography variant="h4" color="secondary" align="center">
            Phase 2
          </Typography>
          <Box component="img" src="/images/flow2.png" />
        </Stack>

        <Stack
          sx={{
            background: "linear-gradient(90deg, #1a262e, #1c1c29)",
            p: 5,
            borderRadius: 3
          }}
        >
          <Typography variant="h4" color="secondary" align="center" sx={{mb: 3}}>
            Phase 3
          </Typography>
          <Box component="img" src="/images/flow3.png" />
        </Stack>
      </Stack>
    </Container>
  );
}
