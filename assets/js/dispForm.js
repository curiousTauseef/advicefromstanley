<script type="text/JavaScript">

$(function() {
    $("#signup").validate();

    $("#signup").submit(function(e) {
        e.preventDefault();


        var display =
        $("#name").val() + " " +
        $("#theage").val() + " " +
        $("#theemail").val();


        $("#result").html(display);
    });
});

</script>
