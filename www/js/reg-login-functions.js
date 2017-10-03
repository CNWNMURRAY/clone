<button onclick="regFunction()" class="dropbtn">Register</button>
				  <div id="regDropdown" class="dropdown-content">
					<label><b>Name</b></label>
					<input type="text" placeholder="Enter Name" name="Name" required>
					<label><b>Email</b></label>
					<input type="text" placeholder="Enter Email" name="email" required>
					<label><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="psw" required>
					<label><b>Repeat Password</b></label>
					<input type="password" placeholder="Repeat Password" name="psw-repeat" required>
					<input type="checkbox" checked="checked"> Remember me
				  </div>
				</div>
				
				
				<button onclick="logFunction()" class="dropbtn">Login</button>
				  <div id="logDropdown" class="dropdown-content">
					<label><b>Email</b></label>
					<input type="text" placeholder="Enter Email" name="email" required>
					<label><b>Password</b></label>
					<input type="password" placeholder="Enter Password" name="psw" required>
				  </div>
				</div>


<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function regFunction() {
    document.getElementById("regDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function logFunction() {
    document.getElementById("logDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
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