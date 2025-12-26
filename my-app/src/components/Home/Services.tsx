// src/components/Home/Services.tsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  Avatar,
  Chip,
  Stack,
  alpha,
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PublicIcon from "@mui/icons-material/Public";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";
import { GridLegacy as Grid } from "@mui/material";

const services = [
  {
    id: 0,
    title: "توپوگرافی",
    icon: <LandscapeIcon />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تهیه نقشه‌های توپوگرافی با مقیاس‌های مختلف جهت مطالعات فاز ۱ و ۲ عمرانی.",
    features: [
      "نقشه ۱:۵۰۰ و ۱:۲۰۰۰",
      "پروفیل طولی/عرضی", // Shortened for chips
      "محاسبه احجام",
    ],
  },
  {
    id: 1,
    title: "فتوگرامتری",
    icon: <CameraAltIcon />,
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تولید اورتوفوتو و مدل‌های رقومی ارتفاعی (DEM) با سرعت و دقت بالا توسط پهپاد.",
    features: [
      "مدل‌سازی سه بعدی",
      "پایش خطوط انتقال",
      "نقشه‌برداری معادن",
    ],
  },
  {
    id: 2,
    title: "GIS & RS",
    icon: <PublicIcon />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "طراحی پایگاه داده مکانی و تحلیل تصاویر ماهواره‌ای برای مدیریت هوشمند منابع.",
    features: ["مکان‌یابی سایت‌ها", "تحلیل شبکه", "WebGIS سازمانی"],
  },
  {
    id: 3,
    title: "کاداستر",
    icon: <ArchitectureIcon />,
    image:
      "https://images.unsplash.com/photo-1581094794329-cdac82aadbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تعیین موقعیت دقیق املاک و پیاده‌سازی پلاک‌های ثبتی (شمیم).",
    features: ["سند تک برگ", "تفکیک آپارتمان", "میکروژئودزی"],
  },
];

const Services: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12, // Increased padding
        bgcolor: "background.default",
        backgroundImage: "url(/src/assets/svg/checkoutBackground.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
        position: "relative",
        overflow: "hidden",
      }}
      id="services"
    >
      {/* Decorative Blur Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: alpha(theme.palette.primary.main, 0.1),
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: alpha(theme.palette.secondary?.main || theme.palette.info.main, 0.1),
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
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
              خدمات ما
            </Typography>
            <Typography 
                variant="h3" 
                fontWeight="900" 
                color="text.primary" 
                mb={3}
                sx={{
                    fontSize: { xs: '2rem', md: '3rem' }
                }}
            >
              راه‌حل‌های{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || theme.palette.info.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                جامع مهندسی
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              maxWidth={600}
              mx="auto"
              sx={{ lineHeight: 1.9, fontSize: '1.1rem' }}
            >
              ما طیف وسیعی از خدمات تخصصی را در حوزه مهندسی ژئوماتیک ارائه می‌دهیم
              تا نیازهای دقیق پروژه‌های شما را برآورده سازیم.
            </Typography>
          </motion.div>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={service.id} >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    direction:"ltr",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    borderRadius: 5, // More rounded
                    bgcolor: alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${alpha(theme.palette.common.white || '#fff', 0.4)}`,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: `0 20px 40px -10px ${alpha(theme.palette.primary.main, 0.2)}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      "& .service-img": {
                        transform: "scale(1.1)",
                      },
                      "& .service-icon-bg": {
                        transform: "scale(1.2) rotate(10deg)",
                      }
                    },
                  }}
                >
                  {/* Image Section */}
                  <Box sx={{ position: "relative", height: 180, overflow: "hidden" }}>
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      className="service-img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top, ${alpha(theme.palette.background.paper, 0.9)} 0%, transparent 100%)`,
                      }}
                    />

                  </Box>

                  {/* Content Section */}
                  <Box sx={{ p: 3, pt: 5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h6"
                      fontWeight="800"
                      gutterBottom
                      sx={{ mb: 1.5 }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}
                    >
                      {service.desc}
                    </Typography>

                    {/* Features Chips */}
                    <Box sx={{ mt: 'auto' }}>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                            {service.features.map((feature, i) => (
                                <Chip 
                                    key={i}
                                    icon={<AutoAwesomeIcon style={{ fontSize: 14 }} />}
                                    label={feature}
                                    size="small"
                                    sx={{
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                                        color: 'primary.main',
                                        border: 'none',
                                        '& .MuiChip-icon': {
                                            color: 'primary.main',
                                            ml: 0.5
                                        }
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
