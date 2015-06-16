$(document).ready(function() {
   $('#action-button').click(function() {
      $.ajax({
        url: "https://www.bookingbug.com/api/v1/114784/services?page=1&per_page=300",
        beforeSend: function(xhr) {
          xhr.setRequestHeader('App-Id', '9c0bf9d1');
          xhr.setRequestHeader('App-Key', '12e5ba26ece8cbfd5336d57147b9219c');
        },
        success: function(data) {
         $("#info").html("<p>" + data._embedded.services[data.total_entries-2].name + "</p></n><p>" + data._embedded.services[data.total_entries-1].name + "</p>");
        },
        error: function() {
          console.log("An error has occurred");
        }
      });
   });
});