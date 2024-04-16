document.addEventListener("DOMContentLoaded", function() {
    // Wait for DOM content to be loaded
    const circle = document.querySelector('.circle');
  
    // Add event listener to circle for click event
    circle.addEventListener('click', function() {
      // Expand the circle
      circle.style.backgroundColor = '#000'; // Change color to black
      circle.style.transform = 'scale(20)'; // Expand to 20 times its original size
  
      // Wait for transition to complete
      setTimeout(function() {
        // After transition, navigate to the new page
        window.location.href = 'index.html';
      }, 1000); // 1000ms is the duration of the transition
    });
  });
  