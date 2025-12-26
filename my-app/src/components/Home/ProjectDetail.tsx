// src/components/Home/ProjectDetail.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Chip, 
  Paper, 
  Stack, 
  useTheme,
  alpha,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { GridLegacy as Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';
import { projects } from '../../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();

  // Find project
  const project = projects.find(p => p.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5">پروژه یافت نشد</Typography>
        <Button onClick={() => navigate('/')} variant="contained">بازگشت به خانه</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', pb: 10 , direction: 'ltr' }}>
        
      {/* Navbar Placeholder / Back Button Header */}
      <Box sx={{ 
          py: 2, 
          px: 4, 
          position: 'sticky', 
          top: 0, 
          zIndex: 10, 
          bgcolor: alpha(theme.palette.background.default, 0.8), 
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: 'divider'
      }}>
          <Container maxWidth="lg">
            <Button 
                startIcon={<ArrowForwardIcon />} // RTL: arrow points right to go back
                onClick={() => navigate('/')}
                sx={{ fontWeight: 'bold' }}
            >
                بازگشت به لیست پروژه‌ها
            </Button>
          </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        
        {/* Title Section */}
        <Box mb={6}>
            <Stack direction="row" alignItems="center" gap={2} mb={2}>
                <Chip 
                    label={project.label} 
                    icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />} 
                    color="primary" 
                    variant="outlined" 
                    sx={{ borderRadius: '8px', fontWeight: 'bold', bgcolor: alpha(theme.palette.primary.main, 0.1), border: 'none' }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <StarIcon sx={{ fontSize: 16, color: 'gold' }} />
                    پروژه ویژه
                </Typography>
            </Stack>
            <Typography variant="h3" fontWeight="900" sx={{ background: `linear-gradient(45deg, ${theme.palette.text.primary}, ${theme.palette.primary.main})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
                {project.title}
            </Typography>
        </Box>

        <Grid container spacing={6}>
            
            {/* RIGHT COLUMN: Image & Quick Stats (In RTL, first item is right) */}
            <Grid item xs={12} md={5}>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    {/* Main Image */}
                    <Box sx={{ 
                        position: 'relative', 
                        borderRadius: 8, 
                        overflow: 'hidden', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        mb: 4,
                        aspectRatio: '4/3'
                    }}>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                        <Box sx={{ 
                            position: 'absolute', 
                            inset: 0, 
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' 
                        }} />
                    </Box>

                    {/* Info Card */}
                    <Paper elevation={0} sx={{ 
                        p: 4, 
                        borderRadius: 6, 
                        bgcolor: alpha(theme.palette.primary.main, 0.04), 
                        border: '1px solid',
                        borderColor: alpha(theme.palette.primary.main, 0.1)
                    }}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
                            اطلاعات کلی
                        </Typography>
                        <Stack spacing={3}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'white', color: 'primary.main' }}>
                                    <BusinessIcon />
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">کارفرما</Typography>
                                    <Typography variant="body2" fontWeight="bold">{project.client}</Typography>
                                </Box>
                            </Box>
                            <Divider variant="inset" component="li" sx={{ listStyle: 'none', ml: 0 }} />
                            <Box display="flex" alignItems="center" gap={2}>
                                <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'white', color: 'primary.main' }}>
                                    <LocationOnIcon />
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">موقعیت</Typography>
                                    <Typography variant="body2" fontWeight="bold">{project.location}</Typography>
                                </Box>
                            </Box>
                            <Divider variant="inset" component="li" sx={{ listStyle: 'none', ml: 0 }} />
                            <Box display="flex" alignItems="center" gap={2}>
                                <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'white', color: 'primary.main' }}>
                                    <CalendarTodayIcon />
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">سال اجرا</Typography>
                                    <Typography variant="body2" fontWeight="bold">{project.year}</Typography>
                                </Box>
                            </Box>
                             <Divider variant="inset" component="li" sx={{ listStyle: 'none', ml: 0 }} />
                             <Box display="flex" alignItems="center" gap={2}>
                                <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'white', color: 'success.main' }}>
                                    <CheckCircleIcon />
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">وضعیت</Typography>
                                    <Typography variant="body2" fontWeight="bold" color="success.main">{project.status}</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Paper>
                </motion.div>
            </Grid>

            {/* LEFT COLUMN: Description & Details */}
            <Grid item xs={12} md={7}>
                 <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    
                    <Box mb={6}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom color="text.primary">
                            شرح خدمات پروژه
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ lineHeight: 2, color: 'text.secondary', fontSize: '1.05rem', textAlign: 'justify' }}>
                            {project.longDescription}
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Paper sx={{ p: 3, height: '100%', borderRadius: 4, bgcolor: alpha(theme.palette.error.main, 0.05), border: '1px dashed', borderColor: alpha(theme.palette.error.main, 0.3) }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom color="error.main" sx={{ mb: 2 }}>
                                    چالش‌های پروژه
                                </Typography>
                                <List dense>
                                    {project.challenges.map((item, i) => (
                                        <ListItem key={i} alignItems="flex-start" sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'error.main' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                             <Paper sx={{ p: 3, height: '100%', borderRadius: 4, bgcolor: alpha(theme.palette.success.main, 0.05), border: '1px dashed', borderColor: alpha(theme.palette.success.main, 0.3) }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom color="success.main" sx={{ mb: 2 }}>
                                    راهکارها و دستاوردها
                                </Typography>
                                <List dense>
                                    {project.solutions.map((item, i) => (
                                        <ListItem key={i} alignItems="flex-start" sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'success.main' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Call to Action Box */}
                    <Box sx={{ mt: 8, p: 4, borderRadius: 5, background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, #000 100%)`, color: 'white', textAlign: 'center' }}>
                         <Typography variant="h6" gutterBottom>
                             آیا پروژه‌ای مشابه دارید؟
                         </Typography>
                         <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                             مشاوران ما آماده پاسخگویی به سوالات تخصصی شما هستند.
                         </Typography>
                         <Button variant="contained" color="primary" href="tel:09101108077" size="large" sx={{ borderRadius: 3, px: 4 }}>
                             دریافت مشاوره رایگان
                         </Button>
                    </Box>

                 </motion.div>
            </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
