// $(document).ready(function() {
//   $.ajax({
//     url: "http://localhost:3000/books"
//     // typ domyslnie ustawiony jest na get wiec nie trzeba tego pisac
//   }).done(function(response) {
//     response.forEach(function(el, i) {
//       // tworzenie nowego diva
//       var newEl = $('<div class="list-group-item">');
//       newEl.text(el.title);
//       // klikalny tytuł
//       var a = $("<a data-id='" + element.id + "' >");
//       a.text(element.title);
//
//       var div = $("<div>");
//
//       newEl.append(div);
//       // uwaga: trzeba stworzyć ul w html :)
//       $('ul').append(newEl);
//       // console.log(el.author);
//     });
//   });
// });


$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response){
    response.forEach(function(element,i){
      //tworzę li
      var newEl = $('<li class="list-group-item">');
      //tworzę klikalny tytuł
      var a = $("<a data-id='" + element.id + "'>");
      //dodaje tytul ksiazki z json
      a.text(element.title);
      //do li dodaje tytul ksiazi
      newEl.append(a);
      //tworze diva z informacjami
      var div = $("<div>");
      //dodaje diva z informacjami
      newEl.append(div);
      //dodaje li do htmla
      $('ul').append(newEl);
      // po kliknieciu w tytuł = metoda one zeby nie powielal odpowiedzi
      a.one("click", function() {
        console.log("test");
        // uwaga: do adresu url: dodanie /+ dane o elemencie w bazie
        $.ajax({
          url: "http://localhost:3000/books/" + $(this).data('id')
        }).done(function(r){
          console.log(r);
          var author = $('<h2>');
          author.text(r.author);
          var div = $('a[data-id="' + r.id + '"]').next();
          div.append(author);
          
        })
      })
    });
  });
});
