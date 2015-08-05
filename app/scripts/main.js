// jshint devel:true

var token = 'MDphMmIxNDY0Mi0zYjYwLTExZTUtYTRlOS1hZjBkOWE1YzRmYzI6WWRZR1h6Q0ZwQk9JNG00YTJMcHBsOFNxcUxjeklpTmVEWGlz';

var productEndpoint = 'https://lcboapi.com/products';
var storeEndpoint = 'https://lcboapi.com/stores';

$('#form').on('submit', function(event) {
    event.preventDefault();

    var city = $('#city').val();
    var product = $('#product').val();
    var $el = $('#store-list');
    //$el.html('');
    var stores = [];
    // find lat and lon

    $.ajax({
        url: storeEndpoint,
        data: {
            lat: 43.8691397,
            lon: -79.0290066,
            order: 'distance_in_meters.desc'
        },
        headers: { 'Authorization': 'Token ' + token }
    }).done(function(resp) {
        window.data = stores = resp.result;
        for(var i = 0; i < data.length; i++) {
            if(data[i].distance_in_meters < product * 1000) {
                $el.append('<li>' + data[i].name + '</li>');
            }
        }

    }).fail(function(resp) {
        debugger;
        alert(resp);
    });
});
