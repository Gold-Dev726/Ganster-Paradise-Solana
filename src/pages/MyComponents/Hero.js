import { useState, useEffect } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  Button,
  InputBase,
  Typography,
  Link,
  Hidden,
  IconButton,
  Chip as MuiChip,
  Paper,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useICOContract, useERC20Contract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";
import { USDCAddress, ICOAddress, SWINKAddress } from "contracts/address";
import useTokenBalance from "hooks/useTokenBalance";
import { registerToken } from "utils/wallet";
import Blockies from "react-blockies";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";

const Chip = styled(MuiChip)(({ theme }) => ({
  padding: "24px 5px",
  fontSize: 20,
  borderRadius: 30,
  background: "linear-gradient(30deg, #9F1FED, #645FF2, #38BDD1)",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "1px solid #666"
}));

const domains = ["ux", "eos", "eth", "nft"];

export default function Hero() {
  const [approved, setApproved] = useState(false);
  const [swinkAmount, setSwinkAmount] = useState();
  const [usdcAmount, setUsdcAmount] = useState();
  const [balance, setBalance] = useState(0);
  const [year, setYear] = useState(1);
  const [domain, setDomain] = useState("");
  const [register, setRegister] = useState(false);

  const { account } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const ICOContract = useICOContract();
  const USDCContract = useERC20Contract(USDCAddress);
  const SWINKContract = useERC20Contract(SWINKAddress);

  const handleYear = (type) => {
    if (type === "add") {
      setYear(year + 1);
    } else if (year > 1) {
      setYear(year - 1);
    }
  };
  const handleApprove = async () => {
    try {
      const tx = await USDCContract.approve(
        ICOAddress,
        ethers.constants.MaxUint256
      );
      await tx.wait();
      enqueueSnackbar("Approved successfully!", {
        variant: "success"
      });
      setApproved(true);
    } catch (error) {
      enqueueSnackbar(getErrorMessage(error.error), {
        variant: "error"
      });
      setApproved(false);
    }
  };

  const handleBuy = async () => {
    try {
      const tx = await ICOContract.buySwink(
        ethers.utils.parseEther(usdcAmount.toString())
      );
      await tx.wait();
      enqueueSnackbar("Transaction success!", {
        variant: "success"
      });
    } catch (error) {
      console.log(error.error);
      enqueueSnackbar(getErrorMessage(error), {
        variant: "error"
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _balance = await SWINKContract.balanceOf(ICOAddress);
        const balance = ethers.utils.formatUnits(_balance, 10);
        setBalance(balance);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (account) {
      fetchData();
    }
  }, [USDCContract, SWINKContract, account]);

  return (
    <Stack
      sx={{
        pt: 5
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="lg">
        <Stack sx={{ mt: 5 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Blockies
              seed={account}
              size={12}
              scale={3}
              style={{ borderRadius: "50%" }}
            />
            <Hidden mdDown>
              <Typography fontSize={28}>{account}</Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography fontSize={24}>{`${account.slice(
                0,
                6
              )}...${account.slice(-6)}`}</Typography>
            </Hidden>
          </Stack>
          <Divider sx={{ mt: 1, mb: 5 }} />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
          >
            <Typography fontSize={20}>Yodda.ux</Typography>
            <Box flex={1} />
            <Typography color="#999">Expires 2023.08.10 at 12.00</Typography>
            <Checkbox
              color="error"
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
            />
          </Stack>

          <Divider variant="dashed" sx={{ my: 2 }} />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
          >
            <Typography fontSize={20}>Yoddaverse.eth</Typography>
            <Box flex={1} />
            <Typography color="#999">Expires 2023.08.10 at 12.00</Typography>
            <Checkbox
              color="error"
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
