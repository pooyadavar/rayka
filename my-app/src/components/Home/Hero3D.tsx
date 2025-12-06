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
    const count = 40000;
    const positions = new Float32Array(count * 3);
    const originalY = new Float32Array(count);
    const width = 300, depth = 300, size = 1000;

    let i = 0;
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        if (i >= count) break;
        const pX = (x / width - 0.5) * size;
        const pZ = (z / depth - 0.5) * size;
        const pY = Math.sin(pX * 0.05) * Math.cos(pZ * 0.05) * 10 + Math.sin(pZ * 0.1) * 5;
        
        positions[i * 3] = pX;
        positions[i * 3 + 1] = pY - 15;
        positions[i * 3 + 2] = pZ;
        originalY[i] = pY - 15;
        i++;
      }
    }

    // Mark attribute as dynamic for GPU updates
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const material = new THREE.PointsMaterial({
      size: 0.7, // Slightly larger than original, but not too big
      color: theme.palette.primary.main,
      transparent: true,
      opacity: 0.6,
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
      baseRotationY += 0.002;
      pointsMesh.rotation.y = baseRotationY + (targetX - pointsMesh.rotation.y) * 0.1;
      pointsMesh.rotation.x += (targetY - pointsMesh.rotation.x) * 0.1;

      const posArray = pointsMesh.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = posArray[i * 3];
        // Increased wave amplitude to 3.5 for visible movement
        const wave = Math.sin(x * 0.08 + elapsedTime * 0.8) * 3.5;
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
      alignItems: 'start',
      background: 'linear-gradient(-45deg, #dff4fbff, #f5f5f5ff, #f3f7fbff, #ffffff)',
      backgroundSize: '400% 400%',
      animation: 'gradientAnimation 15s ease infinite'
    }}>
      <div ref={mountRef} style={{ position: 'absolute', top: -40, left: 0, zIndex: 0, width: '100%', height: '100%' }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pointerEvents: 'none', direction: "ltr", mt: 14 }}>
        <Box sx={{ maxWidth: 600, pointerEvents: 'auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{ 
              display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, 
              borderRadius: '50px', bgcolor: 'rgba(37, 99, 235, 0.1)', color: 'primary.main', mb: 3,
              backdropFilter: 'blur(4px)', border: '1px solid rgba(37, 99, 235, 0.2)'
            }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', animation: 'pulse 2s infinite' }} />
              <Typography variant="caption" fontWeight="bold">پیشرو در مهندسی ژئوماتیک</Typography>
            </Box>

            <Typography variant="h1" fontWeight="900" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, mb: 2, color: 'text.primary' }}>
              دقت <br />
              <span style={{ color: theme.palette.primary.main }}>در مقیاس کلان</span>
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 5, lineHeight: 1.8 }}>
              تبدیل واقعیت فیزیکی زمین به مدل‌های دیجیتال هوشمند با استفاده از پیشرفته‌ترین تکنولوژی‌های نقشه‌برداری.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" href="#portfolio" sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}>
                مشاهده پروژه‌ها
              </Button>
              <Button variant="outlined" size="large" href="#services" sx={{ py: 1.5, px: 4, fontSize: '1.1rem', bgcolor: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(5px)' }}>
                خدمات ما
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
      
      <Box 
        component={motion.div} 
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }} // Increased jump height
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.1, y: -30 }} // More pronounced jump on hover
        onClick={handleScrollDown}
        sx={{ 
          position: 'absolute', 
          bottom: 40, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          opacity: 0.8, 
          cursor: 'pointer', 
          zIndex: 1,
          p: 1.5, // Add padding to make space for border-radius
          bgcolor: 'rgba(255,255,255,0.2)', // Subtle background
          borderRadius: '50%', // Circular border-radius
          backdropFilter: 'blur(5px)', // Glassmorphism effect
          border: '1px solid rgba(255,255,255,0.1)' // Light border
        }} 
      >
         <ArrowDownwardIcon sx={{ fontSize: 40, color: 'primary.main' }} />
      </Box>
    </Box>
  );
};

export default Hero3D;