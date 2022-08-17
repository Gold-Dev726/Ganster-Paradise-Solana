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
  Avatar,
  Hidden
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "none",
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme, color }) => ({
  backgroundColor: color,
  borderRadius: 40,
  padding: "8px 40px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme, number }) => ({
  backgroundImage: `url(/images/phase${number}.png)`,
  backgroundSize: "80% 100%",
  backgroundRepeat: "no-repeat",
  paddingTop: 50,
  paddingBottom: 24,
  marginTop: -30
}));

export default function Hero() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack
      id="return"
      alignItems="center"
      sx={{
        background: "url(/images/dot_bg.png)",
        backgroundSize: "100% 100%",
        pt: 15,
        pb: 15
      }}
    >
      <Typography variant="h3" color="primary">
        Potential Return
      </Typography>
      <Typography
        color="primary"
        fontSize={24}
        sx={{ mb: 5 }}
        textAlign="center"
      >
        EXAMPLE ON 1.000 $ INVESTMENT:
      </Typography>
      <Hidden mdDown>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Grid container spacing={5}>
            <Grid item md={3}>
              <Stack sx={{ fontWeight: "bold" }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: "#00a99d",
                    py: 1.5,
                    px: 3,
                    fontSize: 26,
                    fontWeight: "bold",
                    borderRadius: 5
                  }}
                >
                  PHASE 1
                </Stack>
                <Stack
                  sx={{
                    background: "url(/images/phase1.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "80% 100%",
                    pt: 7,
                    pb: 3,
                    mt: -4
                  }}
                >
                  <List>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#00a99d",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography flex={1}>Starting value = 1.000 USDC</Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#00a99d",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>Buying price = 0,05</Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#00a99d",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>Total SWINK = 20.000</Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid>

            <Grid item md={3}>
              <Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: "#0071bc",
                    py: 1.5,
                    px: 3,
                    fontSize: 26,
                    fontWeight: "bold",
                    borderRadius: 5
                  }}
                >
                  PHASE 2
                </Stack>
                <Stack
                  sx={{
                    background: "url(/images/phase2.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "80% 100%",
                    pt: 7,
                    pb: 3,
                    mt: -4
                  }}
                >
                  <List>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#0071bc",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography flex={1}>
                        Starting to get refund of 100% of initial investment in
                        USDC
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid>

            <Grid item md={3}>
              <Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: "#662d91",
                    py: 1.5,
                    px: 3,
                    fontSize: 26,
                    fontWeight: "bold",
                    borderRadius: 5
                  }}
                >
                  PHASE 3
                </Stack>
                <Stack
                  sx={{
                    background: "url(/images/phase3.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "80% 100%",
                    pt: 7,
                    pb: 3,
                    mt: -4
                  }}
                >
                  <List>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#662d91",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        WINK public sale
                        <br />
                        (price 0,25 USDC/SWINK)
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#662d91",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        SWINK converted in
                        <br />
                        WINK
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#662d91",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        Your WINK value =
                        <br />
                        <Typography color="primary">5.000 USDC</Typography>
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid>

            <Grid item md={3}>
              <Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: "#ed1163",
                    py: 1.5,
                    px: 3,
                    fontSize: 26,
                    fontWeight: "bold",
                    borderRadius: 5
                  }}
                >
                  After 1 YEAR
                </Stack>
                <Stack
                  sx={{
                    background: "url(/images/phase4.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "80% 100%",
                    pt: 7,
                    pb: 3,
                    mt: -4
                  }}
                >
                  <List>
                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#ed1163",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        WINK VALUE (Minimum Target)=
                        <br />
                        1,5USDC / WINK
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#ed1163",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        Your WINK base value=
                        <br />
                        <Typography color="primary">10.000 USDC</Typography>
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#ed1163",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        Average farming rewards (first <br />
                        year = 300%)
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#ed1163",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        Your WINK value=
                        <br />
                        <Typography color="primary">20.000 USDC</Typography>
                      </Typography>
                    </ListItem>

                    <ListItem alignItems="flex-start">
                      <Box
                        sx={{
                          bgcolor: "#ed1163",
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          mt: "6px",
                          mr: 1
                        }}
                      />
                      <Typography>
                        Potential final return= 11900% + <br />
                        100% (SWINK refund)
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Hidden>

      <Hidden mdUp>
        <Stack spacing={3} sx={{ mt: 5, px: 5 }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary color="#00a99d">
              <Typography variant="h3">PHASE 1</Typography>
            </AccordionSummary>
            <AccordionDetails number={1}>
              <List>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#00a99d",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>Starting value = 1.000 USDC</Typography>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#00a99d",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>Buying price = 0,05</Typography>
                </ListItem>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#00a99d",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>Total SWINK = 20.000</Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary color="#0071bc">
              <Typography variant="h3">PHASE 2</Typography>
            </AccordionSummary>
            <AccordionDetails number={2}>
              <List>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#0071bc",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Starting to get refund of 100% of initial investment in USDC
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary color="#662d91">
              <Typography variant="h3">PHASE 3</Typography>
            </AccordionSummary>
            <AccordionDetails number={3}>
              <List>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#662d91",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    WINK public sale
                    <br />
                    (price 0,25 USDC/SWINK)
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#662d91",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    SWINK converted in
                    <br />
                    WINK
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#662d91",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Your WINK value =
                    <br />
                    <Typography color="primary">5.000 USDC</Typography>
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary color="#ed1163">
              <Typography variant="h3">After 1 Year</Typography>
            </AccordionSummary>
            <AccordionDetails number={4}>
              <List>
                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#ed1163",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    WINK VALUE (Minimum Target)=
                    <br />
                    1,5USDC / WINK
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#ed1163",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Your WINK base value=
                    <br />
                    <Typography color="primary">10.000 USDC</Typography>
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#ed1163",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Average farming rewards (first <br />
                    year = 300%)
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#ed1163",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Your WINK value=
                    <br />
                    <Typography color="primary">20.000 USDC</Typography>
                  </Typography>
                </ListItem>

                <ListItem alignItems="flex-start">
                  <Box
                    sx={{
                      bgcolor: "#ed1163",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      mt: "6px",
                      mr: 1
                    }}
                  />
                  <Typography>
                    Potential final return= 11900% + <br />
                    100% (SWINK refund)
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Hidden>
    </Stack>
  );
}
