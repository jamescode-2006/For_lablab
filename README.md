# Monthsary Website

This project is a romantic, mobile-friendly website for your monthsary celebration. It is built only with HTML, CSS, and JavaScript so it can be published directly on GitHub Pages.

## Project structure

monthsary-website/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── background.jpg
    ├── music/
    │   ├── our-song.mp3
    │   └── album-cover.jpg
    └── memories/
        ├── photo1.jpg
        ├── photo2.jpg
        ├── photo3.jpg
        ├── photo4.jpg
        └── photo5.jpg

## How to deploy on GitHub Pages

1. Create a GitHub repository.
2. Upload all project files to the repository root.
3. Make sure index.html is in the main/root folder.
4. Open the repository in GitHub.
5. Go to Settings.
6. Open Pages.
7. Under Source, choose the main branch.
8. Choose the root folder.
9. Click Save.
10. Wait for GitHub Pages to publish the site.
11. Open the generated GitHub Pages link on your phone or browser.

## Update the content

### Background picture
Replace the file in assets/background.jpg with your new couple photo. Keep the same filename to avoid changing the code.

### Memory pictures
Add or replace files in assets/memories/ and keep the same names used in script.js.

### Music
Put your song in assets/music/our-song.mp3 and album cover in assets/music/album-cover.jpg.

### Names and PIN
Edit the settings object in script.js:

```javascript
const settings = {
    pin: "123456",
    name1: "Your Name",
    name2: "My Love",
    monthsaryDate: "August 31, 2026",
    songTitle: "Our Song",
    albumName: "Our Memories",
    artist: "Artist Name"
};
```

### Monthsary date and love letter
- Update the love letter text in index.html.
- Update the monthsary date in script.js.
- Update the relationship start date in script.js if needed.

## Mobile-friendly notes

- The site is designed for phone screens first.
- It uses a fixed bottom navigation.
- There is no long page scrolling between sections.
- CSS is responsive for small and large screens.

## GitHub Pages compatibility

- Use only relative paths.
- No local file paths, localhost, PHP, backend, or absolute paths.
- The website works as a static site on GitHub Pages.

## Quick local preview

Open index.html in a browser or use a simple local preview extension such as Live Server in VS Code.
4. **Test the PIN** before sharing
5. **Preview on mobile** to ensure it looks good
6. **Keep file sizes reasonable** (under 5MB for images, under 10MB for music)

## 📝 Credits

Created with ❤️ for couples celebrating their special moments.

**Technologies Used:**
- HTML5
- CSS3
- Vanilla JavaScript (No frameworks!)

## 📄 License

This is a personal project. Feel free to use, modify, and share for personal romantic purposes! 💕

---

**Made with love for your special someone ❤️**

Enjoy your monthsary! 🎉
