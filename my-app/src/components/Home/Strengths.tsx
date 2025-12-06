// src/components/Home/Strengths.tsx
import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { motion } from "framer-motion";
import { GridLegacy as Grid } from "@mui/material";

// داده‌های کارت‌ها دقیقاً طبق متن تصویر
const features = [
  {
    id: 1,
    title: "نیازسنجی مشتریان",
    icon: <ManageSearchIcon fontSize="large" />,
    desc: "تجربه بیش از یک دهه‌ی متخصصین ما در حوزه اطلاعات مکانی و سنجش از دور و همچنین گردآوری تیمی متخصص در حوزه GIS و سامانه‌های هوشمند شهروندی و آشنایی با استانداردهای روز دنیا و درگیر بودن با ده‌ها پروژه مشاوره‌ای در طول سال‌ها، دلیلی بر ارائه مشاوره آگاهانه، خدماتی متمایز و محصولاتی با کیفیت است.",
  },
  {
    id: 2,
    title: "روش های نوین",
    icon: <NoteAltOutlinedIcon fontSize="large" />,
    desc: "در سافا از متدولوژی های منحصر به فرد و مطابق با شرایط بومی هر کدام از مشتریان، جهت ارائه خدمات استفاده می شود، هر چند که از استانداردهای جهانی به عنوان پایه و اصول ارائه تمامی این خدمات بهره می گیریم اما به طور کلی اعتقاد داریم که نمی‌توان و نباید برای تمام مشتریان، نسخه یکسانی را تجویز کرد.",
  },
  {
    id: 3,
    title: "شخصی سازی محصول",
    icon: <SwitchAccountOutlinedIcon fontSize="large" />,
    desc: "بر اساس نیازهای مشتریان، هرگونه نرم‌افزار در حوزه‌های کاری سافا و بر اساس پروژه‌های تعریف شده از سوی کارفرمایان محترم در کمترین زمان ممکن و با بالاترین کیفیت موجود و با بیشترین کارایی نسبت به میزان هزینه مد نظر کارفرما و شرایط اقتصادی و شرایط وجود کالای درخواستی، تأمین و تولید می‌گردد.",
  },
  {
    id: 4,
    title: "صرفه اقتصادی",
    icon: <ThumbUpAltOutlinedIcon fontSize="large" />,
    desc: "شرکت سافا با توجه به توان تأمین مستقیم و بدون واسطه تجهیزات، کلیه محصولات خود را با قیمت رقابتی مناسب به مشتریانش ارائه می‌نماید. همچنین به دلیل تسلط بر دانش روز در حوزه فعالیت های خود، قادر است تمامی خدمات خود را در کمترین زمان ممکن و در نتیجه با هزینه پایین‌تری نسبت به دیگران ارائه نماید.",
  },
];

const Strengths: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#f4f6f8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: theme.palette.secondary.main,
          opacity: 0.05,
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
            letterSpacing={2}
            sx={{
              display: "block",
              mb: 1,
            }}
          >
            ارزش های ما
          </Typography>
          <Typography variant="h3" fontWeight="900" color="text.primary" mb={2}>
            نقاط قوت و{" "}
            <span style={{ color: theme.palette.primary.main }}>تمایز ما</span>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth={700}
            mx="auto"
            sx={{ lineHeight: 1.8 }}
          >
            ما با تکیه بر تجربه و دانش تخصصی، راهکارهایی منحصر به فرد و با
            بالاترین استانداردهای جهانی ارائه می‌دهیم تا نیازهای دقیق شما را
            برآورده کنیم.
          </Typography>
        </Box>

        {/* Hero Image Section (The Map) */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{
            width: "100%",
            height: { xs: 220, md: 400 },
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            mb: 10,
            boxShadow: `0 25px 50px -12px ${theme.palette.primary.main}4D`, // Dynamic shadow color
            bgcolor: theme.palette.primary.dark, // Fallback color, darker blue
          }}
        >
          {/* تصویر نقشه */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" // تصویر موقت شبیه نقشه
            alt="Map Background"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.7, // Slightly more opaque
              filter:
                "grayscale(100%) sepia(20%) hue-rotate(220deg) saturate(300%) contrast(1.2)", // فیلتر CSS برای شبیه‌سازی رنگ آبی
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5), transparent)", // Dark overlay at bottom
            }}
          />
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 6, // More rounded corners
                  bgcolor: "rgba(0, 0, 0, 0.03)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition:
                    "transform 0.4s ease-out, box-shadow 0.4s ease-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.2)", // Dynamic shadow on hover
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                {/* Icon and Number */}
                <Box
                  sx={{
                    position: "relative",
                    mb: 3,
                    p: 2, // Padding around icon
                    borderRadius: "50%",
                    bgcolor: theme.palette.primary.light, // Light blue background for icon
                    color: theme.palette.primary.dark, // Darker blue icon color
                    fontSize: 40, // Larger icon size
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {React.cloneElement(item.icon as React.ReactElement, {
                    sx: { fontSize: 40 },
                  })}
                  <Box
                    sx={{
                      // Subtle number badge
                      position: "absolute",
                      bottom: -8,
                      right: -8,
                      width: 24,
                      height: 24,
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      border: "2px solid white",
                    }}
                  >
                    {item.id}
                  </Box>
                </Box>

                {/* Content */}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: theme.palette.text.primary, mt: 1 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    direction: "rtl",
                    px: 1,
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Strengths;
