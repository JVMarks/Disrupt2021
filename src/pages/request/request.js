const formResult = document.querySelector('#form');

formResult.addEventListener('submit', (event) => {

  event.preventDefault();

  let travels = 0;
  let lodging = 0;
  let rocket = 0;
  let finalResult = 0;

  const name = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const birthday = document.querySelector('#birthday').value;
  const familie = document.querySelector('#options').value;
  const hotel = document.querySelector('#traveloptions').value;
  const traveldate = document.querySelector('#datetravel').value;

  if (familie === 'Unico') {
    travels = 1
  } else if (familie === '2 Passageiros') {
    travels = 2
  } else if (familie === '3 Passageiros') {
    travels = 3
  } else if (familie === '4 Passageiros') {
    travels = 4
  }

  if (familie === 'Unico') {
    rocket = 33500 * travels
  } else if (familie === '2 Passageiros') {
    rocket = 33500 * travels
  } else if (familie === '3 Passageiros') {
    rocket = 33500 * travels
  } else if (familie === '4 Passageiros') {
    rocket = 33500 * travels
  }

  if (hotel === 'Thanators') {
    lodging = 9500 * travels
  } else if (hotel === 'Naay Beach') {
    lodging = 9500 * travels
  } else if (hotel === 'Hometree') {
    lodging = 9500 * travels
  } else if (hotel === 'Hallelujah') {
    lodging = 9500 * travels
  }

  finalResult = lodging + rocket;


  document.querySelector('#userResponsible').textContent = `${name}`;
  document.querySelector('#userBirthday').textContent = `${birthday}`;
  document.querySelector('#userEmails').textContent = `${email}`;
  document.querySelector('#userFamilie').textContent = `${familie}`;
  document.querySelector('#userhotel').textContent = `${hotel}`;
  document.querySelector('#userTravel').textContent = `${traveldate}`;

  document.querySelector('#hotelvalue').textContent = `R$ ${lodging.toFixed(2)} `;
  document.querySelector('#rocketvalue').textContent = `R$ ${rocket.toFixed(2)} `;
  document.querySelector('#finalprice').textContent = `R$ ${finalResult.toFixed(2)} `;


});