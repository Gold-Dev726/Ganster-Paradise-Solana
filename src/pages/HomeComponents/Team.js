import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Container,
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Slider from "react-slick";
import { Teams } from "./Texts";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Stack sx={{ py: 10 }} id="faq">
      <Container maxWidth="lg">
        <Typography
          align="center"
          color="white"
          sx={{ fontFamily: "Cheddar", fontSize: 70, mb: 2 }}
        >
          The Team
        </Typography>
        <Slider {...settings}>
          {Teams.map((item, index) => (
            <Box sx={{ p: 3 }}>
              <Box component="img" src={`/images/6/${item.image}.png`} />
              <Stack direction="row">
                <Stack sx={{ px: 2, py: 1 }}>
                  <Typography variant="h4">{item.name}</Typography>
                  <Typography>{item.role}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Container>
    </Stack>
  );
}
