// src/App.tsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import theme from "./theme/theme";
import Navbar from "./components/Layout/Navbar";
import Hero3D from "./components/Home/Hero3D";
import Services from "./components/Home/Services";
import Portfolio from "./components/Home/Portfolio";
import Strengths from "./components/Home/Strengths";
import Footer from "./components/Layout/Footer";
import ProjectDetail from "./components/Home/ProjectDetail";

// تنظیمات RTL
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// HomePage component wrapping the single-page sections
const HomePage = () => (
  <>
    <Hero3D />
    <Services />
    <Strengths />
    <Portfolio />
  </>
);

const App: React.FC = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;