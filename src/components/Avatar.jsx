import React from 'react';
import { Box } from '@mui/material';

const Avatar = ({ src, alt = 'Profile picture', size = 120 }) => (
  <Box
    component="div"
    sx={{
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      animation: 'float 6s ease-in-out infinite',
      mb: 3,
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease-in-out',
      },
      '& img:hover': {
        transform: 'scale(1.1)',
      },
      '@keyframes float': {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(-10px)',
        },
      },
    }}
  >
    <img src={src} alt={alt} />
  </Box>
);

export default Avatar;