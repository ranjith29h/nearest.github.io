app.factory('apiFactory',['$http',function($http){

      var base_url = "https://developers.zomato.com/api/v2.1/search";
      var apiFactory = {};

      apiFactory.zomota = function(lats,lngs){
        var final_url =  base_url + "?lat=" + lats + "&lon=" + lngs;
        console.log(final_url);
          return $http.get(final_url, {
              headers: { 'user-key': 'e74d2ed799a8009e05eb95d4f6690c80' }
            });
      }

      return apiFactory;

  }]);
