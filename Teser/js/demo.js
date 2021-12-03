var i = 0;

function appendPoint() {
    // for (var j=0; j<50; i++, j++) {
    $('#collection').append('●<br>');
    // }
    // if (i < 5000) window.setTimeout(appendSomeItems, 0);
}
function delPoint() {
    // $('#collection li').remove(0);
    $('#collection li').remove('<li>Line Item</li>');
}
// appendSomeItems();