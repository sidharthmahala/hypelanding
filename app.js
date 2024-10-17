const form = document.getElementById('leadForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Simulate form submission process
  setTimeout(() => {
    successMessage.classList.remove('hidden');
    form.reset();
  }, 1000);
});
