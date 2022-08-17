import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  InputBase,
  Typography,
  LinearProgress,
  linearProgressClasses,
  Link,
  Tabs,
  Tab,
  Fab,
  ButtonGroup
} from "@mui/material";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import ConnectButton from "components/ConnectButton";
import { useICOContract, useERC20Contract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import { Icon } from "@iconify/react";
import medium from "@iconify/icons-simple-icons/medium";
import twitter from "@iconify/icons-simple-icons/twitter";
import instagram from "@iconify/icons-simple-icons/instagram";
import telegram from "@iconify/icons-simple-icons/telegram";
import discord from "@iconify/icons-simple-icons/discord";
import gitbook from "@iconify/icons-simple-icons/gitbook";
import { USDCAddress, ICOAddress } from "contracts/address";
import useTokenBalance from "hooks/useTokenBalance";

const Profits = [
  { color: "#ed1e79", text: "MODELS" },
  { color: "#ff7bac", text: "FIRST MODELS INCENTIVES" },
  { color: "#0071bc", text: "SEED INVESTORS REFUND" },
  { color: "#29abe2", text: "MARKETING IMPROVEMENT" },
  { color: "#8cc63f", text: "AIRDROP FUND (First Consumers)" }
];
export default function Hero() {
  return (
    <Stack
      sx={{
        pt: 5,
        pb: 10
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Typography
            variant="h3"
            color="primary"
            sx={{ mb: 8 }}
            textAlign="center"
          >
            Profits sharing before WINK launch
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
            <Stack flex={1}>
              <Box
                component="img"
                src="/images/ring1.png"
                sx={{ width: { xs: 1, md: 0.9 } }}
              />
            </Stack>
            <Stack flex={1} spacing={6}>
              <Stack spacing={2.5} sx={{ ml: { xs: 0, md: -10 } }}>
                {Profits.map((item) => (
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
                ))}
              </Stack>
              <Stack spacing={4}>
                <Typography>
                  "Team will not get any profit in this phase until 100% of seed
                  investments in USDC are refunded.
                </Typography>
                <Typography>
                  "If before launch of WINK token seed investors got back 100%
                  of their USDC then 23,5% of Seed Investors Refund will turn in
                  Team profits.
                </Typography>
                <Typography>
                  "If before launch of WINK token seed investors haven't
                  received total refund the difference will be sent from Team
                  USDC wallet in 1 batch.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
