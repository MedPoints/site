$(function () {
    $('#faqButton').on('click', function () {
        var data = {};
        var errors = [];
        data.name = $('#yourName').val();
        data.email = $('#yourEmail').val();
        
        if (!data.email) {
            errors.push(window.localizer.localize('errors.requiredEmail'));
        } else {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
                errors.push(window.localizer.localize('errors.incorrectEmail'));
            }
        }

        data.text = $('#yourQuestion').val();
        if (!data.text)
            errors.push(window.localizer.localize('errors.requiredQuestion'));

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
            url: '/askQuestion',
            data: data,
            success: function(res) {
                $('#askQuestion').html(window.localizer.localize('faq.thanks'));
            },
            error: function (res) {
                showCustomErrorModal(
                    window.localizer.localize('errors.requestErrorTitle'),
                    window.localizer.localize('errors.requestError')
                );
            },
        });
    });
});