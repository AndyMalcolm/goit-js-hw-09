function handleFormSubmit(event) {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;

  for (let i = 0; i < amount; i++) {
    createPromise(step, delay)
      .then((result) => {
        console.log('Promise resolved:', result);
      })
      .catch((error) => {
        console.error('Promise rejected:', error);
      });
    delay = Number(delay) + Number(step);
  }
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
