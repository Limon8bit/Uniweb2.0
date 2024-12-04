$( document ).ready(function(){
    function slider(){
        var x = -1;
        setInterval(function(){
            if(x>=-3){
                $( ".partners-slider-wrap" ).css('transform', 'translateX(' + (x * 1400 + x*(140/3)) + 'px)');
                $( ".active" ).css('transform', 'translateX(' + ((-1 * x) * 1400/4) + 'px)');
            } else {
                x = 0;
                $( ".partners-slider-wrap" ).css('transform', 'translateX(' + (x * 1400 + x*(140/3)) + 'px)');
                $( ".active" ).css('transform', 'translateX(0)');
            }   
            --x;
        }, 10000)
    }
    slider();
});