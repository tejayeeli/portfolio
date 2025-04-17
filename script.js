// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is already applied using localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Event listener to toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Store the dark mode preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
