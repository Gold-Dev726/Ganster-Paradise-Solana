import { useState, useEffect, useRef } from "react";
import * as React from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link,
  Tabs,
  Tab,
  Fab,
  Grid,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import ConnectButton from "components/ConnectButton";
import { useICOContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";
import { parseEther } from "ethers/lib/utils";
import { useSnackbar } from "notistack";
import { ethers } from "ethers";

export default function Hero() {
  const [mintAmount, setMintAmount] = useState(0);
  const [value, setValue] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Typography variant="h2" sx={{ my: 2 }}>
        Upcoming FStarts
      </Typography>
      <Stack direction="row">
        <Grid container spacing={3}>
          {[...Array(4)].map((item, index) => (
            <Grid item md={3} key={index}>
              <Stack
                sx={{ borderRadius: 1, border: "1px solid #f56d23", p: 2 }}
                spacing={3}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Box
                    sx={{
                      bgcolor: "#7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 0.5
                    }}
                  >
                    IFO
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #7bf5fb",
                      py: 0.5,
                      px: 1,
                      borderRadius: 1
                    }}
                  >
                    1ST PHASE
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box
                      component="img"
                      src="/images/gems.jpg"
                      sx={{ width: 50, height: 50, borderRadius: "50%" }}
                    />
                    <Typography variant="h5">GEMS</Typography>
                  </Stack>

                  <Stack
                    sx={{
                      px: 3,
                      py: 1,
                      border: "1px solid #f56d23",
                      bgcolor: "#f56d2330"
                    }}
                  >
                    IN 5 DAYS
                  </Stack>
                </Stack>
                <Typography>
                  GameFi. Esports. Metaverse. SocialFi. GEMS is an Esports NFT
                  Social Sharing Portal and O2O Platform with a unique ecosystem
                  designed to connect worldwide crypto-gamers and turn GameFi
                  into the next Esports!
                </Typography>
                <Box sx={{ width: 1, height: "1px", bgcolor: "#75767c" }} />

                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Min Allocation
                    </Typography>
                    <Typography variant="h4">0.01</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Maximum
                    </Typography>
                    <Typography variant="h4">TBA</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={12} color="#75767c">
                      Access
                    </Typography>
                    <Typography variant="h4">Public</Typography>
                  </Stack>
                </Stack>

                <Stack alignItems="center">
                  <Typography
                    color="primary"
                    fontSize={14}
                    sx={{ cursor: "pointer" }}
                    onClick={handleClickOpen}
                  >
                    Learn more
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">GEMS Information</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
            amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
            ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor
            sit amet,
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
