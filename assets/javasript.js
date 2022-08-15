// pengaturan untuk menu ketika layar responsive
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}


$(document).ready(function () {
    var width = $(window).width();
    if (width < 1000) {
        klikMenu();
    }
})

// pengaturan untuk menu ketika layar full
$(window).resize(function () {
    var width = $(window).width();
    if (width > 1000) {
        menu.css("display", "block");
    } else {
        menu.css("display", "none");
    }
    klikMenu();
})

//pengaturan untuk efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("biru");
        }else{
            $("nav").removeClass("biru");
        }
    })
})