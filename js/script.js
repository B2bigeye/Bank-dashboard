function login(event) {
  event.preventDefault();
  
  const form = event.target;
  const username = form.username.value.trim();
  const password = form.password.value;

  if (username === "drchocolate" && password === "drchoco@34") {
    alert("Login successful. Redirecting...");
    window.location.href = "index.html";
  } else {
    document.getElementById("error").textContent = "Invalid username or password.";
  }
}
