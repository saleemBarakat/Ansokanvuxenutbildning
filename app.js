//sökfunktion på första sidan
function mySearchFunction ()
{
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
                li[i].style.display = "";
            }
        }
    }
//dropdown knapp
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
//kurser och lägg till och ta bort knapparna
let courses = [
    { id: 1, title: "Administratör" },
    { id: 2, title: "Målare" },
    { id: 3, title: "Undersköterska LSS" },
    { id: 4, title: "Golvläggare" },
    { id: 5, title: "Bygg-Träarbete" },
    { id: 6, title: "VVS montör" },
    { id: 7, title: "Nätverkstekniker" },
    { id: 8, title: "Automationselektriker" },
    { id: 9, title: "Vård och omsorgsutbildning" },
    { id: 10, title: "Murare" },
  ];
  
  courses.forEach((course) => {
    createCourse(course.id, course.title);
  });
//skapar en ny div vid sidan om om man trycker på "lägg till" en kurs
  function createCourse(id, title) {
    var li = document.createElement("div");
    li.id = id;
      var button = '<button onClick="checkId(this)" class="knapp">Lägg till</button>';
    var h4 = document.createElement("div");
    h4.className = "bla";
    h4.id = id;
    h4.innerHTML = title;
    li.appendChild(h4);
    li.insertAdjacentHTML("beforeend", button);
  
    document.getElementById("courseList").appendChild(li);
  }

  function checkId(clickedElement) {
    addSelectedCourse(clickedElement.parentNode.id);
  }
  //tar bort en specifik kurs om man trycker på "ta bort"
  function addSelectedCourse(id) {

    var selectedCourseAlreadySelected = document.getElementById(courses[id - 1].title);
  
    if (!selectedCourseAlreadySelected) {
      var li = document.createElement("LI");
  
      li.id = id;
      li.setAttribute("id", courses[id - 1].title);
  
      var h4 = document.createElement("h4");
      h4.innerHTML = courses[id - 1].title;
  
      li.appendChild(h4);
  
      var deleteButton = '<button onClick="removeCourse(this)" class="knapp">Ta bort</button>';
      h4.id = id;
      h4.className = "bla"
  
      li.insertAdjacentHTML("beforeend", deleteButton);
  
      document.getElementById("selectedCourses").appendChild(li);
    }
  }

  function removeCourse(course) {
    document.getElementById(course.parentNode.id).remove();
  }

function displayDate() {
  document.getElementById("datum").innerHTML = Date();
  
  function on() {
  document.getElementById("datum").style.display = "block";
}

function off() {
  document.getElementById("datum").style.display = "none";
}
}

