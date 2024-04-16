// fetch("https://dummy-apis.netlify.app/api/quote")
//   .then((reaktion) => {
//     return reaktion.json();
//   })
//   .then((data) => {
//     console.log(data);
//     document.body.append(document.createTextNode(data.author));
//     document.body.append(document.createTextNode(data.quote));
//   });

const button = document.getElementById("btn");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

let state = {
  quote:
    "Du verlierst niemals deine Stärke. Manchmal vergisst du nur, dass du sie hast.",
  author: "Mohammad Shirazi",
};

function render() {
  h2.textContent = state.quote;
  h3.textContent = state.author;
}

render();

function refresh() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((reaktion) => {
      return reaktion.json();
    })
    .then((data) => {
      state.quote = data.quote;
      state.author = data.author;
      render();
    });
}

button.addEventListener("click", () => {
  refresh();
});
