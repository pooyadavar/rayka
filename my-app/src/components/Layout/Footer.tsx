// src/components/Layout/Footer.tsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
  Avatar,
  useTheme,
  alpha,
} from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { GridLegacy as Grid } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.secondary.main,
        color: alpha(theme.palette.common.white, 0.8),
        pt: 10,
        pb: 0,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        direction: 'ltr',
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: alpha(theme.palette.primary.main, 0.1),
          filter: 'blur(80px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8}>
          
          {/* ستون اول: درباره شرکت و لوگو */}
          <Grid item xs={12} md={5}>
            <Box mb={3} display="flex" alignItems="center" gap={2}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                    }}
                >
                    <img src="/src/assets/svg/compony-logo.png" alt="Logo" style={{ width: '80px' }} />
                </Box>
                <Typography variant="h6" color="white" fontWeight="bold">
                    داده پژوهان رایکا
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 2, textAlign: 'justify', mb: 3, fontSize: '0.85rem', color: alpha(theme.palette.common.white, 0.7) }}>
              داده‌پژوهان رایکا، متخصص در هوشمندسازی داده‌ها و توسعه سامانه‌های مبتنی بر مکان. پیشرو در راهکارهای هوشمند مکانی و فناوری دیجیتال.
            </Typography>

            {/* بخش مشاوره */}
            <Link 
                href="tel:09101108077" 
                underline="none" 
                sx={{ 
                    display: 'block', 
                    cursor: 'pointer', 
                    transition: '0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                    }
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2, 
                        mt: 4, 
                        p: 2,
                        bgcolor: alpha(theme.palette.common.white, 0.05),
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                        maxWidth: 350,
                        transition: '0.3s',
                        '&:hover': {
                            borderColor: theme.palette.primary.main,
                        }
                    }}
                >
                     <Avatar 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
                        sx={{ width: 48, height: 48, border: `2px solid ${theme.palette.primary.main}` }}
                    />
                    <Box>
                        <Typography variant="caption" display="block" color="primary.main" sx={{ fontSize: '0.7rem' }}>نیاز به مشاوره دارید؟</Typography>
                        <Typography variant="body2" fontWeight="bold" color="white" sx={{ fontSize: '0.85rem' }}>با ما در ارتباط باشید</Typography>
                    </Box>
                </Box>
            </Link>
          </Grid>

          {/* ستون دوم: اطلاعات تماس */}
          <Grid item xs={12} md={4}>
            <Typography 
                variant="h6" 
                color="white" 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                    position: 'relative', 
                    pb: 1, 
                    mb: 3, 
                    display: 'inline-block',
                    fontSize: '1.1rem',
                    '&::after': { 
                        content: '""', 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: '40%', 
                        height: 3, 
                        bgcolor: theme.palette.primary.main, 
                        borderRadius: 2 
                    } 
                }}
            >
              ارتباط با ما
            </Typography>
            
            <Stack spacing={3}>
                <Box display="flex" gap={2} alignItems="flex-start">
                    <LocationOnIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                    <Box>
                        <Typography variant="subtitle2" color="white" fontWeight="bold" gutterBottom sx={{ fontSize: '0.85rem' }}>آدرس</Typography>
                        <Typography variant="body2" color={alpha(theme.palette.common.white, 0.7)} sx={{ fontSize: '0.8rem' }}>
                            تهران اتوبان شهید سلیمانی خیابان بنی هاشم کوچه مرادی پلاک ۱۶
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" gap={2} alignItems="flex-start">
                    <PhoneIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                    <Box>
                        <Typography variant="subtitle2" color="white" fontWeight="bold" gutterBottom sx={{ fontSize: '0.85rem' }}>تماس با ما</Typography>
                        <Typography variant="body2" dir="ltr" textAlign="right" color={alpha(theme.palette.common.white, 0.7)} sx={{ fontSize: '0.8rem' }}>
                            09101108077
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" gap={2} alignItems="flex-start">
                    <EmailIcon sx={{ color: theme.palette.primary.main, mt: 0.5 }} />
                    <Box>
                         <Typography variant="subtitle2" color="white" fontWeight="bold" gutterBottom sx={{ fontSize: '0.85rem' }}>ایمیل</Typography>
                         <Link 
                            href="mailto:Raika.data@gmail.com" 
                            underline="none"
                            sx={{ 
                                color: alpha(theme.palette.common.white, 0.7),
                                transition: '0.2s',
                                '&:hover': { color: theme.palette.primary.main },
                                fontSize: '0.8rem'
                            }}
                        >
                            Raika.data@gmail.com
                        </Link>
                    </Box>
                </Box>
            </Stack>
          </Grid>

          {/* ستون سوم: لینک‌های مفید */}
          <Grid item xs={12} md={3}>
            <Typography 
                variant="h6" 
                color="white" 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                    position: 'relative', 
                    pb: 1, 
                    mb: 3, 
                    display: 'inline-block',
                    fontSize: '1.1rem',
                    '&::after': { 
                        content: '""', 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: '40%', 
                        height: 3, 
                        bgcolor: theme.palette.primary.main, 
                        borderRadius: 2 
                    } 
                }}
            >
              دسترسی سریع
            </Typography>
            <Stack spacing={1.5}>
                {['خانه', 'درباره ما', 'تماس با ما', 'پروژه‌ها', 'بلاگ', 'فرصت‌های شغلی'].map((item) => (
                    <Link 
                        key={item} 
                        href="#" 
                        underline="none" 
                        sx={{ 
                            color: alpha(theme.palette.common.white, 0.7),
                            transition: '0.3s', 
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '0.85rem',
                            '&:hover': { 
                                color: theme.palette.primary.main, 
                                transform: 'translateX(-5px)' 
                            },
                            '&::before': {
                                content: '""',
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                bgcolor: theme.palette.primary.main,
                                mr: 1,
                                opacity: 0.5
                            }
                        }}
                    >
                        {item}
                    </Link>
                ))}
            </Stack>
          </Grid>

        </Grid>
      </Container>

      {/* نوار کپی‌رایت پایین */}
      <Box 
        sx={{ 
            bgcolor: alpha('#000', 0.2), 
            py: 3, 
            mt: 8, 
            position: 'relative',
            backdropFilter: 'blur(10px)'
        }}
      >
        <Container maxWidth="lg">
            <Stack 
                direction={{ xs: 'column-reverse', md: 'row' }} 
                justifyContent="space-between" 
                alignItems="center" 
                spacing={2}
            >
                <Typography variant="caption" textAlign="center" color={alpha(theme.palette.common.white, 0.5)} sx={{ fontSize: '0.7rem' }}>
                    © ۱۴۰۳ کلیه حقوق مادی و معنوی این سایت متعلق به شرکت داده پژوهان رایکا می‌باشد.
                </Typography>

                <Stack direction="row" spacing={1}>
                    {[<InstagramIcon />, <TelegramIcon />, <WhatsAppIcon />, <LinkedInIcon />].map((icon, idx) => (
                        <IconButton 
                            key={idx} 
                            size="small" 
                            sx={{ 
                                color: 'white', 
                                bgcolor: alpha(theme.palette.common.white, 0.1), 
                                transition: '0.3s',
                                '&:hover': { 
                                    bgcolor: theme.palette.primary.main, 
                                    transform: 'translateY(-3px)' 
                                } 
                            }}
                        >
                            {icon}
                        </IconButton>
                    ))}
                </Stack>
            </Stack>
        </Container>

        {/* دکمه اسکرول به بالا */}
        <IconButton
            onClick={scrollToTop}
            sx={{
                position: 'absolute',
                top: -24,
                left: 40, 
                bgcolor: theme.palette.primary.main,
                color: 'white',
                boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
                width: 48,
                height: 48,
                transition: '0.3s',
                '&:hover': { 
                    bgcolor: theme.palette.primary.dark,
                    transform: 'translateY(-5px)'
                },
            }}
        >
            <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;