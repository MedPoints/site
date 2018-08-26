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

        Cookies.set('MedPoints_PrivateKey', $('#registerWalletId').val());
        Cookies.set('MedPoints_PublicKey', $('#registerWalletKey').val());
        return true;
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