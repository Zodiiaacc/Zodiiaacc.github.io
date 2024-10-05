// World Clock
function updateWorldClock() {
  const clock = document.getElementById('world-clock');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  clock.textContent = new Date().toLocaleString('en-US', options);
}

setInterval(updateWorldClock, 1000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add a parallax effect to the home section
window.addEventListener('scroll', () => {
  const home = document.getElementById('home');
  const scrollPosition = window.pageYOffset;
  home.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Add animation to skills
const skillItems = document.querySelectorAll('#skills ul li');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.5 });

skillItems.forEach(item => {
  observer.observe(item);
});

// Add hover effect to skill items
skillItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#ff4500';
  });
  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = '#000000';
  });
});

// Animate location information
const locationInfo = document.querySelector('#contact p:last-child');
locationInfo.style.opacity = '0';
locationInfo.style.transform = 'translateY(20px)';
locationInfo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

window.addEventListener('load', () => {
  setTimeout(() => {
    locationInfo.style.opacity = '1';
    locationInfo.style.transform = 'translateY(0)';
  }, 500);
});