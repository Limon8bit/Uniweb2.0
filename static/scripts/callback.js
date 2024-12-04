$(document).ready(function(){
    $( "p.callback-function" ).on("click", function(){
        $( ".callback-wrap" ).css("display", "flex");
        $( "body" ).css({"height": "100vh", "overflow-y": "hidden"});
    });
    $( ".callback-close" ).on("click", function(){
        $( ".callback-wrap" ).hide();
        $( "body" ).css({"height": "auto", "overflow-y": "visible"});
    })
});