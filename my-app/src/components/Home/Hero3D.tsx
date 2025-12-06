// src/components/Home/Hero3D.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Box, Container, Typography, Button, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.0008);
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 30, 80);
    camera.rotation.x = -0.3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const count = 50000; // Increased particle count
    const positions = new Float32Array(count * 3);
    const originalY = new Float32Array(count);
    const width = 350, depth = 350, size = 1200; // Wider field

    let i = 0;
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        if (i >= count) break;
        const pX = (x / width - 0.5) * size;
        const pZ = (z / depth - 0.5) * size;
        const pY = Math.sin(pX * 0.05) * Math.cos(pZ * 0.05) * 10 + Math.sin(pZ * 0.1) * 5;
        
        positions[i * 3] = pX;
        positions[i * 3 + 1] = pY - 20; // Lowered slightly
        positions[i * 3 + 2] = pZ;
        originalY[i] = pY - 20;
        i++;
      }
    }

    // Mark attribute as dynamic for GPU updates
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const material = new THREE.PointsMaterial({
      size: 0.6, 
      color: theme.palette.primary.main,
      transparent: true,
      opacity: 0.7,
    });

    const pointsMesh = new THREE.Points(geometry, material);
    scene.add(pointsMesh);

    // Mouse Interaction
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      const currentWindowHalfX = window.innerWidth / 2;
      const currentWindowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - currentWindowHalfX);
      mouseY = (event.clientY - currentWindowHalfY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;
    let baseRotationY = 0;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      // Continuous slow rotation + Mouse interaction
      baseRotationY += 0.0015;
      pointsMesh.rotation.y = baseRotationY + (targetX - pointsMesh.rotation.y) * 0.08;
      pointsMesh.rotation.x += (targetY - pointsMesh.rotation.x) * 0.08;

      const posArray = pointsMesh.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = posArray[i * 3];
        // Complex wave motion
        const wave = Math.sin(x * 0.05 + elapsedTime * 0.6) * 3 + Math.cos(x * 0.03 + elapsedTime * 0.4) * 2;
        posArray[i * 3 + 1] = originalY[i] + wave;
      }
      pointsMesh.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
    };
  }, [theme]);

  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      height: '100vh', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'start', // Pull content higher
      background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f0f9ff 60%, #e0f2fe 100%)', // Modern radial gradient
    }}>
      <div ref={mountRef} style={{ position: 'absolute', top: -10, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pointerEvents: 'none', direction: "ltr", mt: 15 }}> {/* Adjust mt for overall content position */}
        <Box sx={{ maxWidth: 700, pointerEvents: 'auto' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            
            {/* Modern Tag */}
            <Box sx={{ 
              display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 0.8, 
              borderRadius: '12px', bgcolor: 'rgba(255, 255, 255, 0.8)', 
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.1)',
              border: '1px solid rgba(37, 99, 235, 0.15)', mb: 4,
              backdropFilter: 'blur(8px)'
            }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: `0 0 0 4px ${theme.palette.primary.light}40` }} />
              <Typography variant="body2" fontWeight="700" color="primary.main" letterSpacing={0.2}> {/* Smaller and tighter letter-spacing */}
                پیشرو در مهندسی ژئوماتیک هوشمند
              </Typography>
            </Box>

            {/* Main Heading with Gradient Text */}
            <Typography variant="h1" fontWeight="900" sx={{ 
                fontSize: { xs: '3rem', md: '4.5rem' }, /* Smaller font size */
                mb: 3, 
                color: 'text.primary',
                lineHeight: 1.1,
                letterSpacing: -1
            }}>
              دقت در <br />
              <span style={{ 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
              }}>
                مقیاس کلان
              </span>
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8, fontWeight: 400, maxWidth: '90%' }}> {/* Adjusted to h6, which is smaller than h5 */}
              ما واقعیت فیزیکی زمین را به مدل‌های دیجیتال هوشمند و قابل تحلیل تبدیل می‌کنیم تا آینده‌ای دقیق‌تر بسازیم.
            </Typography>

            {/* Modern Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                variant="contained" 
                size="large" 
                href="#portfolio" 
                sx={{ 
                    py: 1.8, px: 4, // Adjusted padding
                    fontSize: '1rem', // Smaller font size
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px -5px rgba(37, 99, 235, 0.4)',
                    textTransform: 'none',
                    fontWeight: 700
                }}
              >
                مشاهده پروژه‌ها
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                href="#services" 
                sx={{ 
                    py: 1.8, px: 4, // Adjusted padding
                    fontSize: '1rem', // Smaller font size
                    borderRadius: '16px',
                    borderWidth: '2px',
                    borderColor: 'rgba(37, 99, 235, 0.3)',
                    color: 'text.primary',
                    bgcolor: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(10px)',
                    fontWeight: 600,
                    '&:hover': {
                        borderWidth: '2px',
                        borderColor: 'primary.main',
                        bgcolor: 'white'
                    }
                }}
              >
                خدمات ما
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
      
      {/* Scroll Indicator */}
      <Box 
        component={motion.div} 
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }} 
        transition={{ 
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, delay: 2 }
        }}
        whileHover={{ scale: 1.1, y: -25, cursor: 'pointer' }}
        onClick={handleScrollDown}
        sx={{ 
          position: 'absolute', 
          bottom: 50, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
        }} 
      >
         <Box sx={{
             p: 2,
             borderRadius: '50%',
             bgcolor: 'white',
             boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             border: '1px solid rgba(0,0,0,0.04)'
         }}>
            <ArrowDownwardIcon sx={{ fontSize: 32, color: 'primary.main' }} />
         </Box>
      </Box>
    </Box>
  );
};

export default Hero3D;