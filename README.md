# Personal LinkTree

A modern, customizable LinkTree clone built with React and Material-UI. Features a clean design with smooth animations and a responsive layout.

## Features

- 🎨 Modern UI with Material Design
- ✨ Smooth animations and hover effects
- 📱 Fully responsive design
- 🌗 Dark mode by default
- 🔧 Easy to customize

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/linktree.git
cd linktree
```

2. Install dependencies
```bash
npm install
```

3. Create your configuration
Copy `src/config.js` to `src/config.local.js` and update it with your information:
```javascript
export const config = {
  profileImage: 'your-profile-image-url',
  socialLinks: [
    { title: 'Twitter', url: 'your-twitter-url', icon: 'twitter' },
    { title: 'GitHub', url: 'your-github-url', icon: 'github' },
    { title: 'Farcaster', url: 'your-farcaster-url', icon: 'farcaster' },
    // Add more social links as needed
  ],
};
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Customization

- Update `src/config.local.js` with your social media links and profile image
- Modify the theme in `src/App.jsx` to change colors and styling
- Add new social icons by importing them from `@mui/icons-material`

## Contributing

Feel free to open issues and pull requests!

## License

MIT