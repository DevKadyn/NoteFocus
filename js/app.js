function newNote() {
  console.log("Motes: Creating a new note.")
  document.getElementById("noteHeader").value = "";
  document.getElementById("noteText").value = "";
}

function savePopUp() {
  document.getElementById("popUpSave").style.display = "block";
}


function aboutPopUp() {
  document.getElementById("popUpAbout").style.display = "block";
}

function exit() {
  document.getElementById("popUpSave").style.display = "none";
  document.getElementById("popUpAbout").style.display = "none";
}
