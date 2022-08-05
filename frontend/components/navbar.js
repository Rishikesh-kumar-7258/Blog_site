import { Home } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Typography } from "@mui/material"

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{paddingY : 2, paddingX : 3}}>
      <Grid direction="row">
        <IconButton aria-label="Home" sx={{color : "white"}} size="large">
          <Home/>
        </IconButton>   
      </Grid>
    </AppBar>
  );
}