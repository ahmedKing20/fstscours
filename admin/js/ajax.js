const links = document.querySelectorAll(".navbar-nav > .nav-item");

links.forEach((link) => {
  link.addEventListener("click", search);
});

function search(event) {
  event.preventDefault();

  // Adding active class
  const active = document.querySelector(".navbar-nav > .nav-item.active");
  active.classList.remove("active");
  this.classList.add("active");

  const xhttp = new XMLHttpRequest();
  const table = this.dataset.table;

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.querySelector(".wrapper").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", `index_ajax.php?table=${table}`, true);
  xhttp.send();
}
