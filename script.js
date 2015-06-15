$(document).ready(function() {
   $('#action-button').click(function() {
      $.ajax({
         url: "https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300",
         data: {
            "App-Id": "9c0bf9d1",
            "App-Key": "12e5ba26ece8cbfd5336d57147b9219c"
         },
         dataType: 'jsonp',
         success: function(data) {
            console.log(data);
            // console.log(data[_embedded][services][-2]);
         },
         error: function() {
            console.log("An error has occurred");
         }
      });

      // $.getJSON("https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300&App-Id=9c0bf9d1&App-Key=12e5ba26ece8cbfd5336d57147b9219c" + "?callback=?", function(json) {
      //       console.log(json);
      // });
   });
});