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
    const id = 0;
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array[id]);
        answer.innerHTML = JSON.stringify(array[id]);
      });
  });

  cw3.addEventListener("click", async function () {
    answer.innerHTML = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts"), {
      method: "POST",
      body: JSON.stringify({
        title: "Nowy post",
        body: "Tresc",
        userId: 1,
      })
      .then((response) => response.json())
      .then((post) => {console.log(post));
    answer.innerHTML = "Dodano nowy post o ID: ${post.id}"
  });
})();
