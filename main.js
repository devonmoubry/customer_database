// console.log(customers);
const body = document.querySelector('body');
let customerInfo = customers.results;
const container = document.createElement('container');
body.prepend(container);
const headerContainer = document.createElement('header');
body.prepend(headerContainer);
headerContainer.innerHTML = `<h1 class="title">Internal Company Directory</h1>`;

for (var i = 0; i < customerInfo.length; i++) {
  const div = document.createElement('div');
  container.append(div);
  div.setAttribute('class', 'customerProfile');
  // console.log('Customer Number: ', i+1);
  // console.log(customerInfo[i].picture.medium);
  // console.log(customerInfo[i].name.first);
  // console.log(customerInfo[i].name.last);
  // console.log(customerInfo[i].email);
  // console.log(customerInfo[i].location.street);
  // console.log(customerInfo[i].location.city);
  // console.log(customerInfo[i].location.state);
  // console.log(customerInfo[i].location.postcode);
  // console.log(customerInfo[i].phone);
  // console.log(customerInfo[i].id.value);

  let customerPic = customerInfo[i].picture.large;
  let customerFirstName = customerInfo[i].name.first;
  let customerLastName = customerInfo[i].name.last;
  let customerFullName = `${customerFirstName} ${customerLastName}`;
  let customerEmail = customerInfo[i].email;
  let customerStreet = customerInfo[i].location.street;
  let customerCity = customerInfo[i].location.city;
  let customerState = customerInfo[i].location.state;
  let customerZip = customerInfo[i].location.postcode;
  let address = `${customerCity}, ${customerState} ${customerZip}`;
  let customerPhone = customerInfo[i].phone;
  let customerId = customerInfo[i].id.value;

  customer = `
    <img class="photo" src="${customerPic}" alt="${customerFullName} photo">
    <p class="name">${customerFullName}</p>
    <p class="email">${customerEmail}</p>
    <div class="contactBlock">
      <p class="contact">${customerStreet}</p>
      <p class="contact">${address}</p>
      <p class="contact">${customerPhone}</p>
    </div>
    <p class="SS">${customerId}</p>
  `
  // console.log(customer);
  div.innerHTML = customer;
}
