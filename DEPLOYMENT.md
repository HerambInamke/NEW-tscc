# TSCC Website Deployment Guide

## Video File Setup

The website uses a local video file that needs to be included in your deployment:

### Video File Location
- **Source**: `public/NEW-TSCC-INRTO.mp4`
- **Build Output**: `dist/NEW-TSCC-INRTO.mp4`
- **Web Path**: `/NEW-TSCC-INRTO.mp4`

### Deployment Checklist

1. **Video File**: Ensure `NEW-TSCC-INRTO.mp4` is in the `public` folder
2. **Build**: Run `npm run build` to create the `dist` folder
3. **Deploy**: Upload the entire `dist` folder contents to your web server
4. **Verify**: Check that the video loads at `yoursite.com/NEW-TSCC-INRTO.mp4`

### Video Optimization

- **Format**: MP4 (H.264 codec recommended)
- **Size**: Optimize for web (consider compression if file is too large)
- **Fallback**: The site includes error handling if video fails to load

### Server Requirements

- **MIME Type**: Ensure your server serves `.mp4` files with `video/mp4` MIME type
- **Caching**: Set appropriate cache headers for video files
- **HTTPS**: Recommended for video autoplay in modern browsers

### Troubleshooting

If video doesn't load:
1. Check browser console for errors
2. Verify video file is accessible at the correct URL
3. Ensure server supports video streaming
4. Check file permissions on the server

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```
