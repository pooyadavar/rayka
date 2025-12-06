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

// کامپوننت کارت آمار کوچک (شمارنده)
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
      borderRadius: 4,
      bgcolor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.2)',
        borderColor: 'primary.main'
      }
    }}
  >
    <Box sx={{
      p: 1.5,
      borderRadius: 3,
      color: 'primary.main',
      bgcolor: 'rgba(37, 99, 235, 0.1)'
    }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="h4" fontWeight="900" color="text.primary">
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontWeight="500">
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
        '#1e293b'  // dark slate
      ],
      borderWidth: 0,
      hoverOffset: 8
    }],
  };

  const barData = {
    labels: ['1400', '1401', '1402', '1403'],
    datasets: [{
      label: 'نقاط برداشت شده (میلیون)',
      data: [2, 4.5, 6, 8.2],
      backgroundColor: theme.palette.primary.main,
      borderRadius: 6,
      barThickness: 25,
    }],
  };

  // تنظیمات مشترک نمودارها
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: { family: 'IRANSansX', size: 12 },
          usePointStyle: true,
          boxWidth: 8,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleFont: { family: 'IRANSansX' },
        bodyFont: { family: 'IRANSansX' },
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
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
            ticks: { font: { family: 'IRANSansX' } }
        },
        y: {
            grid: { borderDash: [4, 4], color: '#f1f5f9' },
            ticks: { font: { family: 'IRANSansX' } },
            border: { display: false }
        }
      }
  };
  
  const doughnutOptions: any = {
      ...commonOptions,
      cutout: '75%',
      scales: { x: { display: false }, y: { display: false } }
  }

  return (
    <Box sx={{ py: 12, bgcolor: '#ffffff' }} id="stats">
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
             <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={2} sx={{ display: 'block', mb: 1 }}>
                داده‌کاوی و آمار
            </Typography>
            <Typography variant="h3" fontWeight="900" color="text.primary">
                رشد پایدار <span style={{ color: theme.palette.primary.main }}>و دقت بالا</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
                نگاهی آماری به دستاوردهای فنی و عملیاتی ما در طول سال‌های گذشته
            </Typography>
        </Box>

        {/* Summary Counters Row */}
        <Grid container spacing={3} mb={8}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard icon={<MapOutlinedIcon fontSize="large"/>} value="+150" label="پروژه موفق" delay={0} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<AssessmentOutlinedIcon fontSize="large"/>} value="8.2M" label="نقاط برداشت شده" delay={0.1} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<PeopleOutlineIcon fontSize="large"/>} value="+45" label="متخصص فنی" delay={0.2} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
             <StatCard icon={<TimelineIcon fontSize="large"/>} value="12" label="سال تجربه" delay={0.3} />
          </Grid>
        </Grid>

        {/* Charts Area */}
        <Grid container spacing={4}>
          {/* Donut Chart */}
          <Grid item xs={12} md={5}>
            <Paper
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                elevation={0} 
                sx={{ 
                    p: 4, 
                    height: 450, 
                    borderRadius: 6, 
                    bgcolor: '#f8fafc', // Very light grey
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6" fontWeight="bold">توزیع خدمات</Typography>
                  <Typography variant="caption" sx={{ bgcolor: 'white', px: 1, py: 0.5, borderRadius: 2, border: '1px solid #e2e8f0' }}>۱۴۰۲ - ۱۴۰۳</Typography>
              </Box>
              <Box flexGrow={1} position="relative">
                <Doughnut data={doughnutData} options={doughnutOptions} />
                {/* Center Text Overlay */}
                <Box sx={{ 
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -55%)', 
                    textAlign: 'center', pointerEvents: 'none' 
                }}>
                    <Typography variant="h4" fontWeight="bold" color="primary.main">100%</Typography>
                    <Typography variant="caption" color="text.secondary">تکمیل پروژه</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Bar Chart */}
          <Grid item xs={12} md={7}>
            <Paper
                component={motion.div}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                elevation={0} 
                sx={{ 
                    p: 4, 
                    height: 450, 
                    borderRadius: 6, 
                    bgcolor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6" fontWeight="bold">روند رشد داده‌ها</Typography>
                  <Typography variant="caption" color="text.secondary">مقیاس: میلیون نقطه</Typography>
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