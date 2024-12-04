$( document ).ready(function(){
    function slider(){
        var x = -1;
        setInterval(function(){
            if(x>=-3){
                $( ".news-slider-wrap" ).css('transform', 'translateX(' + (x * 1400 + x*48) + 'px)');
                $( ".active-news" ).css('transform', 'translateX(' + ((-1 * x) * 1400/4) + 'px)');
            } else {
                x = 0;
                $( ".news-slider-wrap" ).css('transform', 'translateX(' + (x * 1400 + x*48) + 'px)');
                $( ".active-news" ).css('transform', 'translateX(0)');
            }   
            --x;
        }, 15000)
    }
    slider();
});