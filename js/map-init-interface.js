var Marker = require('./../js/marker.js').Marker;

var INITIAL_MAP_LAT = 41.894812;
var INITIAL_MAP_LNG = -87.605089;

$(function() {
  var styles = [
    {
      elementType: "geometry",
      stylers: [
        { hue: "#ff4400" },
        { saturation: -68 },
        { lightness: -4 },
        { gamma: 0.72 }
      ]
    },{
      featureType: "landscape.man_made",
      elementType: "geometry",
      stylers: [
        { hue: "#0077ff" },
        { gamma: 3.1 }
      ]
    },{
      featureType: "water",
      stylers: [
        { hue: "#00ccff" },
        { gamma: 0.44 },
        { saturation: -33 }
      ]
    },{
      featureType: "poi.park",
      stylers: [
        { hue: "#44ff00" },
        { saturation: -23 }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        { hue: "#007fff" },
        { gamma: 0.77 },
        { saturation: 65 },
        { lightness: 99 }
      ]
    },{
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        { gamma: 0.11 },
        { weight: 5.6 },
        { saturation: 99 },
        { hue: "#0091ff" },
        { lightness: -86 }
      ]
    },{
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        { lightness: -48 },
        { hue: "#ff5e00" },
        { gamma: 1.2 },
        { saturation: -23 }
      ]
    },{
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        { saturation: -64 },
        { hue: "#ff9100" },
        { lightness: 16 },
        { gamma: 0.47 },
        { weight: 2.7 }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(INITIAL_MAP_LAT, INITIAL_MAP_LNG),
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  bounds.extend(newPosition);

  initMap();
});
