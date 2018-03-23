function initMap() {
  function mapLocation() {
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;

    function initialize() {
      directionsDisplay = new google.maps.DirectionsRenderer();
      var uluru = {
        lat: 41.016431,
        lng: 28.653232
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
      var marker = new google.maps.Marker({
        position: uluru,
        icon: {
          anchor: new google.maps.Point(41.016431, 28.653232),
          url: '../assets/images/google-maps/cayan-map1.svg'
        },
        map: map
      });
      // var marker2 = new google.maps.Marker({
      //   position: {lat: 41.011111, lng: 28.653636},
      //   icon: {
      //     anchor: new google.maps.Point(41.016431, 28.653232),
      //     url: 'assets/images/metro.svg'
      //   },
      //   map: map
      // });
    }




    function calcRoute() {
      var start = new google.maps.LatLng(41.016431, 28.653232);
      //var end = new google.maps.LatLng(38.334818, -181.884886);
      var end = new google.maps.LatLng(41.011111, 28.653636);



      var startMarker = new google.maps.Marker({
        position: start,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.016431, 28.653232),
          url: '../assets/images/google-maps/cayan-map1.svg'
        }
      });
      var endMarker = new google.maps.Marker({
        position: end,
        map: map,
        icon: {
          anchor: new google.maps.Point(41.016431, 28.653232),
          url: '../assets/images/google-maps/metro.svg'
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
      var start1 = new google.maps.LatLng(41.016314, 28.669086);
      //var end = new google.maps.LatLng(38.334818, -181.884886);
      var end1 = new google.maps.LatLng(41.015227, 28.647919);



      // var startMarker = new google.maps.Marker({
      //             position: start,
      //             map: map,
      //             icon: {
      //               anchor: new google.maps.Point(41.016431, 28.653232),
      //               url: 'assets/images/cayan-map1.svg'
      //             }
      //         });
      //         var endMarker = new google.maps.Marker({
      //             position: end,
      //             map: map,
      //             icon: {
      //               anchor: new google.maps.Point(41.016431, 28.653232),
      //               url: 'assets/images/metro.svg'
      //             }
      //         });

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

    google.maps.event.addDomListener(window, 'load', initialize);
  }
  mapLocation();
}



// function initMap() {
//   var uluru = {lat:41.016431, lng: 28.653232};
//   // var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: uluru,
//     styles: [
//           {
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#f5f5f5"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#616161"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "color": "#f5f5f5"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.land_parcel",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#bdbdbd"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#eeeeee"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#757575"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#e5e5e5"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           },
//           {
//             "featureType": "road",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "road.arterial",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#757575"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dadada"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#616161"
//               }
//             ]
//           },
//           {
//             "featureType": "road.local",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.line",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#e5e5e5"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.station",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#eeeeee"
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#c9c9c9"
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           }
//         ]
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     icon: {
//       anchor: new google.maps.Point(41.016431, 28.653232),
//       url: 'assets/images/metro.svg'
//     },
//     map: map
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//
//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   var markers = locations.map(function(location, i) {
//     return new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length]
//     });
//   });
//
//   // Add a marker clusterer to manage the markers.
//   var markerCluster = new MarkerClusterer(map, markers,
//       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
// }
//
// var locations = [
//   {lat: 41.015227, lng: 28.647919},
//   {lat: 41.011111, lng: 28.653636},
//   {lat: 41.016314, lng: 28.669086},
// ]
//
//
//



// function initMap() {
//   var uluru = {lat:41.016431, lng: 28.653232};
//   // var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: uluru,
//     styles: [
//           {
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#f5f5f5"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#616161"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "color": "#f5f5f5"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.land_parcel",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#bdbdbd"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#eeeeee"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#757575"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#e5e5e5"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           },
//           {
//             "featureType": "road",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#ffffff"
//               }
//             ]
//           },
//           {
//             "featureType": "road.arterial",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#757575"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dadada"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#616161"
//               }
//             ]
//           },
//           {
//             "featureType": "road.local",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.line",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#e5e5e5"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.station",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#eeeeee"
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#c9c9c9"
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#9e9e9e"
//               }
//             ]
//           }
//         ]
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     icon: {
//       anchor: new google.maps.Point(41.016431, 28.653232),
//       url: 'assets/images/metro.svg'
//     },
//     map: map
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//
//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   var markers = locations.map(function(location, i) {
//     return new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length]
//     });
//   });
//
//   // Add a marker clusterer to manage the markers.
//   var markerCluster = new MarkerClusterer(map, markers,
//       {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
// }
//
// var locations = [
//   {lat: 41.015227, lng: 28.647919},
//   {lat: 41.011111, lng: 28.653636},
//   {lat: 41.016314, lng: 28.669086},
// ]
