$(document).ready(function() {
  $.ajax({
    url: "http://localhost:3000/books"
    // typ domyslnie ustawiony jest na get wiec nie trzeba tego pisac
  }).done(function(response) {
    response.forEach(function(el, i) {
      // tworzenie nowego diva
      var newEl = $('<div class="list-group-item">');
      newEl.text(el.author);
      var div = $("<div>");
      newEl.append(div);
      $('ul').append(newEl);

      // console.log(el.author);
    });
  });
});
