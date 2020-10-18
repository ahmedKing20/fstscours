const wrapper = document.querySelector(".wrapper");

// Select/Deselect checkboxes
wrapper.onclick = function () {
  let target = event.target;
  let id = target.id;
  let name = target.name;

  if (id == "selectAll") SelectAll();
  if (id == "deleteAll") check();
  if (name == "options[]") isAllchecked();
};

// Select/Deselect checkboxes
function SelectAll() {
  let checkAll = document.querySelector("#selectAll");
  let boxes = document.querySelectorAll("input[type=checkbox]");

  checkAll.checked
    ? boxes.forEach((element) => {
        element.checked = true;
      })
    : boxes.forEach((element) => {
        element.checked = false;
      });
}

// Select/Deselect SelectAll checkbox
function isAllchecked() {
  let checkAll = document.querySelector("#selectAll");
  let boxes = document.querySelectorAll("tbody input[type=checkbox]");
  let checkedBoxes = document.querySelectorAll("tbody input[type=checkbox]:checked");
  checkAll.checked = checkedBoxes.length === boxes.length ? true : false;
}

// checking for checkboxes before showing delete modal
function check(e) {
  const checkedBoxes = document.querySelectorAll("tbody input[type=checkbox]:checked");
  const deleteAll = document.querySelector("#deleteAll");
  console.log("clicked");
  if (!checkedBoxes.length) {
    alert("Aucune ligne est sélectionée.");
    deleteAll.href = "#";
  } else {
    deleteAll.href = "#deleteModalall";
    deleteAll.click();
  }
}

// Adding class active
const link = window.location.pathname.split("/").pop();
const menuItems = document.querySelectorAll(".nav-link");
menuItems.forEach((item) => {
  if (item.href.split("/").pop() === link) item.classList.add("active");
});
