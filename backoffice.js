handleSubmit = async () => {
  event.preventDefault(); // preventing the default browser event handling
  // gathering the data form, field to field
  const myEvent = {
    //_id: "",
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#url").value,
    price: document.querySelector("#price").value
    //userId: "",
    //createdAt: "",
    //updatedAt: "",
    //__v: ""
  };
  console.log("myEvent", myEvent);

  const response = await saveEvent(myEvent);

  if (response.ok) {
    alert("the event was saved successfully");
  } else {
    alert("the event was NOT saved successfully");
  }
};
