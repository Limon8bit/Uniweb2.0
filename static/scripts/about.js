$(document).ready(function(){
    $(".about-menu").hide();
    var showMenu = 0;
    $(".header-container-top_navigation-left_block-about").on("click", function(){
        showMenu = !showMenu;
        if(showMenu){
            $(".about-menu").show();
        } else {
            $(".about-menu").hide();
        }
    })
})
