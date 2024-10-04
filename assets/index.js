// World Clock
function updateWorldClock() {
  const clock = document.getElementById('world-clock');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  clock.textContent = new Date().toLocaleString('en-US', options);
}

setInterval(updateWorldClock, 1000);

// Education Chart
const ctx = document.getElementById('educationChart').getContext('2d');
const educationChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['PGDM', 'BBA', 'HSC', 'SSC'],
    datasets: [{
      label: 'Education Percentage',
      data: [100, 70.9, 70.8, 84],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

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