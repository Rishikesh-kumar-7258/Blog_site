import { Home, Person2TwoTone, PhoneBluetoothSpeaker, PhoneCallback } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Typography } from "@mui/material"

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ paddingY: 2, paddingX: 3 }}>
      <Stack spacing={2} direction="row">
          <IconButton aria-label="Home" sx={{ color: "white", display : "grid", placeItems : "center"}} size="large">
            <Home />
            <Typography>Home</Typography>
          </IconButton>
          <IconButton aria-label="Home" sx={{ color: "white", display : "grid", placeItems : "center" }} size="large">
            <Person2TwoTone/>
            <Typography>About Us</Typography>
          </IconButton>
          <IconButton aria-label="Home" sx={{ color: "white", display : "grid", placeItems : "center" }} size="large">
            <PhoneCallback/>
            <Typography>Contact Us</Typography>
          </IconButton>
      </Stack>
    </AppBar>
  );
}