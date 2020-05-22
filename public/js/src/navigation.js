$( function() {
    prepareCategoryCount();
    prepareLoginNavigation();
    $('#errorModal').modal({show: false});
    initLocation();
    $('#addToFavButton').on('click', function(evt) {
        if (!isRegistered()) {
            $('#modalErrorTitle').html(window.localizer.localize('errorAuthTitle'));
            $('#modalErrorContent').html(window.localizer.localize('errorFavourites'));
    
            $('#errorModal').modal('show');
        } else {
            var type = $(evt.target).data('type');
            var id = $(evt.target).data('id');
            $.ajax({
                url: '/addFavourites',
                method: 'POST',
                data: {
                    type: type,
                    id: id,
                },
                success: function (res) {
                    $('#addToFavButton').html(window.localizer.localize('successAddToFavourites'));
                },
                error: function (res) {
                    showCustomErrorModal(
                        window.localizer.localize('errors.requestErrorTitle'),
                        window.localizer.localize('errors.requestError')
                    );
                }
            });
        }
    });
});

/**
 * Initializes the location element in the navigations bar
 * and stores location data to a cookie variable
 */
function initLocation() {
    var savedLocation = Cookies.get('location');
    if (savedLocation) {
        var locationData = JSON.parse(savedLocation);
        $('#locationLabel').text(locationData.city);
    } else {
        ipLookUp(function(locationData) {
            if (locationData) {
                Cookies.set('location', JSON.stringify(locationData), {expires: 3});
                $('#locationLabel').text(locationData.city);
                $('#locationName').text(locationData.city);
            }
        });
    }

    $('#selectLocationButton').on('click', function () {
        var selectedLocation = $('#locationAutocomplete').val();
        if (selectedLocation) {
            $('#locationLabel').text(selectedLocation);
            Cookies.remove('location');
            Cookies.set('location', JSON.stringify({city: selectedLocation}), {expires: 3});
        }
        $('#chooseLocation').modal('hide');
    })

    $('#locationAutocomplete').autocomplete({
        source: function (request, response) {
            $.ajax({
                url: '/cities',
                data: {
                    filter: request.term,
                },
                success: function (data) {
                    response(data.cities);
                },
            })
        },
        minLength: 3,
        select: function (event, ui) {},
    });
    $( "#locationAutocomplete" ).autocomplete( "option", "appendTo", "#autocompleteBody" );
}

/**
 * Gets a user's location based on the IP address
 * using the ip-api service
 */
function ipLookUp (callback) {
    $.ajax('https://pro.ip-api.com/json/?key=SvzNBdEuM94psbP')
        .then(
            function success(response) {
                callback(response);
            },
            function fail(data, status) {
                console.log('Request failed.  Returned status of',
                            status);
            }
        );
}

function copyToClipboard(element) {
    if (element && element.val && element.val()) {
        var el = document.createElement('textarea');
        el.value = element.val();
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}


function prepareLoginNavigation() {
    var isUserRegistered = isRegistered();
    toggleRegisteredItems(isUserRegistered);
    toggleUnregisteredItems(!isUserRegistered); 
}

function toggleRegisteredItems(isToggle) {
    if (isToggle) {
        $('.registered-item').show();
    } else {
        $('.registered-item').hide();
    }
        
}

function toggleUnregisteredItems(isToggle) {
    if (isToggle)
        $('.unregistered-item').show();
    else
        $('.unregistered-item').hide();
}



function prepareCategoryCount() {
    async.parallel([
        function(callback) {
            getCategoryData('/doctors/count', 'doctors', callback);
        },
        function(callback) {
            getCategoryData('/clinics/count', 'clinics', callback);
        },
        function(callback) {
            getCategoryData('/services/count', 'services', callback);
        },
        function(callback) {
            getCategoryData('/pharmacies/count', 'pharmacies', callback);
        },
        function(callback) {
            getCategoryData('/drugs/count', 'drugs', callback);
        }
    ],
    // optional callback
    function(err, results) {
        for (var i = 0, length = results.length; i < length; i++) {
            var category = results[i];
            $('#' + category.name + 'Count').html(category.value);
        }
    })

    function getCategoryData(url, paramName, callback) {
        $.ajax({
            url: url,
            dataType: 'application/json',
            success: function (res) {
                var obj = {};
                obj.name = paramName;
                obj.value = res.count;
                callback(null, obj);
            }, 
            error: function (res) {
                var count = 0;
                try {
                    count = JSON.parse(res.responseText).count;
                } catch (err) {}
                callback(null, {
                    name: paramName,
                    value: count
                });
            }
        })
    }
}