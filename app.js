/* async function yourTask(type, participants) {
  /* fetch(
    `http://www.boredapi.com/api/activity?type=${type}&participants=${participants}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      alert(data.activity);
    })
    .catch(function (e) {
      alert("something went wrong");
    }); */

/*   const response = await fetch(
    "http://www.boredapi.com/api/activity?type=${type}&participants=${participants}"
  );

  const data = await response.json();

  alert(data.activity || data.error); }*/

async function yourTask(type, participants) {
  const response = await fetch(
    `https://www.boredapi.com/api/activity?type=${type}&participants=${participants}`
  );

  const data = await response.json();

  alert(data.activity || data.error);
}

let type, participants;

// yourTask("cooking", 2);

document.querySelector("select").addEventListener("change", (e) => {
  type = e.target.value;
  console.log(type);
});

document.querySelector(`form`).addEventListener(`change`, (e) => {
  participants = e.target.value;
  console.log(participants);
});

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  yourTask(type, participants);
});
