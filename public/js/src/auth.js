$(function () {
    populateWalletModal();

    $('#logOutButton').on('click', function () {
        logOut();
    });

    $('#logInButton').on('click', function () {
        var walletId = $('#walletId').val();
        var walletKey = $('#walletKey').val();
        if (walletId && walletKey) {
            logIn(walletId, walletKey);
        } else {
            alert(window.localizer.localize('errors.bothKeyAndId'));
        }
    });

    if (!isRegistered()) {
        var supportLinkContainer = $('.support-tickets');
        var supportLink = supportLinkContainer.find('a');
        supportLink.attr('href', '/registration');
    }
});

function generateNewWallet(callback) {
    $.ajax({
        url: '/auth/generate',
        success: function (res) {
            if (callback) {
                callback(res);
            }
        }, 
        error: function (res) {
            console.log(window.localizer.localize('errors.newWallet'))
        }
    });
}

function populateWalletModal() {
    if (isRegistered()) {
        var walletId = Cookies.get('MedPoints_PrivateKey');
        var walletKey = Cookies.get('MedPoints_PublicKey');
        setInfoWalletIdValue(walletId);
        setInfoWalletKeyValue(walletKey);
    }
}

function setInfoWalletIdValue(Id) {
    $('#infoWalletId').val(Id);
    $('#infoWalletIdText').html(Id);
}

function setInfoWalletKeyValue(Key) {
    $('#infoWalletKey').val(Key);
    $('#infoWalletKeyText').html(Key);
}

function isRegistered() {
    return Cookies.get('MedPoints_PrivateKey') && Cookies.get('MedPoints_PublicKey');
}

function logOut() {
    Cookies.remove('MedPoints_PrivateKey');
    Cookies.remove('MedPoints_PublicKey');
    window.location.reload();
}

function logIn(walletId, walletKey, callback) {
    $.ajax({
        url: '/auth/authenticate',
        method: 'POST',
        data: {
            publicKey: walletId,
            privateKey: walletKey,
        },
        success: function (res) {
            Cookies.set('MedPoints_PrivateKey', walletId);
            Cookies.set('MedPoints_PublicKey', walletKey);
            if (callback) {
                callback(res.result);
            } else {
                window.location.reload();
            }
        },
        error: function (res) {
            alert(window.localizer.localize('errors.requestError'));
        }
    });
}