var  i = 0;

function appendSomeItems() {
    for (var j=0; j<50; i++, j++) {
        $('#collection').append('<li>Line Item</li>');
    }
    if (i < 5000) window.setTimeout(appendSomeItems, 0);
}

// appendSomeItems();