const creditCardNumber = document.querySelector('#credit-card-number');
const creditCardCvv = document.querySelector('#credit-card-cvv');
const creditCardInner = document.querySelector('.card-inner');
const creditCardCvvElement = document.querySelector('#cvv');

creditCardCvv.addEventListener('focus', () => {
  creditCardInner.classList.add("card-flip");
})

creditCardCvv.addEventListener("focusout", () => {
  creditCardInner.classList.remove("card-flip");
});

creditCardNumber.addEventListener('input', event => {
  if (isNaN(Number(event.target.value))) {
    event.target.value = event.target.value.substr(0, event.target.value.length - 1);
    return;
  }

  let cardNumber = [];
  if (event.target.value.length > 0) {
    cardNumber = event.target.value.match(/[0-9]{1,4}/g);
  } 

  const cardNo1 = document.querySelector('#cardNo1');
  const cardNo2 = document.querySelector('#cardNo2');
  const cardNo3 = document.querySelector('#cardNo3');
  const cardNo4 = document.querySelector('#cardNo4');

  cardNo1.textContent = cardNumber[0] ?? '1234';
  cardNo2.textContent = cardNumber[1] ?? '5678';
  cardNo3.textContent = cardNumber[2] ?? '9012';
  cardNo4.textContent = cardNumber[3] ?? '3456';

  if (event.target.value.length === 17) {
      event.target.value = event.target.value.substr(
         0,
         event.target.value.length - 1
       );
  }

})

creditCardCvv.addEventListener('input', event => {
   if (isNaN(Number(event.target.value))) {
     event.target.value = event.target.value.substr(
       0,
       event.target.value.length - 1
     );
     return;
  }

    if (event.target.value.length === 0) {
      creditCardCvvElement.textContent = 123;
      return;
    }
  
  
  if (event.target.value.length === 4) {
    event.target.value = event.target.value.substr(
      0,
      event.target.value.length - 1
    );
    return;
  }

  creditCardCvvElement.textContent = event.target.value;
})