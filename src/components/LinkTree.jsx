import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Twitter, GitHub } from '@mui/icons-material';
import FarcasterIcon from './FarcasterIcon';

const iconMap = {
  twitter: Twitter,
  github: GitHub,
  farcaster: FarcasterIcon,
};

function LinkTree({ links }) {
  return (
    <List sx={{ width: '100%', p: 0 }}>
      {links.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 2,
                bgcolor: 'background.default',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 15px rgba(255,255,255,0.2)',
                  '&:before': {
                    opacity: 1,
                  },
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText 
                primary={link.title}
                title={`Connect with me on ${link.title}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default LinkTree;