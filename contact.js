
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      class myForm {
        closeForm() {
          document.getElementById("myForm").style.display = "none";
        }
      }
      const form = new myForm();
      
      var modal = document.getElementById("myModal");
      
      var btn = document.getElementById("myBtn");

      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {

        modal.style.display = "block";

      }
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }