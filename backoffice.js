saveEvent = async product => {
  const url = "https://striveschool.herokuapp.com/api/product";
  const username = "user27";
  const password = "ZGDWyFCA8umbgpvZ";
  let token = btoa(username + ":" + password);

  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: new Headers({
      Authorization: "Basic " + token,
      "Content-Type": "application/json"
    })
  });
  return response;
};

createProduct = async () => {
  event.preventDefault();
  const newProduct = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#url").value,
    price: document.querySelector("#price").value
  };

  const response = await saveEvent(newProduct);

  if (response.ok) {
    alert("the event was saved successfully");
  } else {
    alert("the event was NOT saved successfully");
  }
};
