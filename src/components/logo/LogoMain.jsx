'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

// @project
import branding from '@/branding.json';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  // const theme = useTheme();
  const logoMainPath = branding.logo.main;

  return logoMainPath ? (
    <CardMedia
      src={logoMainPath}
      component="img"
      alt="logo"
      sx={{ width: { xs: 110, lg: 135 }, height: { xs: 70, lg: 90 } }}
      loading="lazy"
    />
  ) : (
    <Box sx={{ width: { xs: 112, lg: 140 }, height: { xs: 22, lg: 26 } }}>
      <span className="word-logo">{branding.brandName}</span>
    </Box>
  );
}
