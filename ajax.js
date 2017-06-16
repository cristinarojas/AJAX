function loadDoc() {
  // Instance of object XMLHttpRequest Object.
  var xhttp = new XMLHttpRequest();
  
  // The event is fired when the readyState attribute of a document has changed.
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Change the html content for the response
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}