$(function () {
    $('#submitAccountEdit').on('click', function() {
        var data = {};
        var errors = [];
        data.firstName = $('#firstName').val();
        if (!data.firstName)
            errors.push(window.localizer.localize('errors.requiredFirstName'));
            
        data.lastName = $('#lastName').val();
        if (!data.lastName)
            errors.push(window.localizer.localize('errors.requiredLastName'));

        data.email = $('#email').val();
        if (!data.email) {
            errors.push(window.localizer.localize('errors.requiredEmail'));
        } else {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
                errors.push(window.localizer.localize('errors.incorrectEmail'));
            }
        }

        data.confirmEmail = $('#confirmEmail').val();
        if (!data.confirmEmail)
            errors.push(window.localizer.localize('errors.requiredConfirmEmail'));

        if (data.email !== data.confirmEmail)
            errors.push(window.localizer.localize('errors.emailsDoNotMatch'));

        if (errors.length > 0) {
            var errorContent = '';
            for (var i = 0; i < errors.length; i++) {
                errorContent += '<div class="alert alert-danger" role="alert">' + errors[i] + '</div>';
            }

            showCustomErrorModal(
                window.localizer.localize('errorWindowTitle'),
                errorContent
            );
            return;
        }

        data.sex = getSex();

        $.post({
            url: '/account/updateAccount',
            data: data,
            success: function(res) {
                if (res.status !== 200) {
                    showCustomErrorModal(
                        window.localizer.localize('customErrorWindowTitle'),
                        res.statusText
                    );
                } else {
                    window.location.href = '/account/success';
                }
                
            },
            error: function (res) {
                showCustomErrorModal(
                    window.localizer.localize('errors.accountUpdateTitle'),
                    window.localizer.localize('errors.account')
                );
            },
        });

    });
});

function getSex() {
    var isMale = $('#maleRadio').is(':checked');
    return isMale ? 'male': 'female';
}