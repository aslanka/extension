urls = [];
if (window.localStorage.getItem("IsLoggedIn") !== "true") {
  window.localStorage.setItem("IsLoggedIn", "false");
}

async function getUrlsByUsername(username) {
  const response = await fetch(`http://localhost:8080/user/${username}`);
  urls = await response.json();
}

function block_domains() {
  getUrlsByUsername("alanka").then(() => {
    if (urls.includes(window.location.hostname)) {
      document.body.innerHTML = "<h1>Cant Go hERE</h1>";
    }
  });
}

function register() {
  console.log(document.getElementById("username").value);
  window.localStorage.setItem("IsLoggedIn", "true");
}

// block_domains();

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("register");
  if (el) {
    el.addEventListener("click", register);
  }
});

if (localStorage.getItem("IsLoggedIn") === "true") {
  showSection2();
} else {
  showSection1();
}

function showSection1() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("notLogged");
    if (el) {
      document.getElementById("isLogged").style.display = "block";
      document.getElementById("notLogged").style.display = "none";
    }
  });
}

function showSection2() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById("notLogged");
    if (el) {
      document.getElementById("isLogged").style.display = "none";
      document.getElementById("notLogged").style.display = "block";
    }
  });
}
