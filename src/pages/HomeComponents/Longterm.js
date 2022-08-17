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
  "1 Billion gross yearly revenue",
  "20 Billion TVL",
  "Quotation on all big Exchanges",
  "300 Employees",
  "Over 10.000 active models",
  "Over 10.000.000 customers",
  "WINK exclusive clubs and events worldwide",
  "Partnership with 20 adult productions company",
  "Development of a new VR technology to improve customer experiences"
];

const Texts2 = [
  "Your customers can really buy anonymously",
  "You can be payed WINK or USDC",
  "Claim immediately your profits",
  "Access to a brand new fanbase and growing market",
  "Reinvest your own profits",
  "All of your services in 1 echosystem",
  "No need of Banks",
  "Regular Airdrops to your wallet from prize pool",
  "NFT mechanism to reward your top customers and give them discounts without reducing your own profits",
  "Referral if you bring customers"
];

export default function Hero() {
  return (
    <Stack
      alignItems="center"
      sx={{
        pt: 15,
        pb: 15
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography
          variant="h3"
          color="primary"
          textAlign="center"
          sx={{ mb: 5 }}
        >
          Long Term Objectives (3-5 Years)
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

        <Typography
          id="winker"
          variant="h3"
          color="primary"
          textAlign="center"
          sx={{ pt: 20, mb: 5 }}
        >
          Become a Winker
        </Typography>
        <Typography sx={{ mb: 5 }}>
          As every new successful market, the first who approach it will get the
          best advantages, with a little efforts to understand basics of DeFi,
          models can get access to a brand new world where they can propose the
          same services and material uploaded and streamed in another websites
          with the possibility to benefit of a huge gain booster. Take a look at
          our guid to understand how simple it is.
        </Typography>
        <List>
          {Texts2.map((item) => (
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
