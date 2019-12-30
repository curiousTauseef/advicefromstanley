  $(document).ready(function() {
    $("#fbconsole1").click(function() {
      console.log("checkfbuser: %o", this);

FB.api('/me?fields=id,name,email', function(response) {
  console.log(response);
});


    });
  });
