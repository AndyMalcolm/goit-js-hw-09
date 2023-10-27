function handleFormSubmit(event) {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  let newDelay = Number(delay);

  for (let i = 0; i < amount; i++) {
    createPromise(step, newDelay)
      .then((result) => {
        console.log('Promise resolved:', result);
      })
      .catch((error) => {
        console.error('Promise rejected:', error);
      });
    newDelay += Number(step);
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfiled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}