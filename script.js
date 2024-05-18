const container = document.querySelector('.container');
const themeToggle = document.getElementById('theme-toggle');
const buttons = document.querySelectorAll('.day-button');


for (let i = 1; i <= 100; i++) {
  const button = document.createElement('button');
  button.classList.add('day-button');
//   button.textContent = i;

  if (i === 100) {
    button.classList.add('day-100');
    // Add link to another page here (replace with your desired link)
    button.addEventListener('click', () => {
      window.location.href = "to-do.html"; // Replace with your link
    });
  } if(i % 5 == 0) {
    button.classList.add('multiple-of-five')
  } if (i === 25 || i === 50 || i === 75) {
    button.classList.add(`day-${i}`);
  }
  else {
    // Add event listener for your custom logic on other days (optional)
  }

  container.appendChild(button);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the 'clicked' class when the button is clicked
        button.classList.toggle('clicked');
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    updateFooterColor();
  });

  function updateFooterColor() {
    const footer = document.querySelector('footer');
    footer.classList.toggle('light-mode', document.body.classList.contains('light-mode'));
  }
