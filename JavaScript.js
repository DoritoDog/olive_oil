window.onload = function() {
  var dropdownButtons = document.getElementsByClassName('dropdown-button');
  for (var i = 0; i < dropdownButtons.length; i++) (function(i) {
    dropdownButtons[i].addEventListener('mouseenter', function() {
      var dropdownContent = this.nextElementSibling;
      dropdownContent.style.display = "block";
    });

    dropdownButtons[i].parentElement.addEventListener('mouseleave', function() {
      var dropdownContent = document.getElementById('content-' + i);
      dropdownContent.style.display = "none";
    });
  })(i)
}
