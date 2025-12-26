// src/components/Home/Hero3D.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ServerBro from "../../assets/svg/Server-bro.svg";

// Component for the 3D Canvas (Terrain/GIS Style)
const ThreeDCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Clear existing canvas to prevent duplicates
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.001); // Increased fog for depth
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    // Position camera to look at the terrain from an angle
    camera.position.set(0, 150, 400);
    camera.rotation.x = -0.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- GIS Terrain Generation ---
    const geometry = new THREE.BufferGeometry();

    // Grid parameters
    const width = 240; // Denser grid
    const depth = 240; // Denser grid
    const separation = 10; // Closer points
    const count = width * depth;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Initialize points in a flat grid first
    let i = 0;
    for (let ix = 0; ix < width; ix++) {
      for (let iz = 0; iz < depth; iz++) {
        // Center the grid
        const x = ix * separation - (width * separation) / 2;
        const z = iz * separation - (depth * separation) / 2;
        const y = 0; // Initial Y

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        i++;
      }
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );

    // Material
    const material = new THREE.PointsMaterial({
      size: 1.6,
      color: theme.palette.primary.main,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const pointsMesh = new THREE.Points(geometry, material);
    pointsMesh.position.x = -500; // Shift terrain to the left
    scene.add(pointsMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 1;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      const time = clock.getElapsedTime();
      const positions = pointsMesh.geometry.attributes.position
        .array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < width; ix++) {
        for (let iz = 0; iz < depth; iz++) {
          // Current X and Z
          const x = positions[i * 3];
          const z = positions[i * 3 + 2];

          // --- Topography Formula (Simulating Terrain) ---
          // Using sine waves to create "hills" and "valleys"
          // We move the waves with 'time' to make it look like scanning or live data

          const freq1 = 0.005; // Large hills
          const freq2 = 0.02; // Small details

          let y =
            Math.sin((x + time * 20) * freq1) *
              Math.cos((z + time * 10) * freq1) *
              60 +
            Math.sin((x - time * 10) * freq2) * Math.cos(z * freq2) * 15;

          // Update Y
          positions[i * 3 + 1] = y;
          i++;
        }
      }

      pointsMesh.geometry.attributes.position.needsUpdate = true;

      // Gentle camera movement based on mouse
      targetRotationY = mouseX * 0.001;
      targetRotationX = mouseY * 0.001;

      pointsMesh.rotation.y += 0.05 * (targetRotationY - pointsMesh.rotation.y);
      pointsMesh.rotation.x += 0.05 * (targetRotationX - pointsMesh.rotation.x);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

// Component for the SVG Illustration
const SvgIllustration: React.FC = () => (
  <Box
    component="img"
    src={ServerBro}
    alt="Server Illustration"
    sx={{
      position: "absolute",
      top: "50%",
      right: "5%",
      transform: "translateY(-50%)",
      width: { xs: "80%", md: "45%" },
      maxHeight: "80%",
      zIndex: 0,
      opacity: 0.9,
    }}
  />
);

const Hero3D: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isLgUpScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleScrollDown = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "start",
        background:
          "radial-gradient(circle at 50% 50%, #ffffff 0%, #f0f9ff 60%, #e0f2fe 100%)",
      }}
    >
      <ThreeDCanvas />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          pointerEvents: "none",
          direction: "ltr",
          mt: 15,
        }}
      >
        <Box sx={{ maxWidth: 700, pointerEvents: "auto",
          bgcolor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(1px)",
          borderRadius: "16px",
          p: 4
         }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Modern Tag */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.5,
                py: 0.8,
                borderRadius: "12px",
                bgcolor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.1)",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                mb: 4,
                backdropFilter: "blur(8px)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  boxShadow: `0 0 0 4px ${theme.palette.primary.light}40`,
                }}
              />
              <Typography
                variant="caption"
                fontWeight="700"
                color="primary.main"
                letterSpacing={0.2}
              >
                پیشرو در راهکارهای هوشمند مکانی و فناوری دیجیتال
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="body2"
              fontWeight="900"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem" },
                mb: 3,
                color: "text.primary",
                lineHeight: 1.1,
                letterSpacing: -1,
              }}
            >
              GIS <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                برای آینده ای هوشمند{" "}
              </span>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 6, lineHeight: 1.8, fontWeight: 400, maxWidth: "90%" }}
            >
              داده‌پژوهان رایکا، متخصص در هوشمندسازی داده‌ها و توسعه سامانه‌های
              مبتنی بر مکان
            </Typography>

            {/* Modern Action Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <Button
                variant="contained"
                size="large"
                href="#portfolio"
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: "1rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px -5px rgba(37, 99, 235, 0.4)",
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                مشاهده پروژه‌ها
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#services"
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: "1rem",
                  borderRadius: "16px",
                  borderWidth: "2px",
                  borderColor: "rgba(37, 99, 235, 0.3)",
                  color: "text.primary",
                  bgcolor: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(10px)",
                  fontWeight: 600,
                  "&:hover": {
                    borderWidth: "2px",
                    borderColor: "primary.main",
                    bgcolor: "white",
                  },
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
        initial={{ x: "-50%", y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          opacity: { duration: 1, delay: 2 },
        }}
        whileHover={{ scale: 1.1, y: -25, cursor: "pointer" }}
        onClick={handleScrollDown}
        sx={{
          position: "absolute",
          bottom: 50,
          left: "50%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            p: 2,
            borderRadius: "50%",
            bgcolor: "white",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            display: {lg: "flex", xs: "none", sm: "none", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: 32, color: "primary.main" ,  }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero3D;
