$(document).ready(function() {
  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response) {
    response.forEach(function(el, i) {
      // tworzenie nowego diva
      var newEl = $('<div class="list-group-item">');
      newEl.text(el.author);

      $('ul').append(newEl);
      // console.log(el.author);
    });
  });
});
