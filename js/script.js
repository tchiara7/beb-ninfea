
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('navbar-background', $(this).scrollTop() > $nav.height());
    });
});

function prenota(tipologiaCamera){
    console.log(tipologiaCamera);
    localStorage.setItem("tipologiaCamera", tipologiaCamera);
    location.href="./prenota.html";
}