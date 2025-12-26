// src/components/Layout/Navbar.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useScrollTrigger } from "@mui/material";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const navItems = [
    { label: "خانه", href: "#hero" },
    { label: "خدمات و محصولات", href: "#services" },
    { label: "پروژه‌ها", href: "#portfolio" },
    { label: "درباره ما", href: "#about" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? "rgba(255,255,255,0.6)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        color: trigger ? "text.primary" : "text.primary",
        transition: "all 0.3s",
        borderBottom: "0.75px solid gray",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ height: 80, justifyContent: "space-between", direction: "ltr" }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <img src="src/assets/svg/compony-logo.png" alt="Logo"  style={{width:"90px"}}/>
            </Box>
            
            <Typography variant="h6" fontWeight="bold" color="text.secondary">
              داده پژوهان رایکا
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                color="inherit"
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 50, px: 4, ml: 2 }}
            >
              تماس با ما
            </Button>
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, pt: 4 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
