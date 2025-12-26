// src/components/Home/Strengths.tsx
import React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { motion } from "framer-motion";
import { GridLegacy as Grid } from "@mui/material";

// داده‌های کارت‌ها
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
        bgcolor: "background.default", // Using default background
        position: "relative",
        overflow: "hidden",
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.03) 0%, rgba(255,255,255,0) 70%)" // Subtle radial gradient
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={10}>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
            <Typography
                variant="overline"
                color="primary"
                fontWeight="800"
                letterSpacing={3}
                sx={{
                display: "inline-block",
                mb: 2,
                px: 2,
                py: 0.5,
                borderRadius: 4,
                bgcolor: 'rgba(37, 99, 235, 0.08)',
                }}
            >
                ارزش‌های محوری
            </Typography>
            <Typography variant="h3" fontWeight="900" color="text.primary" mb={3} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                نقاط قوت و <span style={{ 
                    background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                 }}>تمایز ما</span>
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                maxWidth={700}
                mx="auto"
                sx={{ lineHeight: 2, fontSize: '1.1rem' }}
            >
                تلفیق تجربه، دانش فنی و تکنولوژی‌های روز برای ارائه راهکارهایی هوشمند و دقیق.
            </Typography>
          </motion.div>
        </Box>

        {/* Hero Image Section - Modernized */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            width: "100%",
            height: { xs: 250, md: 450 },
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            mb: 12,
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)', // Softer, larger shadow
            bgcolor: theme.palette.grey[100],
          }}
        >
            <Box
            component="img"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" // More modern tech/map image
            alt="Technology Map Background"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(20%) contrast(1.1)", 
              transition: 'transform 10s ease',
              '&:hover': { transform: 'scale(1.05)' } // Subtle zoom on hover
            }}
          />
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, rgba(37, 99, 235, 0.2) 100%)",
            }}
          />
           {/* Overlay Text */}
           <Box sx={{ position: 'absolute', bottom: 40, left: 40, right: 40, color: 'white', zIndex: 2 }}>
               <Typography variant="h4" fontWeight="bold" textAlign={"left"}>دقت در هر پیکسل</Typography>
               <Typography variant="subtitle1" sx={{ opacity: 0.9 }} textAlign={"left"}>استانداردهای جهانی در پروژه‌های ملی</Typography>
           </Box>
        </Box>

        {/* Features Grid - Modern Cards */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  direction: "ltr",
                  p: 4,
                  height: "100%",
                  borderRadius: 6,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start", // Left align for modern look (RTL: Right)
                  textAlign: "right",
                  position: 'relative',
                  overflow: 'hidden',
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    borderColor: 'transparent',
                    "& .icon-bg": {
                        transform: "scale(1.1)",
                        bgcolor: theme.palette.primary.main,
                        color: "white"
                    }
                  },
                }}
              >
                {/* Icon */}
                <Box
                  className="icon-bg"
                  sx={{
                    mb: 3,
                    width: 64,
                    height: 64,
                    borderRadius: 3, // Squircle shape
                    bgcolor: 'rgba(37, 99, 235, 0.1)',
                    color: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {React.cloneElement(item.icon as React.ReactElement, {
                    sx: { fontSize: 32 },
                  })}
                </Box>

                {/* Content */}
                <Typography
                  variant="h6"
                  fontWeight="800"
                  gutterBottom
                  sx={{ color: theme.palette.text.primary, mb: 2 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                  }}
                >
                  {item.desc}
                </Typography>
                
                {/* Number Watermark */}
                <Typography sx={{ 
                    position: 'absolute', 
                    top: 20, 
                    right: 20 , 
                    fontWeight: 900, 
                    fontSize: '4rem', 
                    color: 'rgba(0,0,0,0.03)',
                    lineHeight: 0.8,
                    pointerEvents: 'none'
                }}>
                    0{item.id}
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