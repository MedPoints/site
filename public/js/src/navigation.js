$( function() {
    prepareCategoryCount();
});


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