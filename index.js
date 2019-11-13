window.onload = async () => {
  const events = await getEvents();
  console.log("events", events);

  const currentEventsDiv = document.querySelector("#currentProduct");

  if (events.length > 0) {
    currentEventsDiv.innerHTML = events
      .map(
        event => `
            <div class="row">
                  <div>${event.time} - ${event.name}</div>
            </div>
            `
      )
      .join("");
  } else {
    currentEventsDiv.innerText = "No events right now!";
  }
};
