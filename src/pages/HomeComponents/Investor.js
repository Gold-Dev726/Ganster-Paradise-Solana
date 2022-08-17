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
  "Cost of 0,05 USDC/WINK (0,25$ at public launch)",
  "Assignment of 3% services discount NFT (at live cam service launch)",
  "Exclusive invitaion at first live event with Winkers (Only for 3K USDC or more seed investors)",
  "Exclusive commemorative",
  "Promoter fee of 2% of total WINK supply from Team Wallet if you introduce a Seed investor",
  "Promoter fee of 3% of total WINK supply from Team Wallet if you hold Referral NFT linked to a wallet that buys WINK token on public launch"
];

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{
        pt: 5,
        pb: 15
      }}
    >
      <Typography variant="h3" color="primary" textAlign="center">
        WHY BECOME A SEED INVESTOR
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          {Texts.map((item, index) => (
            <Grid item xs={6} md={4}>
              <Stack alignItems="center">
                <Box
                  component="img"
                  src={`/images/invest${index + 1}.png`}
                  sx={{ width: { xs: 120, md: 150 } }}
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
