$(function () {
    if (isRegistered()) {
        logIn(Cookies.get('MedPoints_PublicKey'),
        Cookies.get('MedPoints_PrivateKey'),
        function(data) {
            if (data) {
                if (data.error) {
                    $('#bookingButton').off('click').attr('disabled', true);
                    
                } else {
                    $('#bookingWalletId').val(data.publicKey);
                    $('#bookingWalletKey').val(data.privateKey);
                    $('#firstName').val(data.firstName);
                    $('#lastName').val(data.lastName);
                    $('#email').val(data.email);
                }
            }
        });
    } else {
        generateNewWallet(function (walletData) {
            $('#bookingWalletId').val(walletData.PublicKey);
            $('#bookingWalletKey').val(walletData.PrivateKey);
        });
    }

    initBookingData();

    $('#bookingButton').on('click', function () {
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

        data.bookingDate = $('#bookingDate').val();
        if (!data.bookingDate)
            errors.push(window.localizer.localize('errors.requiredBookingDate'));

        data.doctorId = $('#doctorId').val();
        if (!data.doctorId)
            errors.push(window.localizer.localize('errors.requiredDoctor'));
        data.serviceId = $('#serviceId').val();
        if (!data.serviceId)
            errors.push(window.localizer.localize('errors.requiredService'));
        data.clinicId = $('#clinicId').val();
        if (!data.clinicId)
            errors.push('Select a clinic');
        data.walletId = $('#bookingWalletId').val();
        if (!data.walletId)
            errors.push(window.localizer.localize('errors.requiredWallet'));
        
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

        data.sex = getSex();
        data.dateOfBirth = $('#dateOfBirth').val();

        if (!isRegistered()) {
            data.privateKey = $('#bookingWalletKey').val();
            data.publicKey = $('#bookingWalletId').val();
            register(data);
        }

        $.post({
            url: '/book',
            data: data,
            success: function(res) {
                window.location.href = '/success';
            },
            error: function (res) {
                showCustomErrorModal(
                    window.localizer.localize('errors.requestErrorTitle'),
                    window.localizer.localize('errors.booking')
                );
            },
        });
    });  
    // /api/blockchain/transactions
});

function getSex() {
    var isMale = $('#radio2').is(':checked');
    return isMale ? 'male': 'female';
}

function initBookingData() {
    var query = getQueryParams(window.location.search);
    var doctorId = $('#doctorId').val();
    if (!doctorId) {
        showCustomErrorModal(
            window.localizer.localize('errors.bookingErrorTitle'),
            window.localizer.localize('errors.visitDoctor')
        );
        return false;
    }

    $('#doctorId').val(doctorId);
    $('#serviceId').change(function(evt) {
        //loadClinics($(this).val());
        updateBookingDetails();
    });

    $('#bookingDate').change(function(evt) {
        updateBookingDetails();
    });
    loadServices(doctorId, function(evt) {
        var serviceId = query.serviceId;
        if (serviceId) {
            $('#serviceId').val(serviceId);
            //loadClinics(serviceId);
        }
    });
}

function updateBookingDetails() {
    var bookingDate = $('#bookingDate').val();
    var serviceId = $('#serviceId').val();
    var doctorId = $('#doctorId').val();
    var clinicId = $('#clinicId').val();
    if (bookingDate &&
        serviceId &&
        doctorId &&
        clinicId) {
            showLoadingPanel();
            $('#bookingDetails').load(
                '/booking/details/', {
                    bookingDate: bookingDate,
                    serviceId: serviceId,
                    doctorId: doctorId,
                    clinicId: clinicId
                }, function() {
                    hideLoadingPanel();
                    initializeAddressMapToggle();
                });
        }
}

function showLoadingPanel() {
    var imageNode = $('<img class="loader" />');
    imageNode.attr('src', '/img/loader.gif');
    $('#bookingDetails h3').hide();
    $('#bookingDetails').append(imageNode);
}

function hideLoadingPanel() {
    $('.loader').remove();
    $('#bookingDetails h3').show();
}

function loadServices(doctorId, callback) {
    $.ajax({
        url: '/doctors/' + doctorId + '/services',
        success: function(res) {
            var $select = $('#serviceId');
            var services = res.services;
            if ($select && services) {
                var listitems = '<option value="">' + window.localizer.localize('controls.selectSerivce') + '</option>';
                for (var i = 0, length = services.length; i < length; i++) {
                    var service = services[i];
                    listitems += '<option value=' + service.id + '>' + service.name + '</option>';   
                }
                $select.append(listitems);
            }

            if (callback) {
                callback();
            }
        },
        error: function(res) {
            console.log(res);
        }
    });
}
// function loadClinics(serviceIdString) {
//     if (serviceIdString) {
//         $.ajax({
//             url: '/doctors/' + doctorId + '/hospitals?service=' + serviceIdString,
//             success: function(res) {
//                 var $select = $('#clinicId');
//                 $select.empty();
//                 var clinics = res.clinics;
//                 if ($select && clinics) {
//                     var listitems = '<option value="">' + window.localizer.localize('controls.selectClinic') + '</option>';
//                     for (var i = 0, length = clinics.length; i < length; i++) {
//                         var clinic = clinics[i];
//                         listitems += '<option value=' + clinic.id + '>' + clinic.name + '</option>';   
//                     }
//                     $select.append(listitems);
//                 }
//             },
//             error: function(res) {
//                 console.log(res);
//             }
//         });
//     } else {
//         $("#clinicId").empty();
//     }
// }

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}