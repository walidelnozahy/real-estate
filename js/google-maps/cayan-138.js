function initMap() {
  function mapLocation() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;
    function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var uluru = {

        lat: 41.074326,
        lng: 28.795631
      };
      var mapOptions = {
        zoom: 13,
        center: uluru,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }]
          },
          {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#616161"
            }]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#f5f5f5"
            }]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#bdbdbd"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#eeeeee"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#757575"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e5e5e5"
            }]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#9e9e9e"
            }]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#757575"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dadada"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#616161"
            }]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#9e9e9e"
            }]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e5e5e5"
            }]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
              "color": "#eeeeee"
            }]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#c9c9c9"
            }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#9e9e9e"
            }]
          }
        ]
      };
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      directionsDisplay.setMap(map);
      google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute);
      google.maps.event.addDomListener(document.getElementById('routebtn2'), 'click', calcRoute2);
      google.maps.event.addDomListener(document.getElementById('routebtn3'), 'click', calcRoute3);
      var marker = new google.maps.Marker({
        position: {

          lat: 41.074326,
          lng: 28.795631
        },
        icon: {
          anchor: new google.maps.Point(41.074326, 28.795631),
          url: '../assets/images/google-maps/cayan-map1.svg'
        },
        map: map
      });
    }

    function calcRoute() {
      var start = new google.maps.LatLng(41.074326, 28.795631);
      //var end = new google.maps.LatLng(38.334818, -181.884886);
      var end = new google.maps.LatLng(40.990061, 28.796747);

      var startMarker = new google.maps.Marker({
        position: start,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.074326, 28.795631),
          url: '../assets/images/google-maps/cayan-map1.svg'
        }
      });
      var endMarker = new google.maps.Marker({
        position: end,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.016431, 28.653232),
          url: '../assets/images/google-maps/airport.svg'
        }
      });

      var bounds = new google.maps.LatLngBounds();
      bounds.extend(start);
      bounds.extend(end);
      map.fitBounds(bounds);
      var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
        } else {
          alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
        }
      });
    }

    function calcRoute2() {
      var start1 = new google.maps.LatLng(41.074326, 28.795631);
      //var end = new google.maps.LatLng(38.334818, -181.884886);
      var end1 = new google.maps.LatLng(41.264806, 28.715722);


      var endMarker2 = new google.maps.Marker({
        position: end1,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.264806, 28.715722),
          url: '../assets/images/google-maps/airport.svg'
        }
      });
      var bounds = new google.maps.LatLngBounds();
      bounds.extend(start1);
      bounds.extend(end1);
      map.fitBounds(bounds);
      var request = {
        origin: start1,
        destination: end1,
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
        } else {
          alert("Directions Request from " + start1.toUrlValue(6) + " to " + end1.toUrlValue(6) + " failed: " + status);
        }
      });
    }
    function calcRoute3() {
      var start2 = new google.maps.LatLng(41.074326, 28.795631);
      //var end = new google.maps.LatLng(38.334818, -181.884886);
      var end2 = new google.maps.LatLng(41.036872, 28.985135);


      var endMarker = new google.maps.Marker({
        position: end2,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.036872, 28.985135),
          url: '../assets/images/google-maps/taksim.svg'
        }
      });
      var bounds = new google.maps.LatLngBounds();
      bounds.extend(start2);
      bounds.extend(end2);
      map.fitBounds(bounds);
      var request = {
        origin: start2,
        destination: end2,
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          directionsDisplay.setMap(map);
        } else {
          alert("Directions Request from " + start2.toUrlValue(6) + " to " + end2.toUrlValue(6) + " failed: " + status);
        }
      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  }
  mapLocation();
}
