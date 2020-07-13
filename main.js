$(function() {
 $("#btn").on("click", function() {
    var val = $("input").val();
    if(val !== '') {
    var elem = $("<li></li>").text(val);
        $(elem).append("<button class='remove'> X </button>");
        $("#ull").append(elem);
        $("input").val("");
            $(".remove").on("click", function(){
             $(this).parent().remove();
            });
        }
    });
});