/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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

  function hej() {
      document.querySelector(".Hej").style.display = "block"
  }
  function displayDate() {
    document.getElementById("datum").innerHTML = Date();
  }
  
//logga in*/
  $(document).ready(function(){
    $("#submit").click(function(){
      var name= $("#name").val();
      var pass = $("#pass").val();
      if(name == '' || pass == ''){
        $("#Required").html('All Feild Are Required').css('color','red');
      }else if(name == 'admin' && pass == '123'){
         $("#form").html('<h4>User Login Successfully</h4><a href="">Back</a>').css('color','green');
       }else{
         $("#error").html('User Are Not Valid');
       }
    });
  });