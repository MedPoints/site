$(function () {
    $('#exchangeCurrency').on('change', function (evt) {
        calculateExchangeRate();
    });
    $('#exchangeAmount').on('input', function(evt) {
        calculateExchangeRate();
    });
});

function calculateExchangeRate() {
    var data = {};
    var errors = [];

    data.currency = $('#exchangeCurrency').val();
    data.amount = $('#exchangeAmount').val();
    // In case of the 'Calculate' button we need to show this erro
    // but for now just set the result input to 0
    // if (!data.amount || isNaN(data.amount)) {
        //errors.push(window.localizer.localize('errors.mustBeNumber'));
    // }
    if (data.amount && isNaN(data.amount)) {
        errors.push(window.localizer.localize('errors.mustBeNumber'));
    } else if (!data.amount) {
        $('#exchangeRate').val(0);
        return;
    }

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
}