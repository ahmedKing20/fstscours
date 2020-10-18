const searchBox = document.getElementsByName("search-box")[0];
const filterSelect = document.getElementsByName("doc-filter")[0];
const typeSelect = document.getElementsByName("doc-type")[0];
const url = new URL(window.location.href);

function search() {
  const xhttp = new XMLHttpRequest();
  const value = searchBox.value;
  const filter = document.getElementsByName("doc-filter")[0].value;
  const type = document.getElementsByName("doc-type")[0].value;
  const filiere = url.searchParams.get("fil");

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.querySelector(".row").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", `documents_ajax.php?fil=${filiere}&value=${value}&filter=${filter}&type=${type}`, true);
  xhttp.send();
}

searchBox.addEventListener("keyup", search);
filterSelect.addEventListener("change", search);
typeSelect.addEventListener("change", search);
