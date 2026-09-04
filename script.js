// ==========================================
// EASY CUSTOMIZATION SETTINGS
// ==========================================
const settings = {
    pin: "120525",
    name1: "Lablab",
    name2: "My Love",
    monthsaryDate: "Created at August 31, 2026",
    songTitle: "Sa Bawat Sandali",
    albumName: "Our Memories",
    artist: "Amiel Sol",

    // Photo album data
    photos: [
        {
            filename: "photo1.jpg",
            title: "First date sa panaon plaza 💖",
            date: ""
        },
        {
            filename: "photo2.jpg",
            title: "first pic sa school💕",
            date: ""
        },
        {
            filename: "photo3.jpg",
            title: "Together Forever 💖",
            date: ""
        },
        {
            filename: "photo4.jpg",
            title: "Happy Moments 💗",
            date: ""
        },
        {
            filename: "photo5.jpg",
            title: "Best Day Ever 💝",
            date: ""
        },
        {
            filename: "photo6.jpg",
            title: "Best Day Ever 💝",
            date: ""
        },
        {
            filename: "photo7.jpg",
            title: "pic before school 💖",
            date: ""
        },
    ]
};

// ==========================================
// PIN LOCK FUNCTIONALITY
// ==========================================
const lockScreen = document.getElementById('lockScreen');
const mainWebsite = document.getElementById('mainWebsite');
const pinBoxes = document.querySelectorAll('.pin-box');
const unlockBtn = document.getElementById('unlockBtn');
const errorMessage = document.getElementById('errorMessage');
const pinContainer = document.getElementById('pinContainer');
const audioPlayer = document.getElementById('audioPlayer');

// Auto-focus first PIN box
pinBoxes[0].focus();

// PIN box input handling
pinBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
        const value = e.target.value;

        // Only allow numbers
        if (!/^\d$/.test(value)) {
            e.target.value = '';
            return;
        }

        // Move to next box
        if (value && index < pinBoxes.length - 1) {
            pinBoxes[index + 1].focus();
        }
    });

    // Handle backspace
    box.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            pinBoxes[index - 1].focus();
        }

        // Handle Enter key
        if (e.key === 'Enter') {
            unlockBtn.click();
        }
    });
});

// Unlock button handler
unlockBtn.addEventListener('click', () => {
    const enteredPin = Array.from(pinBoxes).map(box => box.value).join('');

    if (enteredPin === settings.pin) {
        // Correct PIN
        lockScreen.classList.add('hidden');
        setTimeout(() => {
            mainWebsite.classList.add('visible');
            // Start music after user interaction
            audioPlayer.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        }, 500);
    } else {
        // Wrong PIN
        errorMessage.classList.add('show');
        pinContainer.classList.add('shake');

        // Remove shake animation
        setTimeout(() => {
            pinContainer.classList.remove('shake');
        }, 500);

        // Hide error message after 2 seconds
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 2000);

        // Clear all PIN boxes
        pinBoxes.forEach(box => box.value = '');
        pinBoxes[0].focus();
    }
});

// ==========================================
// DISPLAY CUSTOMIZED CONTENT
// ==========================================
document.getElementById('name1Display').textContent = settings.name1;
document.getElementById('name2Display').textContent = settings.name2;
document.getElementById('dateDisplay').textContent = settings.monthsaryDate;
document.getElementById('senderName').textContent = settings.name1;
document.getElementById('songTitleDisplay').textContent = settings.songTitle;
document.getElementById('albumNameDisplay').textContent = settings.albumName;
document.getElementById('artistDisplay').textContent = settings.artist;

// ==========================================
// TOGETHER SINCE + MONTHSARY COUNTDOWN
// ==========================================
const relationshipStart = new Date("2025-12-05T00:00:00");

function getRelationshipParts(now) {
    let years = now.getFullYear() - relationshipStart.getFullYear();
    let months = now.getMonth() - relationshipStart.getMonth();
    let days = now.getDate() - relationshipStart.getDate();
    let hours = now.getHours() - relationshipStart.getHours();
    let minutes = now.getMinutes() - relationshipStart.getMinutes();
    let seconds = now.getSeconds() - relationshipStart.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes -= 1;
    }

    if (minutes < 0) {
        minutes += 60;
        hours -= 1;
    }

    if (hours < 0) {
        hours += 24;
        days -= 1;
    }

    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months -= 1;
    }

    if (months < 0) {
        months += 12;
        years -= 1;
    }

    return {
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds)
    };
}

function updateRelationshipCounter() {
    const now = new Date();
    const parts = getRelationshipParts(now);

    document.getElementById('relationshipStartDisplay').textContent = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(relationshipStart);

    document.getElementById('relYears').textContent = String(parts.years).padStart(2, '0');
    document.getElementById('relMonths').textContent = String(parts.months).padStart(2, '0');
    document.getElementById('relDays').textContent = String(parts.days).padStart(2, '0');
    document.getElementById('relHours').textContent = String(parts.hours).padStart(2, '0');
    document.getElementById('relMinutes').textContent = String(parts.minutes).padStart(2, '0');
    document.getElementById('relSeconds').textContent = String(parts.seconds).padStart(2, '0');
}

