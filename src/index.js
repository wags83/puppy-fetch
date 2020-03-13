console.log(
  "%c🐶PUPPIES ARE AMAZING!!!🐶",
  "color: turquoise; font-size: 20px; font-family: Monaco;"
);

//1

// fetch('http://localhost:3000/puppies')
// .then(result => result.json())
// .then(console.log)

//2-3

// fetch returns a promise...  promises are a fucking nightmare.
// .then is another function taking the response of the first function as an agreument.

//4

fetch("http://localhost:3000/puppies")
  .then(function(result) {
    return result.json();
  })
  .then(responseJSON => {
    dogArray = responseJSON;
    console.log(dogArray, "inside fetch");
  });

fetch("http://localhost:3000/puppies/3")
  .then(function(result) {
    return result.json();
  })
  .then(responseJSON => {
    dogArray = responseJSON;
    console.log(dogArray, "inside fetch");
  });

//5

fetch("http://localhost:3000/puppies/3")
  .then(function(result) {
    return result.json();
  })
  .then(responseJSON => {
    dog = responseJSON;
    console.log(
      `My dog is a ${dog.breed} named ${dog.name}. They are ${dog.ageInMonths} months old and they are pretty ${dog.personality}.`
    );
  });

//6

function changeBreed(breed) {
  fetch("http://localhost:3000/puppies/2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(breed)
  })
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}
