import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
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
        background: "url(/images/dot_bg.png)",
        backgroundSize: "100% 100%",
        py: { xs: 3, md: 10 }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          background: "url(/images/wink_bg.png)",
          backgroundSize: { xs: "contain", md: "100% 100%" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <Stack alignItems="center" spacing={5}>
          <Typography variant="h2" color="primary" textAlign="center">
            Buy Seed Wink
          </Typography>
          <Stack alignItems="center">
            <ScrollLink spy smooth to="buyseed">
              <Box
                component="img"
                src="/images/social_wink.png"
                sx={{ width: { xs: 150, md: 200 }, cursor: "pointer" }}
              />
            </ScrollLink>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