function getNextMonthsaryTarget(now) {
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    if (currentDay === 5) {
        return {
            target: new Date(currentYear, currentMonth + 1, 5, 0, 0, 0),
            today: true,
            label: new Date(currentYear, currentMonth + 1, 5)
        };
    }

    if (currentDay < 5) {
        return {
            target: new Date(currentYear, currentMonth, 5, 0, 0, 0),
            today: false,
            label: new Date(currentYear, currentMonth, 5)
        };
    }

    return {
        target: new Date(currentYear, currentMonth + 1, 5, 0, 0, 0),
        today: false,
        label: new Date(currentYear, currentMonth + 1, 5)
    };
}

function updateMonthsaryCountdown() {
    const now = new Date();
    const { target, today, label } = getNextMonthsaryTarget(now);
    const nextMonthsaryDisplay = document.getElementById('nextMonthsaryDisplay');
    const monthsaryStatus = document.getElementById('monthsaryStatus');

    const timeLeft = target.getTime() - now.getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    nextMonthsaryDisplay.textContent = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric'
    }).format(label);

    if (today) {
        monthsaryStatus.textContent = 'Happy Monthsary, My Love! ❤️';
    } else {
        monthsaryStatus.textContent = 'Countdown to our next special day';
    }

    document.getElementById('countdownDays').textContent = String(days).padStart(2, '0');
    document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
}

updateRelationshipCounter();
updateMonthsaryCountdown();
setInterval(updateRelationshipCounter, 1000);
setInterval(updateMonthsaryCountdown, 1000);

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-section');

        // Remove active class from all nav items and sections
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to clicked nav item and target section
        item.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
    });
});

// ==========================================
// PHOTO ALBUM FUNCTIONALITY
// ==========================================
const photoGrid = document.getElementById('photoGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDate = document.getElementById('lightboxDate');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentPhotoIndex = 0;

// Generate photo grid
settings.photos.forEach((photo, index) => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `
        <div class="photo-wrapper">
            <img src="assets/memories/${photo.filename}" alt="${photo.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23ffc4d6%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22white%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${photo.title}%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="photo-caption">
            <p class="photo-title">${photo.title}</p>
            <p class="photo-date">${photo.date}</p>
        </div>
    `;

    photoItem.addEventListener('click', () => {
        openLightbox(index);
    });

    photoGrid.appendChild(photoItem);
});

// Open lightbox
function openLightbox(index) {
    currentPhotoIndex = index;
    const photo = settings.photos[index];
    lightboxImg.src = `assets/memories/${photo.filename}`;
    lightboxImg.onerror = function () {
        this.src = `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect fill=%22%23ffc4d6%22 width=%22800%22 height=%22600%22/%3E%3Ctext fill=%22white%22 font-size=%2230%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${photo.title}%3C/text%3E%3C/svg%3E`;
    };
    lightboxTitle.textContent = photo.title;
    lightboxDate.textContent = photo.date;
    lightbox.classList.add('active');
}

// Close lightbox
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Previous photo
lightboxPrev.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + settings.photos.length) % settings.photos.length;
    openLightbox(currentPhotoIndex);
});

// Next photo
lightboxNext.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % settings.photos.length;
    openLightbox(currentPhotoIndex);
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev.click();
        } else if (e.key === 'ArrowRight') {
            lightboxNext.click();
        }
    }
});

// ==========================================
// MUSIC PLAYER FUNCTIONALITY
// ==========================================
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const volumeBar = document.getElementById('volumeBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

let isPlaying = false;

// Play/Pause toggle
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.textContent = '▶️';
    } else {
        audioPlayer.play();
        playBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress || 0;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Update duration when loaded
audioPlayer.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audioPlayer.duration);
});

// Seek functionality
progressBar.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

// Volume control
volumeBar.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// Set initial volume
audioPlayer.volume = 0.7;

// Auto-update play button when audio ends
audioPlayer.addEventListener('ended', () => {
    playBtn.textContent = '▶️';
    isPlaying = false;
});

// Auto-update play button when audio plays/pauses
audioPlayer.addEventListener('play', () => {
    playBtn.textContent = '⏸️';
    isPlaying = true;
});

audioPlayer.addEventListener('pause', () => {
    playBtn.textContent = '▶️';
    isPlaying = false;
});

// Format time helper function
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==========================================
// SURPRISE POPUP FUNCTIONALITY
// ==========================================
const surpriseBtn = document.getElementById('surpriseBtn');
const surprisePopup = document.getElementById('surprisePopup');
const popupCloseBtn = document.getElementById('popupCloseBtn');
const popupMessage = document.getElementById('popupMessage');
let typingInterval = null;

function typePopupMessage() {
    const fullMessage = popupMessage.dataset.fullMessage || popupMessage.textContent;
    popupMessage.dataset.fullMessage = fullMessage;
    popupMessage.textContent = '';

    clearInterval(typingInterval);

    let index = 0;
    typingInterval = setInterval(() => {
        popupMessage.textContent += fullMessage[index];
        index++;

        if (index >= fullMessage.length) {
            clearInterval(typingInterval);
        }
    }, 50);
}

// Open surprise popup
surpriseBtn.addEventListener('click', () => {
    surprisePopup.classList.add('active');
    typePopupMessage();
});

// Close surprise popup
popupCloseBtn.addEventListener('click', () => {
    clearInterval(typingInterval);
    surprisePopup.classList.remove('active');
    popupMessage.textContent = popupMessage.dataset.fullMessage || popupMessage.textContent;
});

// Close popup on background click
surprisePopup.addEventListener('click', (e) => {
    if (e.target === surprisePopup) {
        surprisePopup.classList.remove('active');
    }
});

// ==========================================
// PREVENT BODY SCROLL
// ==========================================
document.body.style.overflow = 'hidden';
