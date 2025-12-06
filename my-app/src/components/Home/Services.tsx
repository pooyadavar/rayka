// src/components/Home/Services.tsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme, 
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PublicIcon from "@mui/icons-material/Public";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion, AnimatePresence } from "framer-motion";
import { GridLegacy as Grid } from "@mui/material";

const services = [
  {
    id: 0,
    title: "توپوگرافی",
    icon: <LandscapeIcon />,
    // تصویر نقشه توپوگرافی / زمین‌شناسی
    image:
      "https://images.unsplash.com/photo-1518390938029-79a02241d382?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تهیه نقشه‌های توپوگرافی با مقیاس‌های مختلف جهت مطالعات فاز ۱ و ۲ عمرانی.",
    features: [
      "نقشه ۱:۵۰۰ و ۱:۲۰۰۰",
      "تهیه پروفیل طولی و عرضی",
      "محاسبه احجام خاکی",
    ],
  },
  {
    id: 1,
    title: "فتوگرامتری",
    icon: <CameraAltIcon />,
    // تصویر پهپاد / نقشه‌برداری هوایی
    image:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تولید اورتوفوتو و مدل‌های رقومی ارتفاعی (DEM) با سرعت و دقت بالا توسط پهپاد.",
    features: [
      "مدل‌سازی سه بعدی شهری",
      "پایش خطوط انتقال",
      "نقشه‌برداری معادن",
    ],
  },
  {
    id: 2,
    title: "GIS & RS",
    icon: <PublicIcon />,
    // تصویر ماهواره‌ای / شبکه جهانی
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "طراحی پایگاه داده مکانی و تحلیل تصاویر ماهواره‌ای برای مدیریت هوشمند منابع.",
    features: ["مکان‌یابی سایت‌ها", "تحلیل شبکه", "WebGIS سازمانی"],
  },
  {
    id: 3,
    title: "کاداستر",
    icon: <ArchitectureIcon />,
    // تصویر نقشه معماری / نقشه‌کشی
    image:
      "https://images.unsplash.com/photo-1581094794329-cdac82aadbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "تعیین موقعیت دقیق املاک و پیاده‌سازی پلاک‌های ثبتی (شمیم).",
    features: [
      "سند تک برگ",
      "تفکیک آپارتمان",
      "میکروژئودزی"],
  },
];

const Services: React.FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme(); 

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "background.default",
        backgroundImage: "url(/src/assets/svg/checkoutBackground.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="services"
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="overline" 
            color="primary" 
            fontWeight="bold" 
            letterSpacing={2}
            sx={{ display: 'block', mb: 1 }}
          >
            خدمات ما
          </Typography>
          <Typography variant="h3" fontWeight="900" color="text.primary" mb={2}>
            راه‌حل‌های <span style={{ color: theme.palette.primary.main }}>جامع مهندسی</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={700} mx="auto" sx={{ lineHeight: 1.8 }}>
              ما طیف وسیعی از خدمات تخصصی را در حوزه مهندسی ژئوماتیک ارائه می‌دهیم تا نیازهای دقیق پروژه‌های شما را برآورده سازیم.
          </Typography>
        </Box>

        {/* Tabs for Service Selection */}
        <Box
          sx={{
            mb: 6, 
            direction: "ltr",
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            centered
            allowScrollButtonsMobile
            sx={{
                bgcolor: 'white',
                borderRadius: '50px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                minHeight: 'auto',
                p: 0.5,
                '& .MuiTabs-indicator': {
                    display: 'none', 
                },
                '& .MuiTab-root': { 
                    minHeight: 'auto', 
                    fontSize: '1rem',
                    borderRadius: '50px',
                    px: { xs: 2, md: 3 },
                    py: 1,
                    mx: 0.5,
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        '&:hover': { bgcolor: 'primary.dark' }
                    },
                    '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.04)'
                    }
                },
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
                flexWrap: 'wrap'
              },
            }}
          >
            {services.map((s) => (
              <Tab
                key={s.id}
                icon={s.icon}
                iconPosition="start"
                label={s.title}
              />
            ))}
          </Tabs>
        </Box>

        {/* Content Card (Image and Details) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
                        <Paper
                          elevation={0}
                          sx={{
                            p: { xs: 3, md: 6 }, // Adjusted padding
                            borderRadius: 6, 
                            bgcolor: 'rgba(255, 255, 255, 0.4)', 
                            backdropFilter: 'blur(20px) saturate(180%)', 
                            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                            border: '1px solid rgba(255, 255, 255, 0.2)', 
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', 
                            direction: 'ltr', 
                          }}
                        >
                          <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}> 
                              <Box
                                component={motion.div}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                dir="rtl"
                                sx={{
                                  width: "100%",
                                  height: { xs: 200, md: 300 }, // Adjusted image height
                                  borderRadius: 4,
                                  overflow: "hidden",
                                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)', 
                                  position: 'relative'
                                }}
                              >
                    <Box
                      component="img"
                      src={services[value].image}
                      alt={services[value].title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Image Overlay */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                    }} />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}> 
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                    color="text.primary" 
                    sx={{ mb: 2 }}
                  >
                    {services[value].title}
                  </Typography>
                  <Typography
                    variant="body1" 
                    color="text.secondary"
                    paragraph
                    sx={{ lineHeight: 1.8, mb: 3 }}
                  >
                    {services[value].desc}
                  </Typography>
                  <List
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "1fr 1fr" },
                      gap: 2,
                      mt: 3,
                    }}
                  >
                    {services[value].features.map((f, i) => (
                      <ListItem key={i} disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={f}
                          primaryTypographyProps={{
                            fontWeight: 500,
                            color: "text.primary",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Services;