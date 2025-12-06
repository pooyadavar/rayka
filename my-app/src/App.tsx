// src/App.tsx
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import './index.css'; 

import theme from './theme/theme';
import Navbar from './components/Layout/Navbar';
import Hero3D from './components/Home/Hero3D';
import Services from './components/Home/Services';
import Stats from './components/Home/Stats';
import Portfolio from './components/Home/Portfolio';
// فرض بر این است که Contact و Footer نیز ساخته شده‌اند (مشابه فایل HTML)
import { Box, Typography, Button, TextField, Select, MenuItem } from '@mui/material'; // برای Contact ساده شده
import Strengths from './components/Home/Strengths';

// تنظیمات RTL
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// کامپوننت Contact سریع برای تکمیل پروژه
const ContactSection = () => (
  <Box sx={{ py: 10 }} id="contact">
     {/* کد بخش تماس مشابه HTML اما با کامپوننت‌های MUI */}
     <Typography textAlign="center">بخش تماس با ما </Typography>
  </Box>
);

const App: React.FC = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Hero3D />
        <Services />
        <Strengths />
        <Stats />
        <Portfolio />
        <ContactSection />
        <Box component="footer" sx={{ py: 4, textAlign: 'center', bgcolor: 'grey.100' }}>
           <Typography variant="body2" color="text.secondary">© 1403 شرکت مهندسی نقشه‌پردازان رایکا</Typography>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;