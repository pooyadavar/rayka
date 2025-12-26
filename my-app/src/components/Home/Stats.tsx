// src/components/Home/Stats.tsx
import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { GridLegacy as Grid } from "@mui/material";
import { motion } from 'framer-motion';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

// Modern Stat Card Component
const StatCard = ({ icon, value, label, delay }: { icon: React.ReactNode, value: string, label: string, delay: number }) => (
  <Paper
    component={motion.div}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    elevation={0}
    sx={{
      p: 3,
      height: '100%',
      borderRadius: 6,
      background: 'linear-gradient(145deg, #ffffff, #f8fafc)', // Subtle gradient background
      border: '1px solid',
      borderColor: 'rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column', // Stack icon and text for modern look
      alignItems: 'flex-start',
      gap: 2,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)',
        borderColor: 'rgba(0,0,0,0.0)',
        '& .icon-container': {
            transform: 'scale(1.1) rotate(2deg)',
            bgcolor: 'primary.main',
            color: 'white'
        }
      }
    }}
  >
    {/* Decorative Circle */}
    <Box sx={{
        position: 'absolute',
        top: -20,
        right: -20,
        width: 100,
        height: 100,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        opacity: 0.03,
    }}/>

    <Box 
      className="icon-container"
      sx={{
      p: 1.5,
      borderRadius: 3, // Squircle
      color: 'primary.main',
      bgcolor: 'rgba(37, 99, 235, 0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {React.cloneElement(icon as React.ReactElement)}
    </Box>
    <Box>
      <Typography variant="h3" fontWeight="800" color="text.primary" sx={{ letterSpacing: -1 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontWeight="600" sx={{ mt: 0.5 }}>
        {label}
      </Typography>
    </Box>
  </Paper>
);

const Stats: React.FC = () => {
  const theme = useTheme();

  const doughnutData = {
    labels: ['توپوگرافی', 'GIS', 'کاداستر', 'پهپاد'],
    datasets: [{
      data: [35, 20, 25, 20],
      backgroundColor: [
        theme.palette.primary.main,
        theme.palette.primary.light,
        '#93c5fd', // lighter blue
        '#cbd5e1'  // slate grey for contrast
      ],
      borderWidth: 0,
      hoverOffset: 15 // Larger hover offset
    }],
  };

  const barData = {
    labels: ['1400', '1401', '1402', '1403'],
    datasets: [{
      label: 'نقاط برداشت شده (میلیون)',
      data: [2, 4.5, 6, 8.2],
      backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, theme.palette.primary.main);
          gradient.addColorStop(1, theme.palette.primary.light);
          return gradient;
      },
      borderRadius: 8,
      barThickness: 30,
    }],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const, // Align legend to start
        labels: {
          font: { family: 'IRANSansX', size: 12 },
          usePointStyle: true,
          boxWidth: 8,
          padding: 25,
          color: theme.palette.text.secondary
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleFont: { family: 'IRANSansX', weight: 'bold' },
        bodyFont: { family: 'IRANSansX' },
        padding: 16,
        cornerRadius: 12,
        displayColors: true,
        boxPadding: 6,
        rtl: true,
        textDirection: 'rtl'
      }
    }
  };

  const barOptions: any = {
      ...commonOptions,
      scales: {
        x: {
            grid: { display: false },
            ticks: { 
                font: { family: 'IRANSansX', size: 12 },
                color: theme.palette.text.secondary
            }
        },
        y: {
            grid: { borderDash: [4, 4], color: '#f1f5f9', drawBorder: false },
            ticks: { 
                font: { family: 'IRANSansX', size: 12 },
                color: theme.palette.text.secondary,
                padding: 10
            },
            border: { display: false }
        }
      },
      plugins: {
          ...commonOptions.plugins,
          legend: { display: false } // Hide legend for simple bar chart
      }
  };
  
  const doughnutOptions: any = {
      ...commonOptions,
      cutout: '80%', // Thinner ring
      scales: { x: { display: false }, y: { display: false } }
  }

  return (
    <Box sx={{ py: 12, bgcolor: '#f0f6f9ff', position: 'relative' }} id="stats">
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10}>
            <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
            >
                <Typography variant="overline" color="primary" fontWeight="800" letterSpacing={3} sx={{ 
                    display: 'inline-block', 
                    mb: 2,
                    px: 2,
                    py: 0.5,
                    borderRadius: 4,
                    bgcolor: 'rgba(37, 99, 235, 0.08)',
                }}>
                    تحلیل داده‌محور
                </Typography>
                <Typography variant="h3" fontWeight="900" color="text.primary" mb={2} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                    رشد پایدار و <span style={{ color: theme.palette.primary.main }}>دستاوردها</span>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    نگاهی عمیق به عملکرد فنی و عملیاتی ما، نشان‌دهنده تعهد ما به کیفیت و توسعه مداوم است.
                </Typography>
            </motion.div>
        </Box>

        {/* Summary Counters Row */}
        <Grid container spacing={3} mb={8}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<MapOutlinedIcon />} value="+150" label="پروژه موفق" delay={0} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<AssessmentOutlinedIcon />} value="8.2M" label="نقاط برداشت شده" delay={0.1} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<PeopleOutlineIcon />} value="+45" label="متخصص فنی" delay={0.2} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<TimelineIcon />} value="12" label="سال تجربه" delay={0.3} />
          </Grid>
        </Grid>

        {/* Charts Area */}
        <Grid container spacing={4}>
          {/* Donut Chart - Distribution */}
          <Grid item xs={12} md={5}>
            <Paper
                component={motion.div}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                elevation={0} 
                sx={{ 
                    p: 5, 
                    height: 500, 
                    borderRadius: 6, 
                    bgcolor: 'background.paper',
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.05)', // Soft shadow
                    border: '1px solid rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={4} zIndex={1}>
                  <Box>
                      <Typography variant="h5" fontWeight="800" gutterBottom>توزیع خدمات</Typography>
                      <Typography variant="body2" color="text.secondary">تفکیک پروژه‌ها بر اساس نوع</Typography>
                  </Box>
                  <Box sx={{ bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '50%', p: 1 }}>
                      <AssessmentOutlinedIcon color="action" />
                  </Box>
              </Box>
              
              <Box flexGrow={1} position="relative" zIndex={1} display="flex" justifyContent="center" alignItems="center">
                <Doughnut data={doughnutData} options={doughnutOptions} />
                {/* Center Text Overlay - Modern */}
                <Box sx={{ 
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
                    textAlign: 'center', pointerEvents: 'none' 
                }}>
                    <Typography variant="h3" fontWeight="900" color="text.primary" sx={{ lineHeight: 1 }}>100%</Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight="500">تکمیل موفق</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Bar Chart - Growth */}
          <Grid item xs={12} md={7}>
            <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                elevation={0} 
                sx={{ 
                    p: 5, 
                    height: 500, 
                    borderRadius: 6, 
                    bgcolor: 'background.paper', 
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={4}>
                   <Box>
                      <Typography variant="h5" fontWeight="800" gutterBottom>روند رشد داده‌ها</Typography>
                      <Typography variant="body2" color="text.secondary">افزایش حجم نقاط برداشت شده (میلیون)</Typography>
                  </Box>
                   <Box sx={{ bgcolor: 'rgba(0,0,0,0.04)', borderRadius: '50%', p: 1 }}>
                      <TimelineIcon color="action" />
                  </Box>
              </Box>
              <Box flexGrow={1}>
                <Bar data={barData} options={barOptions} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats;