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
      </Container>
    </Stack>
  );
}
