# Space Music Setup

## Adding Space-Themed Background Music

The BackgroundMusic component is now integrated into your website. To add actual space-themed music:

### Option 1: Use a Free Space Music File
1. Download a royalty-free space-themed music file (MP3 format)
2. Recommended sources:
   - Pixabay Music: https://pixabay.com/music/
   - YouTube Audio Library: https://studio.youtube.com/channel/UC...
   - Freesound: https://freesound.org/
3. Rename the file to `space-music.mp3`
4. Place it in the `public/` folder of your project

### Option 2: Use the Placeholder (No Audio File)
The component is set up to work with `/space-music.mp3` in the public folder. 
If no file is present, the music simply won't play, but the website will function normally.

### Features
- **Auto-play**: Music attempts to play automatically when the website loads
- **Browser Compatibility**: Handles autoplay restrictions gracefully
- **Volume Control**: Set to 30% by default for background ambiance
- **Loop**: Music repeats continuously
- **Toggle Button**: Users can pause/play music using the button in the bottom-right corner
- **Responsive Design**: Music control adapts to different screen sizes

### Music Control Button
- Located in the bottom-right corner
- Shows play/pause icon based on current state
- Styled to match your space theme with glassmorphism effect

### Note on Autoplay
Modern browsers may block autoplay until the user interacts with the page. This is normal behavior and the component handles it gracefully.

The music will start playing as soon as the user interacts with any part of the website.
