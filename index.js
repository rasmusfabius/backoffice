window.onload = async () => {
  const url = "https://striveschool.herokuapp.com/api/product";
  const username = "user27";
  const password = "ZGDWyFCA8umbgpvZ";
  let token = btoa(username + ":" + password);

  let resp = await fetch(url, {
    headers: {
      Authorization: "Basic " + token
    }
  });

  let jsonResp = await resp.json();

  document.querySelector("#currentProduct").innerHTML = jsonResp
    .map(
      product => `
    <div class="col-md-4">
    <img src="${product.imageUrl}" style="width:100%" />
    <h4>${product.name} - $ ${product.price}</h4>
    </div>
  `
    )
    .join("");

  console.log(jsonResp);
};
