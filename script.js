
var w1 = (function ($) {
    var button3wraps=false;

    function button1() {
        $(".grid.grid-12").toggleClass("selected");
    }

    function button2() {
        $("nav a[href^='http']").toggleClass("selected");
    }
    
    function button3() {
        var elements=$("input[type='checkbox']:not(:checked),input[type='radio']:not(:checked)");
        if(!button3wraps){
            elements.wrap('<span class="selected"></span>');
            button3wraps=true;
        }
        else{
            elements.unwrap();
            button3wraps=false;
        }        
    }

    function button4() {
        $("div#text p:first:empty").toggleClass("selected");
    }

    function button5() {
        $(".pagination-item:not(span)").toggleClass("selected");
    }

    $("#button1").on("click", button1);
    $("#button2").on("click", button2);
    $("#button3").on("click", button3);
    $("#button4").on("click", button4);
    $("#button5").on("click", button5);

    


})(jQuery);