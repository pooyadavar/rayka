// src/components/Home/Portfolio.tsx
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  ToggleButton, 
  ToggleButtonGroup, 
  Card, 
  CardActionArea, 
  Chip, 
  useTheme 
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { GridLegacy as Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // RTL arrow
import TerrainIcon from '@mui/icons-material/Terrain';
import MapIcon from '@mui/icons-material/Map';
import FlightIcon from '@mui/icons-material/Flight';
import LayersIcon from '@mui/icons-material/Layers';

// Mapping categories to icons/gradients
const getCategoryDetails = (cat: string) => {
  switch(cat) {
    case 'topography': 
      return { 
        icon: <TerrainIcon sx={{ fontSize: 120 }} />, 
        gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' 
      };
    case 'cadastre': 
      return { 
        icon: <MapIcon sx={{ fontSize: 120 }} />, 
        gradient: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)' 
      };
    case 'drone': 
      return { 
        icon: <FlightIcon sx={{ fontSize: 120 }} />, 
        gradient: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)' 
      };
    case 'gis': 
      return { 
        icon: <LayersIcon sx={{ fontSize: 120 }} />, 
        gradient: 'linear-gradient(135deg, #475569 0%, #334155 100%)' 
      };
    default: 
      return { 
        icon: <MapIcon sx={{ fontSize: 120 }} />, 
        gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' 
      };
  }
};

const projects = [
  { id: 1, title: 'آزادراه تهران-شمال', cat: 'topography', label: 'توپوگرافی' },
  { id: 2, title: 'کاداستر اراضی کشاورزی', cat: 'cadastre', label: 'کاداستر' },
  { id: 3, title: 'مدل‌سازی شهرک صنعتی', cat: 'drone', label: 'فوتوگرامتری' },
  { id: 4, title: 'پایش خط لوله گاز', cat: 'topography', label: 'توپوگرافی' },
  { id: 5, title: 'سامانه GIS فضای سبز', cat: 'gis', label: 'GIS' },
  { id: 6, title: 'تفکیک برج میلاد نور', cat: 'cadastre', label: 'کاداستر' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const theme = useTheme();

  const handleFilter = (_event: React.MouseEvent<HTMLElement>, newFilter: string) => {
    if (newFilter !== null) setFilter(newFilter);
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.cat === filter);

  return (
    <Box sx={{ py: 12, bgcolor: '#f4f6f8', position: 'relative', overflow: 'hidden' }} id="portfolio">
       {/* Background Decorative Shapes */}
       <Box sx={{ 
           position: 'absolute', 
           top: -100, 
           right: -100, 
           width: 500, 
           height: 500, 
           borderRadius: '50%', 
           bgcolor: theme.palette.primary.main, 
           opacity: 0.03, 
           filter: 'blur(80px)',
           zIndex: 0 
       }} />
       
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={8}>
            <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={2} sx={{ display: 'block', mb: 1 }}>
                نمونه کارهای ما
            </Typography>
            <Typography variant="h3" fontWeight="900" sx={{ mb: 2, color: 'text.primary' }}>
              پروژه‌های <span style={{ color: theme.palette.primary.main }}>اجرا شده</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={600} mx="auto" sx={{ lineHeight: 1.8 }}>
                مجموعه‌ای از پروژه‌های موفق در حوزه‌های نقشه‌برداری، کاداستر و سیستم‌های اطلاعات مکانی که با دقت و کیفیت بالا اجرا شده‌اند.
            </Typography>
        </Box>
        
        {/* Filter Buttons */}
        <Box display="flex" justifyContent="center" mb={8}>
          <ToggleButtonGroup 
            value={filter} 
            exclusive 
            onChange={handleFilter}
            sx={{ 
                bgcolor: 'white', 
                p: 0.75, 
                borderRadius: '50px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& .MuiToggleButton-root': {
                    border: 'none',
                    borderRadius: '50px !important',
                    px: { xs: 2, md: 3 },
                    py: 1,
                    mx: 0.5,
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        '&:hover': { bgcolor: 'primary.dark' }
                    },
                    '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.04)'
                    }
                }
            }}
          >
            <ToggleButton value="all">همه موارد</ToggleButton>
            <ToggleButton value="topography">توپوگرافی</ToggleButton>
            <ToggleButton value="cadastre">کاداستر</ToggleButton>
            <ToggleButton value="drone">پهپاد و فوتوگرامتری</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((p) => {
                const { icon, gradient } = getCategoryDetails(p.cat);
                return (
                  <Grid item xs={12} md={4} key={p.id} component={motion.div} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                    <Card sx={{ 
                      borderRadius: 6, 
                      overflow: 'hidden', 
                      position: 'relative', 
                      height: 340, 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                          transform: 'translateY(-12px)',
                          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                          '& .bg-icon': { 
                              transform: 'scale(1.2) rotate(-10deg) translate(10px, -10px)', 
                              opacity: 0.15 
                           },
                           '& .details-btn': {
                               transform: 'translateX(-5px)',
                               color: 'white'
                           }
                      } 
                    }}>
                        <CardActionArea sx={{ height: '100%', width: '100%', p: 0 }}>
                          <Box sx={{ 
                              height: '100%', 
                              width: '100%',
                              background: gradient, 
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              p: 4,
                              color: 'white'
                          }}>
                             {/* Large Decorative Icon */}
                             <Box className="bg-icon" sx={{ 
                                 position: 'absolute', 
                                 top: -20, 
                                 right: -20, 
                                 color: 'white',
                                 opacity: 0.08, 
                                 transition: '0.5s ease',
                                 zIndex: 0
                             }}>
                                 {icon}
                             </Box>
                             
                             {/* Top: Chip */}
                             <Box sx={{ zIndex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                                <Chip 
                                    label={p.label} 
                                    size="small" 
                                    sx={{ 
                                        bgcolor: 'rgba(255,255,255,0.15)', 
                                        color: 'white', 
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        fontWeight: 500,
                                        height: 28
                                    }} 
                                />
                             </Box>

                             {/* Bottom: Content */}
                             <Box sx={{ zIndex: 1 }}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ 
                                    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    mb: 2
                                }}>
                                    {p.title}
                                </Typography>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.9 }}>
                                    <Typography variant="button" fontWeight="bold" sx={{ fontSize: '0.9rem' }}>
                                        مشاهده جزئیات
                                    </Typography>
                                    <ArrowBackIcon className="details-btn" fontSize="small" sx={{ transition: '0.3s' }} />
                                </Box>
                             </Box>
                             
                          </Box>
                        </CardActionArea>
                    </Card>
                  </Grid>
                );
            })}
          </AnimatePresence>
        </Grid>
        
        {/* More Button */}
        <Box textAlign="center" mt={8}>
            <Typography 
                component="a" 
                href="#" 
                sx={{ 
                    textDecoration: 'none', 
                    color: 'text.secondary', 
                    fontWeight: 500, 
                    borderBottom: '1px dashed',
                    borderColor: 'text.secondary',
                    pb: 0.5,
                    transition: '0.3s',
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' }
                }}
            >
                مشاهده آرشیو کامل پروژه‌ها
            </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Portfolio;