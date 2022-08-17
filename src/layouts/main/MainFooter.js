import { Stack, Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import twitter from "@iconify/icons-cib/twitter";
import facebook from "@iconify/icons-cib/facebook";
import instagram from "@iconify/icons-cib/instagram";
export default function MainFooter() {
  return (
    <Stack
      direction="row"
      alignItems="flex-end"
      justifyContent="space-between"
      sx={{
        pl: 5,
        py: 3,
        pr: 40,
        width: 1,
        position: "fixed",
        bottom: 0,
        left: 0
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            sx={{ width: 36, height: 36 }}
            href="https://yoddaverse.com"
            target="_blank"
          >
            <Icon icon={twitter} color="white" />
          </IconButton>
          <IconButton
            sx={{ width: 36, height: 36 }}
            href="https://yoddaverse.com"
            target="_blank"
          >
            <Icon icon={facebook} color="white" />
          </IconButton>
          <IconButton
            sx={{ width: 36, height: 36 }}
            href="https://yoddaverse.com"
            target="_blank"
          >
            <Icon icon={instagram} color="white" />
          </IconButton>
        </Stack>
        <Typography>© Copyright Gangsters Paradise Inc 2022</Typography>
      </Stack>

      <Box component="img" src="/images/logo_flat.png" sx={{ width: 140 }} />
    </Stack>
  );
}
