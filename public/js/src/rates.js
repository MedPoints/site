$(function () {
    $('#exchangeAmount').on('input', function(evt) {
        var data = {};
        var errors = [];

        data.currency = $('#exchangeCurrency').val();
        data.amount = this.value;
        if (!data.amount || isNaN(data.amount))
            errors.push(window.localizer.localize('errors.mustBeNumber'));

        if (errors.length > 0) {
            var errorContent = '';
            for (var i = 0; i < errors.length; i++) {
                errorContent += '<div class="alert alert-danger" role="alert">' + errors[i] + '</div>';
            }
            
            $('#modalErrorTitle').html(window.localizer.localize('errorWindowTitle'));
            $('#modalErrorContent').html(errorContent);
    
            $('#errorModal').modal('show');
            return;
        }

        $.post({
            url: '/calculateRates',
            data: data,
            success: function(res) {
                $('#exchangeRate').val(res.rate);
            },
            error: function (res) {
                showCustomErrorModal(
                    window.localizer.localize('errors.requestErrorTitle'),
                    window.localizer.localize('errors.requestError')
                );
            },
        });
    });


    // $('#calculateRate').on('click', function () {
    //     var data = {};
    //     var errors = [];

    //     data.currency = $('#exchangeCurrency').val();
    //     data.amount = $('#exchangeAmount').val();
    //     if (!data.amount || isNaN(data.amount))
    //         errors.push(window.localizer.localize('errors.mustBeNumber'));

    //     if (errors.length > 0) {
    //         var errorContent = '';
    //         for (var i = 0; i < errors.length; i++) {
    //             errorContent += '<div class="alert alert-danger" role="alert">' + errors[i] + '</div>';
    //         }
            
    //         $('#modalErrorTitle').html(window.localizer.localize('errorWindowTitle'));
    //         $('#modalErrorContent').html(errorContent);
    
    //         $('#errorModal').modal('show');
    //         return;
    //     }

    //     $.post({
    //         url: '/calculateRates',
    //         data: data,
    //         success: function(res) {
    //             $('#exchangeRate').val(res.rate);
    //         },
    //         error: function (res) {
    //             alert(window.localizer.localize('errors.requestError'));
    //         },
    //     });
    // });
});