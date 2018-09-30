$(function () {
    $('#addTicket').on('click', function () {
        var data = {};
        var errors = [];

        data.title = $('#recordTitle').val();
        if (!data.title)
            errors.push(window.localizer.localize('errors.requiredTitle'));

        data.subject = $('#subject').val();
        if (!data.subject)
            errors.push(window.localizer.localize('errors.requiredSubject'));

        data.text = $('#ticketText').val();
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
            url: '/createTicket',
            data: data,
            success: function(res) {
                window.location.href = '/account-tickets';
            },
            error: function (res) {
                alert(window.localizer.localize('errors.requestError'));
            },
        });
    });
});