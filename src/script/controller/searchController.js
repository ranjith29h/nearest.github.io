app.controller('search',function($scope,apiFactory){
  $scope.name = "ranjith";
  $scope.showMap = false;
  $scope.showLoading = false;

  $scope.callAPI = function(){
    apiFactory.zomota(data.lat,data.lng)
  .then(function (response) {
    $scope.showLoading = true;
      var myLatLng = {lat: data.lat, lng: data.lng};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
      });

      for(var i=0;i<response.data.restaurants.length;i++){
        var latlon = {lat:parseFloat(response.data.restaurants[i].restaurant.location.latitude) , lng:parseFloat(response.data.restaurants[i].restaurant.location.longitude)};
        var marker = new google.maps.Marker({
          position: latlon,
          map: map
        });
      }
      data = {};
      $scope.data = response.data.restaurants;
      $scope.showLoading = false;
      $scope.showMap = true;

  }, function (error) {
      console.log(error);
  });
  };

  $scope.call_location = function(){
var options = {enableHighAccuracy: true};
  navigator.geolocation.getCurrentPosition(function(pos) {
                  $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                  data.lat = pos.coords.latitude;
                  data.lng = pos.coords.longitude;
                  console.log(data);


           var geocoder = geocoder = new google.maps.Geocoder();
           geocoder.geocode({ 'latLng': $scope.position }, function (results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                   if (results[1]) {
                       document.getElementById("place_search").value = results[1].formatted_address;
                       $scope.callAPI();
                   }
               }
           });
              },
              function(error) {
                  alert('Unable to get location: ' + error.message);
              }, options);


  }





});
