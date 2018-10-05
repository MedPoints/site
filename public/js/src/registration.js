$(function() {
    if (!isRegistered()) {
        initRegisterElement();
    } else {
        initAlredyRegisteredElement();
    }
    

    $('#registerButton').on('click', function(evt) {
        if (!$('#termsAccept').is(":checked")) {
            alert(window.localizer.localize('errors.terms'));
            return false;
        }
        
        var registerData = {
            publicKey: $('#registerWalletId').val(),
            privateKey: $('#registerWalletKey').val(),
        }
        var errors = [];

        registerData.firstName = $('#firstName').val();
        if (!registerData.firstName)
            errors.push(window.localizer.localize('errors.requiredFirstName'));
            
        registerData.lastName = $('#lastName').val();
        if (!registerData.lastName)
            errors.push(window.localizer.localize('errors.requiredLastName'));

        registerData.email = $('#email').val();
        if (!registerData.email)
            errors.push(window.localizer.localize('errors.requiredEmail'));

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

        register(registerData);
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

function register(registerData) {
    $.ajax({
        url: '/auth/register',
        method: 'POST',
        data: registerData,
        success: function (res) {
            Cookies.set('MedPoints_PrivateKey', res.result.privateKey);
            Cookies.set('MedPoints_PublicKey', res.result.publicKey);
            window.location.href = '/';
        },
        error: function (res) {
            alert(window.localizer.localize('errors.requestError'));
        }
    })
}