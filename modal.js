// Get the modal
var modal = document.getElementById("myModal");

var p = document.getElementsByClassName('text')[0];

// When the user clicks the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changeTextModal(text){
  p.innerHTML = text;
}

function closeModal(){
  modal.style.display = "none";
}
