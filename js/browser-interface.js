var Marker = require('./../js/marker.js').Marker;

$(function() {

  $(document).on("click", ".btn", function(e) {
    e.preventDefault();
    var fuelType = $(this).attr("fuel-type");
    var fuelSearchUrl = 'https://data.cityofchicago.org/resource/alternative-fuel-locations.json?fuel_type_code=' + fuelType;
    $.get({
      url: fuelSearchUrl,
      dataType: 'json',
      userAgent: 'test',
      success: function(data) {
        var newMarker = new Marker(data);
        for( i = 0; i < data.length; i++ ) {
            Marker.createMarker(data[i]);
          }

      }
    });
  });
});
