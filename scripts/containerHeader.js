$(document).ready(function(){
        var w = $(".container").width();
        var a = 0;
        var b = 8;

        if(a==0){
          //alert(w);
          a = a +1;
        }


        $("#containerHeader").css({
            'width': "430px",
        });

        $(window).resize(function(){
            $("#containerHeader").width($(".container").width()+ b);
        });

        $(window).resize(function(){
            $("#containerHeader").width($(".container").width()+ b);
        });

;})
