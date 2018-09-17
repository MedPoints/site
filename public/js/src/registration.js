$(function() {
    if (!isRegistered()) {
        initRegisterElement();
    } else {
        initAlredyRegisteredElement();
    }
    

    $('#registerButton').on('click', function(evt) {
        if (!$('#termsAccept').is(":checked")) {
            alert('Please accept our terms of use and privacy policy before proceeding');
            return false;
        }
        
        var registerData = {
            publicKey: $('#registerWalletId').val(),
            privateKey: $('#registerWalletKey').val(),
        }
        var errors = [];

        registerData.firstName = $('#firstName').val();
        if (!registerData.firstName)
            errors.push('Enter a first name');
            
        registerData.lastName = $('#lastName').val();
        if (!registerData.lastName)
            errors.push('Enter a last name');

        registerData.email = $('#email').val();
        if (!registerData.email)
            errors.push('Enter an email');

        if (errors.length > 0) {
            var errorContent = '';
            for (var i = 0; i < errors.length; i++) {
                errorContent += '<div class="alert alert-danger" role="alert">' + errors[i] + '</div>';
            }

            $('#modalErrorTitle').html('Validation errors');
            $('#modalErrorContent').html(errorContent);
    
            $('#errorModal').modal('show');
            return;
        }


        $.ajax({
            url: '/auth/register',
            method: 'POST',
            data: registerData,
            success: function (res) {
                Cookies.set('MedPoints_PrivateKey', res.result.publicKey);
                Cookies.set('MedPoints_PublicKey', res.result.privateKey);
                window.location.href = '/';
            },
            error: function (res) {
                alert('An error occurred during request processing. Please try again.');
            }
        })


        
    });
});

function setWalletIdValue(Id) {
    $('#registerWalletId').val(Id);
    $('#registerWalletIdText').html(Id);
}

function setWalletKeyValue(Key) {
    $('#registerWalletKey').val(Key);
    $('#registerWalletKeyText').html(Key);
}

function initRegisterElement() {
    $('.alreadyRegisteredContainer').hide();
    $('.registerContainer').show();
    generateNewWallet(function (walletData) {
        setWalletIdValue(walletData.PrivateKey);
        setWalletKeyValue(walletData.PublicKey);
    });
}

function initAlredyRegisteredElement() {
    $('.alreadyRegisteredContainer').show();
    $('.registerContainer').hide();
}