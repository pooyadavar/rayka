import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  Chip,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import { GridLegacy as Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // RTL arrow
import TerrainIcon from "@mui/icons-material/Terrain";
import MapIcon from "@mui/icons-material/Map";
import FlightIcon from "@mui/icons-material/Flight";
import LayersIcon from "@mui/icons-material/Layers";
import { projects } from "../../data/projectsData";

const getCategoryDetails = (cat: string) => {
  switch (cat) {
    case "topography":
      return {
        icon: <TerrainIcon sx={{ fontSize: 160 }} />, // Icon size increased
        gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
      };
    case "cadastre":
      return {
        icon: <MapIcon sx={{ fontSize: 160 }} />,
        gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      };
    case "drone":
      return {
        icon: <FlightIcon sx={{ fontSize: 160 }} />,
        gradient: "linear-gradient(135deg, #111827 0%, #374151 100%)",
      };
    case "gis":
      return {
        icon: <LayersIcon sx={{ fontSize: 160 }} />,
        gradient: "linear-gradient(135deg, #374151 0%, #64748b 100%)",
      };
    default:
      return {
        icon: <MapIcon sx={{ fontSize: 160 }} />,
        gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
      };
  }
};

const Portfolio: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: alpha(theme.palette.background.default, 0.5),
        position: "relative",
        overflow: "hidden",
      }}
      id="portfolio"
    >
      {/* Background Decorative Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          bgcolor: theme.palette.primary.main,
          opacity: 0.05,
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 800,
                letterSpacing: 3,
                display: "block",
                mb: 2,
                fontSize: "0.85rem",
              }}
            >
              نمونه کارهای ما
            </Typography>
            <Typography
              variant="h3"
              fontWeight="900"
              sx={{
                mb: 3,
                color: "text.primary",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              پروژه‌های{" "}
              <span style={{ color: theme.palette.primary.main }}>
                اجرا شده
              </span>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth={650}
              mx="auto"
              sx={{ lineHeight: 1.9, fontSize: "1.1rem" }}
            >
              مجموعه‌ای از پروژه‌های موفق در حوزه‌های نقشه‌برداری، کاداستر و
              سیستم‌های اطلاعات مکانی که با دقت و کیفیت بالا اجرا شده‌اند.
            </Typography>
          </motion.div>
        </Box>

        {/* Grid - No Filter, just mapping all projects */}
        <Grid container spacing={4}>
          {projects.map((p, index) => {
            const { icon, gradient } = getCategoryDetails(p.cat);
            return (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      borderRadius: 6,
                      overflow: "hidden",
                      position: "relative",
                      height: 360,
                      direction: "ltr",
                      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 25px 60px -15px rgba(0,0,0,0.2)",
                        "& .bg-icon": {
                          transform:
                            "scale(1.2) rotate(-10deg) translate(20px, -20px)",
                          opacity: 0.2,
                        },
                        "& .details-arrow": {
                          transform: "translateX(-5px)",
                        },
                      },
                    }}
                  >
                    <CardActionArea
                      onClick={() => navigate(`/project/${p.id}`)}
                      sx={{ height: "100%", width: "100%", p: 0 }}
                    >
                      <Box
                        sx={{
                          height: "100%",
                          width: "100%",
                          background: gradient,
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          p: 4,
                          color: "white",
                        }}
                      >
                        {/* Large Decorative Icon */}
                        <Box
                          className="bg-icon"
                          sx={{
                            position: "absolute",
                            top: -30,
                            right: -30,
                            color: "white",
                            opacity: 0.1,
                            transition:
                              "0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            zIndex: 0,
                            pointerEvents: "none",
                          }}
                        >
                          {icon}
                        </Box>

                        {/* Top: Chip */}
                        <Box
                          sx={{
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Chip
                            label={p.label}
                            size="small"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.2)",
                              color: "white",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(255,255,255,0.2)",
                              fontWeight: 600,
                              height: 30,
                              px: 0.5,
                            }}
                          />
                        </Box>

                        {/* Bottom: Content */}
                        <Box sx={{ zIndex: 1, mt: "auto" }}>
                          <Typography
                            variant="h5"
                            fontWeight="800"
                            sx={{
                              textShadow: "0 4px 12px rgba(0,0,0,0.3)",
                              mb: 3,
                              lineHeight: 1.4,
                            }}
                          >
                            {p.title}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                bgcolor: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "text.primary",
                                transition: "0.3s",
                              }}
                            >
                              <ArrowBackIcon
                                className="details-arrow"
                                sx={{
                                  fontSize: 20,
                                  transition: "transform 0.3s",
                                }}
                              />
                            </Box>
                            <Typography
                              variant="button"
                              fontWeight="700"
                              sx={{
                                fontSize: "0.9rem",
                                color: alpha("#fff", 0.9),
                              }}
                            >
                              مشاهده پروژه
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
