$(document).ready(function () {

  $.getJSON("restaurantes.json", function (data) {
    //console.log(data);

    $.each(data.DISTRITO, function (key, value) {
      console.log(value.MIRAFLORES);

      //$("#distri").append('<option value="'+ key +'">'+ value +'</option>');

      var Miraflor = value.MIRAFLORES
      var linces = value.LINCE
      var olivos = value.LOS_OLIVOS

      var $selectDistrict = $("#select-district");

      $selectDistrict.change(function () {
        var unDistrito = $("#select-district option:selected").text();

        if (unDistrito === "MIRAFLORES") {
          console.log(Miraflor);
          var Contenidos = '';
          for (var i = 0; i < DISTRITO.length; i++) {
            Contenidos += '<p>' + 'restaurant:' + Miraflor[i] + '</p>';
            $('#select-one').append() = Contenidos;
          };
          if (unDistrito === "LINCE") {
            console.log(linces);
          };
          if (unDistrito === "LOS_OLIVOS") {
            console.log(olivos);
          };

          var Contenidos = ''
          Contenidos += '<p>' + 'restaurant:' + data[i].restaurant + '</p>';  
          $('#select-one').append() = Contenidos;
        };
      })
    })
  })
})