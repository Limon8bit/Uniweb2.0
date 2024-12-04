$( document ).ready(function(){
    $( ".price-input-from__input" ).on('input', function(){
        let val = $(this).val();
        if((val.length == 4) && val[1]!=" "){
            val = val[0].concat(" ", val.slice(1));
        } else if((val.length == 4) && val[1] ==" "){
            val = val[0] + val.slice(2);
        }
        $(this).val(val);
    });

    $( ".price-input-to__input" ).on('input', function(){
        let val = $(this).val();
        if((val.length == 4) && val[1]!=" "){
            val = val[0].concat(" ", val.slice(1));
        } else if((val.length == 4) && val[1] ==" "){
            val = val[0] + val.slice(2);
        }
        $(this).val(val);
    })
});