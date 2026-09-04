ASSETS FOLDER INSTRUCTIONS
==========================

This folder contains all the images and audio files for your monthsary website.

REQUIRED FILES:
---------------

1. background.jpg
   - Place your couple photo here
   - This will be the background for the Home section
   - Recommended size: 1920x1080 or higher

2. music/our-song.mp3
   - Place your special song here
   - Supported formats: .mp3
   - The song will play automatically after unlocking

3. music/album-cover.jpg
   - Place the album cover image here
   - Recommended size: 500x500 or square ratio

4. memories/photo1.jpg
5. memories/photo2.jpg
6. memories/photo3.jpg
7. memories/photo4.jpg
8. memories/photo5.jpg
   - Place your couple photos here
   - You can add more photos by:
     a. Adding more image files (photo6.jpg, photo7.jpg, etc.)
     b. Updating the settings in script.js

HOW TO ADD MORE PHOTOS:
-----------------------
1. Add your photo files to assets/memories/
2. Open script.js
3. Find the "photos" array in the settings section
4. Add new photo objects like this:

   {
       filename: "photo6.jpg",
       title: "Your Photo Title ❤️",
       date: "Month Day, Year"
   }

SUPPORTED IMAGE FORMATS:
------------------------
- .jpg / .jpeg
- .png
- .gif
- .webp

NOTE: If image files are missing, the website will display colored placeholders with the photo titles.
