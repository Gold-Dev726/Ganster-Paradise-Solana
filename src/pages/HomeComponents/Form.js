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
  InputBase,
  Select,
  MenuItem
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Hero() {
  const [value, setValue] = useState("none");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Stack
      alignItems="center"
      sx={{
        py: { xs: 3, md: 10 }
      }}
    >
      <Stack sx={{ bgcolor: "#ffffff10", width: 1, py: 3, mb: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="primary" align="center">
            Contact us in the form below to become a private sale promoter
          </Typography>
        </Container>
      </Stack>
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <Typography variant="h3" color="primary" textAlign="center">
            CONTACT FORM
          </Typography>
          <Typography align="center" sx={{ mt: 2, mb: 5 }} fontSize={20}>
            Cum with us!
          </Typography>
          <Stack
            alignItems="center"
            sx={{
              bgcolor: "#ffffff30",
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              width: { xs: 1, md: "inherit" },
              mb: 3
            }}
            spacing={4}
          >
            <InputBase
              placeholder="Name..."
              sx={{
                bgcolor: "#1b1b23",
                borderRadius: 1.5,
                height: 50,
                width: { xs: 1, md: 400 },
                px: 2
              }}
            />

            <InputBase
              placeholder="Email..."
              sx={{
                bgcolor: "#1b1b23",
                borderRadius: 1.5,
                height: 50,
                width: { xs: 1, md: 400 },
                px: 2
              }}
            />
            <Select
              value={value}
              onChange={handleChange}
              placeholder="Subject..."
              input={
                <InputBase
                  placeholder="Subject..."
                  sx={{
                    bgcolor: "#1b1b23",
                    borderRadius: 1.5,
                    height: 50,
                    width: { xs: 1, md: 400 },
                    px: 2
                  }}
                />
              }
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "#666666",
                    width: { xs: 1, md: 400 },
                    mt: 1,
                    borderRadius: 1.5
                  }
                }
              }}
            >
              <MenuItem disabled value="none">
                Subject...
              </MenuItem>
              <MenuItem value={"promoter"}>Become promoter</MenuItem>
              <MenuItem value={"collaboration"}>Collaboration</MenuItem>
              <MenuItem value={"marketing"}>Marketing</MenuItem>
              <MenuItem value={"performer"}>Become performer</MenuItem>
              <MenuItem value={"other"}>Other...</MenuItem>
            </Select>

            <InputBase
              placeholder="Your message..."
              multiline
              rows={6}
              sx={{
                bgcolor: "#1b1b23",
                borderRadius: 1.5,
                // minHeight: 50,
                width: { xs: 1, md: 400 },
                px: 2
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 4, fontSize: 20, minWidth: 140 }}
              href="mailto:info@winks.finance"
            >
              Send
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
