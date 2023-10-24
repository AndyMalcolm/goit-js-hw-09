function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const delay = EventTarget.elements.delay;
  const position = EventTarget.elements.step;
  const position2 = EventTarget.elements.amount;

  createPromise(position, delay)
    .then((result) => {
      console.log('Promise resolved:', result);
    })
    .catch((error) => {
      console.error('Promise rejected:', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
