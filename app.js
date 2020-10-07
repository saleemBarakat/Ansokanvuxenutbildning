function mySearchFunction (){
    var input,filter,ul,li,item,i,txtValue;
    input = document.getElementById("Search-text-input");
    
    filter = input.value.toUpperCase();
    ul = document.getElementById("Kurser");
    li = ul.getElementsByClassName("listan");

    for(i = 0; i < li.length; i++){
        item = li[i];

        txtValue = item.textContent || item.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display ="";
            
        }
        else{
                li[i].style.display = "none";
            }
        }
    }


    var accordionItem = document.getElementsByClassName("accordion-item");
    var i;
    
    for (i = 0; i < accordionItem.length; i++) {
    
        accordionItem[i].addEventListener("click", function () {
            var icon = this.getElementsByClassName("plus-icon");
            var panel = this.nextElementSibling;
    
            if (panel.style.display === "block") {
                panel.style.display = "none";
    
                icon[0].classList.remove('fa-minus-circle');
                icon[0].classList.add('fa-plus-circle')
            } else {
                panel.style.display = "block";
    
                icon[0].classList.add('fa-minus-circle');
                icon[0].classList.remove('fa-plus-circle');
            }
        });
    }

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