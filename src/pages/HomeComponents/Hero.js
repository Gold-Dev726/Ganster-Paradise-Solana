import { useState, useEffect } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  Typography,
  Chip as MuiChip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useICOContract, useERC20Contract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import { USDCAddress, ICOAddress, SWINKAddress } from "contracts/address";
import useTokenBalance from "hooks/useTokenBalance";
import useLocales from "hooks/useLocales";

// import { useWallet } from '@solana/wallet-adapter-react';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Hero() {
  // const { publicKey } = useWallet();
  const [approved, setApproved] = useState(false);
  const [swinkAmount, setSwinkAmount] = useState();
  const [usdcAmount, setUsdcAmount] = useState();
  const [balance, setBalance] = useState(0);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Stack sx={{ mt: 15 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" spacing={4}>
          <Box component="img" src="/images/logo_flat.png" />
          <Typography variant="h2">Lets get Staking</Typography>
          <Typography align="center" sx={{ width: 480, lineHeight: 1.3 }}>
            Every Gangster needs a place to lay their head. With staking you
            will begin to accrue rewards and unlock additional benefits. So lets
            get you setup
          </Typography>
          {/* <WalletMultiButton /> */}
        </Stack>
      </Container>
    </Stack>
  );
}
