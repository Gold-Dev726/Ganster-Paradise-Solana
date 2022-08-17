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

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{
        background: "url(/images/meteor_bg.png), url(/images/dot_bg.png)",
        backgroundSize: { xs: "cover", md: "100% 100%" },
        py: 10
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={5}>
          <Typography variant="h4" textAlign="center">
            Follow our socials to stay updated and propose yourself to our
            models recruiter service at link below, you will be able to set up
            your profile on website and Live Cam account before the platform
            launch and be one of the first Winkers!
          </Typography>
          <Stack alignItems="center">
            <Link href="https://t.me/winkdirect" target="_blank">
              <Box
                component="img"
                src="/images/social_tg.png"
                sx={{ width: 160 }}
              />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
