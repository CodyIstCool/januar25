const posts = document.querySelectorAll('.post');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const postImage = entry.target.querySelector('.post-image');
            if (postImage) {
                const imageUrl = postImage.getAttribute('data-bg-url');
                if (imageUrl) {
                    postImage.style.backgroundImage = `url('${imageUrl}')`;
                }
            }
        }
    });
}, { threshold: 0.1 });

posts.forEach(post => observer.observe(post));

// Sidebar toggle logic
const TOGGLE = document.querySelector('button.sidebar-toggle'); // Stelle sicher, dass der Button korrekt ausgewählt wird
const sidebar = document.querySelector('.sidebar'); // Stelle sicher, dass die Sidebar korrekt ausgewählt wird

const HANDLE_TOGGLE = () => {
    console.log("Button clicked"); // Debugging
    if (!TOGGLE || !sidebar) return;

    const isPressed = TOGGLE.matches('[aria-pressed=true]');
    TOGGLE.setAttribute('aria-pressed', isPressed ? "false" : "true");
    sidebar.classList.toggle('visible', !isPressed);
    sidebar.classList.toggle('versteckt', isPressed);
};

if (TOGGLE) {
    TOGGLE.addEventListener('click', HANDLE_TOGGLE);
}

// Profile dropdown toggle logic
const profilePic = document.querySelector('.profilbild');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (profilePic && dropdownMenu) {
    profilePic.addEventListener('click', () => {
        const isVisible = dropdownMenu.classList.contains('sichtbar');
        dropdownMenu.classList.toggle('sichtbar', !isVisible);
        dropdownMenu.classList.toggle('versteckt', isVisible);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown') && !event.target.closest('.profilbild')) {
            dropdownMenu.classList.add('versteckt');
            dropdownMenu.classList.remove('sichtbar');
        }
    });
}
