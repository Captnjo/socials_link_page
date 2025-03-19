import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, Typography, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import LinkTree from './components/LinkTree';
import Avatar from './components/Avatar';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(144, 202, 249, 0.05) 0%, rgba(0, 0, 0, 0) 50%),
            repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px,
            transparent 1px, transparent 10px)`,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
          backdropFilter: 'blur(2px)',
        },
      },
    },
  },
});

import { config } from './config';

const { profileImage, socialLinks } = config;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            minHeight: '100vh',
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box
            sx={{
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.05)' },
                '100%': { transform: 'scale(1)' }
              }
            }}
          >
            <Avatar src={profileImage} />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                fontWeight: 'bold',
                animation: 'typing 3.5s steps(40, end)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                '@keyframes typing': {
                  from: { width: '0' },
                  to: { width: '100%' }
                },
                mb: 1
              }}
            >
              My Social Links
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 0.8,
                mb: 3
              }}
            >
              Connect with me across the digital universe
            </Typography>
          </Box>
          
          <Paper 
            elevation={3}
            sx={{
              width: '100%',
              p: 3,
              borderRadius: 2,
              backgroundColor: 'background.paper',
            }}
          >
            <LinkTree links={socialLinks} />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;