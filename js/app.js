$(document).ready(function() {
  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response) {
    response.forEach(function(el, i) {
      console.log(el.author);
    });
  });

});
