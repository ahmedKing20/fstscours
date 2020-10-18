// Show and hide the password
const hideBtn = document.querySelector("#show-hide");

hideBtn &&
  hideBtn.addEventListener("click", (e) => {
    const password = document.querySelector("#password");
    hideBtn.className = `fa fa-eye${password.type === "password" ? "-slash" : ""}`;
    password.type = password.type === "password" ? "text" : "password";
  });

// Loading icon in contact
const form = document.getElementsByClassName("form")[0];
const icon = document.getElementsByClassName("fa-spinner")[0];
const sendBtn = document.querySelectorAll("input[type='submit']")[0];

form.addEventListener("submit", () => {
  sendBtn.style.display = "none";
  icon.classList.remove("d-none");
});
