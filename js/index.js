const section = document.querySelector('.grey-background-section');

const heading = document.querySelector('#heading');

section.onclick = function() {
  console.log('CLICKED');
  heading.textContent = 'Clicked';
};
