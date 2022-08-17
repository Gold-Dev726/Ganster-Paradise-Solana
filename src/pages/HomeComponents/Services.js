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

const Services = [
  "Live Cams",
  "Fan Services",
  "On Demand Productions",
  "Sex Toys",
  "Websites",
  "Kinky Events",
  "Social",
  "Dress"
];
export default function Hero() {
  return (
    <Stack
      id="services"
      alignItems="center"
      sx={{
        background: "url(/images/dot_bg.png)",
        backgroundSize: "100% 100%",
        pt: 5,
        pb: 15
      }}
    >
      <Typography variant="h3" color="primary">
        Services
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          {Services.map((item, index) => (
            <Grid item xs={6} md={3}>
              <Stack alignItems="center">
                <Box
                  component="img"
                  src={`/images/service${index + 1}.png`}
                  sx={{ width: 150 }}
                />
                <Typography textAlign="center">{item}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}
