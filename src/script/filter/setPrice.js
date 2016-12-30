app.filter('setPrice', function () {
      return function (price_range) {
        var out = '';
        for(var i=0;i<price_range;i++){
          out = out + "₹";
        }
        return out;
      };
    });
