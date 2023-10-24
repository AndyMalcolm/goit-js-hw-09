function createPromise(step, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ step, delay });
      } else {
        reject({ step, delay });
      }
    }, delay);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;

  createPromise(step, delay)
    .then((result) => {
      console.log('Promise resolved:', result);
    })
    .catch((error) => {
      console.error('Promise rejected:', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
