$(document).ready(function()
{
    $("#prev").click(function(){
        $("#slide-2").toggle(800, "linear");
        $("#slide-1").toggle(800, "linear");
    });

    $("#next").click(function(){
        $("#slide-1").toggle(800);
        $("#slide-2").toggle(800);
    });
});