(async function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", async function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw2.addEventListener("click", async function () {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    )
      .then((response) => response.json())
      .then((array) => {
        console.log(array[0]);
        answer.innerHTML = JSON.stringify(array[0]);
      });
  });

  cw3.addEventListener("click", function () {});
})();
