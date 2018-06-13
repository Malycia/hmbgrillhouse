function initMap() {
  var hmb = {lat: 50.905595, lng: 4.374571};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: hmb
  });
  var marker = new google.maps.Marker({
    position: hmb,
    map: map
  });
}
