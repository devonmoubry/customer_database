console.log(customers);

const customerInfo = customers.results
for (var i = 0; i < customerInfo.length; i++) {
  console.log(customerInfo[i].picture.thumbnail);
  console.log(customerInfo[i].name.first);
  console.log(customerInfo[i].name.last);
  console.log(customerInfo[i].email);
  console.log(customerInfo[i].location.street);
  console.log(customerInfo[i].location.city);
  console.log(customerInfo[i].location.state);
  console.log(customerInfo[i].location.postcode);
  console.log(customerInfo[i].phone);
  console.log(customerInfo[i].id.value);
}
