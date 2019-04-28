$(document).ready(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

$(document).ready(function () {
    $(".trigger_popup_friccs").click(function(){
       $('.hover_bkgr_friccs').show();
    });
    $('.hover_bkgr_friccs').click(function(){
        $('.hover_bkgr_friccs').hide();
    });
    $('.popupCloseButtons').click(function(){
        $('.hover_bkgr_friccs').hide();
    });
});
