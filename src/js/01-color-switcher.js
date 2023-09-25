function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.body;
  
  let intervalId = null;
  
  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    
    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 700);
  });
  
  stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    
    clearInterval(intervalId);
  });
