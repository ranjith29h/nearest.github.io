var data = {};
function initialize() {
    var input = document.getElementById('place_search');
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        data.place = place.name;
        data.lat = place.geometry.location.lat();
        data.lng = place.geometry.location.lng();
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
