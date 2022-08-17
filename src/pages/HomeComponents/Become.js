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

const Texts = [
  "Vote your favorite free on-demand production",
  "Buy on demand productions",
  "Stakers discounts and benefits",
  "Stakers access to our exclusive events"
];
export default function Hero() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
        <Stack flex={1} spacing={5}>
          <Typography variant="h3" color="primary">
            Become part of the <br /> Adult Industry <br /> revolution
          </Typography>
          <Typography>
            The Adult Industry changes fast and it's bounded tight with
            technological evolution, DeFi is the last evolution of the crypto
            Market. It's a matter of time and they will bond tight, we want to
            be on first line in this process taking a good piece of the cake and
            sharing it with our community.
          </Typography>
        </Stack>

        <Stack flex={1} direction="row" alignItems="center">
          <Box
            component="img"
            src="/images/girl_bunny.png"
            sx={{ width: { xs: 120, md: 150 } }}
          />
          <Stack
            sx={{
              background: "url(/images/balloon.png)",
              backgroundSize: "100% 100%",
              py: { xs: 6, md: 10 },
              pl: { xs: 5, md: 12 },
              pr: { xs: 2, md: 8 }
            }}
            spacing={2}
          >
            <Typography variant="h3" color="primary">
              Earn with pleasure!
            </Typography>
            <Stack spacing={2}>
              {Texts.map((item) => (
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    component="img"
                    src="/images/thumb_up.png"
                    sx={{ width: { xs: 20, md: 30 } }}
                  />
                  <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
