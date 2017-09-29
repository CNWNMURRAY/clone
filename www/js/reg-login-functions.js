<script>
/* When the user clicks on the registration button, 
toggle between hiding and showing the dropdown content */
function regFunction() {
    document.getElementById("regDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.reg')) {

    var dropdowns = document.getElementsByClassName("regdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the login button, 
toggle between hiding and showing the dropdown content */
function loginFunction() {
    document.getElementById("loginDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.login')) {

    var dropdowns = document.getElementsByClassName("logindropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>