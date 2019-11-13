const url = "https://striveschool.herokuapp.com/api/product";
const username = "user27";
const password = "ZGDWyFCA8umbgpvZ";

const getProducts = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  });
  console.log(response);
};

saveEvent = async event => {
  // The post is made with the fetch method as as well
  return await fetch(url, {
    method: "POST", //declaring the CRUD method
    body: JSON.stringify(event), //Here i stringifying the object
    headers: new Headers({
      Authorization: "Basic " + btoa(username + ":" + password),
      "Content-Type": "application/json" //This is required by our API's, we need to desclare the content type.
    })
  });
  return response;
};

getEvents = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  }); //This is getting the response from the API fetching the event, here without headers
  return await response.json(); // this is transforming the response in a json
};
