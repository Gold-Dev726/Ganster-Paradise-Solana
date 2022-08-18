import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Button,
  Link
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));
export default function Homepage() {
  return (
    <Container maxWidth="md">
      <Stack direction="row" sx={{ width: 1 }}>
        <Stack flex={7} sx={{ bgcolor: "black", p: 2, borderRadius: 1 }}>
          <Typography variant="h4">My Goblin good town</Typography>
          <Grid container columnSpacing={5}>
            <Grid item md={4}>
              <Stack spacing={1}>
                <Box component="img" src="/images/1.png" sx={{ width: 1 }} />
                <Stack direction="row" justifyContent="space-between">
                  <Typography>#4518</Typography>
                  <Typography>56 days</Typography>
                </Stack>
                <Stack
                  spacing={1}
                  sx={{ width: 1, bgcolor: "#FE980E30", borderRadius: 1, p: 2 }}
                >
                  <Typography>22 days in Goats Gang</Typography>
                  <BorderLinearProgress variant="determinate" value={50} />
                  <Typography>Degen Gang in 32 Days</Typography>
                </Stack>
                <Button fullWidth sx={{ bgcolor: "#636060", color: "white" }}>
                  Select
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack flex={5}>
          <Stack sx={{ bgcolor: "#232323" }}>
            <Typography variant="h4">Profile</Typography>
            <Stack alignItems="center" spacing={1}>
              <Box component="img" src="/icons/user.png" />
              <Typography>Collectors Profile</Typography>
              <Typography>uyoioijalksdfioasdf</Typography>
              <Button>View my Collector Profile</Button>
              <Link>Edit Profile</Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
