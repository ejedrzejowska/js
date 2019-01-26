$(document).ready(function () {
    $(".submenu1").click(function () {
       // $(this).hide();
       // $(this).slideUp();
       $("#submenu1").slideToggle(5000, function () {
           alert("koniec");
       });
    });
    $(".submenu2").click(function () {
        $("#submenu2").slideToggle("slow");

    });
    $(".submenu3").click(function () {
       $("#submenu3").slideToggle("fast");
    });

});

