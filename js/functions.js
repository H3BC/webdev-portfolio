$(document).ready(function(){

//funkcja aktywujaca okienka popover
    $('[data-toggle="popover"]').popover({
    html: true // uzywanie html w okienkach
    })

 // funkcja zamykajaca okienka popover
$('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

// aktywacja tabow. pojedynczo dla kazdego na stronie.

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})

// okienka typu tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

});




