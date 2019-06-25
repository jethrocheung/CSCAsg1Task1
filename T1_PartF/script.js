$(document).ready(function () {

    $('button').on('click', function () {

        var location = $('#txtLocation').val();

        if (location !== '') {

            // get co-ords for location entered (latitude,longitude)
            // e.g. https://maps.googleapis.com/maps/api/geocode/json?address=mississauga&key=your-google-api-key

            var googleAPIKey = 'your-google-api-key';
            var googleAPIUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
            var googleParms = { "address": location, "key": googleAPIKey };

            $.get(googleAPIUrl, googleParms, function (resp) {

                var lat = resp.results[0].geometry.location.lat;
                var lng = resp.results[0].geometry.location.lng;

                // get map of location
                displayMap(lat, lng);

                // get current weather at those co-ords
                // e.g. https://api.worldweatheronline.com/free/v2/weather.ashx?q=43,-79&format=json&key=your-weather-api-key

                var weatherAPIUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx';
                var weatherParms = { "key": f00d5ef8d2474ba4a0d71008190306, "format": "json", "q": lat + "," + lng };

                $.get(weatherAPIUrl, weatherParms, function (resp2) {

                    var pattern = $('#tmpResults').html();
                    var content = Mustache.render(pattern, resp2.data);

                    $('#divWeather').html(content);

                });

            });

        }

    });


    function displayMap(lat, lng) {
        var mapProperties = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("divMap"), mapProperties);
    }


});