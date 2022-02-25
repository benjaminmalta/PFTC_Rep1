document.addEventListener("submit", (e) => {
  e.preventDefault();
  submitLoginInfo();
});

async function submitLoginInfo() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const url =
    "http://localhost:3001/login?email=" + email + "&password=" + password;

  const headers = {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.post(url, headers);
  console.log(response);
}

// function submitLoginInfo() {
//   const form = document.querySelector("form");
//   let data = new FormData(form);
//   axios({
//     method: "post",
//     url: "/",
//     data: data,
//   })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       throw err;
//     });
// }
