let titleCount = 1;
let totalPrice = 0;
const inputCard = document.querySelectorAll('.card');
for (let index = 0; index < inputCard.length; index++) {
  let card = inputCard[index];
  card.addEventListener('click', function () {
    const cardTitle = card.querySelector('h3');
    const title = cardTitle.innerText;
    const titleContainer = document.getElementById('title-container');
    const p = document.createElement('p');
    p.innerText = titleCount + '.' + title;
    titleContainer.appendChild(p);
    titleCount++;
    const cardPrice = card.querySelector('span').innerText.split(' ')[1];
    const price = parseFloat(cardPrice);
    totalPrice += price;
    const displayPrice = document.getElementById('totalPrice');
    displayPrice.innerText = totalPrice;
  });
}
