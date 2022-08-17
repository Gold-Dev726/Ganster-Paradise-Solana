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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Texts1 = [
  "WINK ICO detail",
  "Whitepaper with full detail",
  "Price Stabilzators mechanism",
  "Expansion rate detail (Deflactionary Objective)",
  "Company Documentation",
  "Full Team Detail",
  "First Adult Company Partnerships",
  "First DeFi ecosystems partnerships",
  "Full roadmap",
  "Automatic Referral System NFT based"
];

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{
        pt: 10,
        pb: 15
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          color="primary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          FUTURE DETAILS
        </Typography>
        <Typography sx={{ mb: 5 }} align="center">
          More detailed info about project will be shared with service launch at
          the start of phase 2 to prepare for the public sale (10 Million USDC
          target)
        </Typography>
        <List>
          {Texts1.map((item) => (
            <ListItem alignItems="flex-start">
              <Box
                sx={{
                  bgcolor: "#ed1163",
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  mt: 0.5,
                  mr: 1
                }}
              />
              <Typography flex={1}>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Container>
    </Stack>
  );
}
