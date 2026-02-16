import React from "react";
import {
  Box,
  Container,
  Typography,
  GridLegacy as Grid,
  Button,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      
      sx={{
        py: { xs: 8, md: 15 },
        position: "relative",
        overflow: "hidden",
        bgcolor: alpha(theme.palette.background.default, 0.5),
        direction:"ltr"
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          
          {/* Text Content */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box mb={4}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: 800,
                    letterSpacing: 2,
                    display: "block",
                    mb: 1,
                  }}
                >
                  درباره ما
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="900"
                  sx={{
                    mb: 3,
                    background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  تلفیق دانش و تجربه برای خلق آینده
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 2, mb: 4, fontSize: "1.1rem" }}
                  textAlign="justify"
                >
                  ما در مجموعه خود با بهره‌گیری از جدیدترین فناوری‌های نقشه‌برداری و ژئوماتیک،
                  سعی در ارائه دقیق‌ترین و کارآمدترین راهکارها برای پروژه‌های عمرانی و صنعتی داریم.
                  تیم متخصص ما با تکیه بر دانش روز و تجهیزات پیشرفته، همراه مطمئن شما در مسیر توسعه است.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                   <Button
                    variant="contained"
                    size="large"
                    startIcon={<ArrowBackIcon sx={{ rotate: "180deg" }} />} // RTL support
                    href="tel:09196083105"
                    sx={{
                      px: 4,
                      py: 1.5,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }}
                  >
                    ارتباط با ما
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Visual Content (Image/Graphic) */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: `0 20px 60px ${alpha(theme.palette.primary.main, 0.2)}`,
                        transform: 'perspective(1000px) rotateY(-5deg)',
                        '&:hover': {
                            transform: 'perspective(1000px) rotateY(0deg)',
                            transition: 'transform 0.5s ease'
                        }
                    }}
                >
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="About Us"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            filter: 'brightness(0.9)'
                        }}
                    />
                    
                    {/* Floating Badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 30,
                            right: 30,
                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            p: 2,
                            borderRadius: 4,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            maxWidth: 200
                        }}
                    >
                        <Typography variant="subtitle2" fontWeight="bold" color="primary">
                            تضمین کیفیت
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            رعایت بالاترین استانداردهای مهندسی در تمام مراحل پروژه
                        </Typography>
                    </Box>
                </Box>
                
                {/* Decorative Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: 100,
                        height: 100,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        zIndex: -1,
                        opacity: 0.2
                    }}
                />
                 <Box
                    sx={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        width: 150,
                        height: 150,
                        border: `2px solid ${theme.palette.secondary.main}`,
                        borderRadius: '50%',
                        zIndex: -1,
                        opacity: 0.1
                    }}
                />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
