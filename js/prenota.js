$(document).ready(function() {
    console.log("document loaded");
    var $title = $(".title");
    $title.text("Prenotazione camera " + localStorage.getItem("tipologiaCamera"))   
});