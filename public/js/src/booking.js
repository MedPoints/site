$(function () {
    if (isRegistered()) {
        logIn(Cookies.get('MedPoints_PrivateKey'),
        Cookies.get('MedPoints_PublicKey'),
        function(data) {
            if (data) {
                $('#bookingWalletId').val(data.privateKey);
                $('#bookingWalletKey').val(data.publicKey);
                $('#firstName').val(data.firstName);
                $('#lastName').val(data.lastName);
                $('#email').val(data.email);
            }
        });
    } else {
        generateNewWallet(function (walletData) {
            $('#bookingWalletId').val(walletData.PrivateKey);
            $('#bookingWalletKey').val(walletData.PublicKey);
        });
    }

    initBookingData();

    $('#bookingButton').on('click', function () {
        var data = {};
        var errors = [];
        data.firstName = $('#firstName').val();
        if (!data.firstName)
            errors.push('Enter a first name');
            
        data.lastName = $('#lastName').val();
        if (!data.lastName)
            errors.push('Enter a last name');

        data.email = $('#email').val();
        if (!data.email)
            errors.push('Enter an email');

        data.confirmEmail = $('#confirmEmail').val();
        if (!data.email)
            errors.push('Enter a confirmation email');

        if (data.email !== data.confirmEmail)
            errors.push('Emails do not match');

        data.bookingDate = $('#bookingDate').val();
        if (!data.bookingDate)
            errors.push('Enter a booking date');

        data.doctorId = $('#doctorId').val();
        if (!data.doctorId)
            errors.push('Select a doctor');
        data.serviceId = $('#serviceId').val();
        if (!data.serviceId)
            errors.push('Select a service');
        data.clinicId = $('#clinicId').val();
        if (!data.clinicId)
            errors.push('Select a clinic');
        data.walletId = $('#bookingWalletId').val();
        if (!data.walletId)
            errors.push('You need a wallet to book a visit. Please register or refresh this page.');
        
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

        data.sex = getSex();
        data.dateOfBirth = $('#dateOfBirth').val();

        if (!isRegistered()) {
            register(data);
        }

        $.post({
            url: '/book',
            data: data,
            success: function(res) {
                window.location.href = '/success';
            },
            error: function (res) {
                alert(window.localizer.localize('errors.booking'));
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
    doctorId = query.doctorId;
    if (!doctorId) {
        alert(window.localizer.localize('errors.visitDoctor'));
        return false;
    }

    $('#doctorId').val(doctorId);
    $('#serviceId').change(function(evt) {
        loadClinics($(this).val());
    });
    loadServices(doctorId, function(evt) {
        var serviceId = query.serviceId;
        if (serviceId) {
            $('#serviceId').val(serviceId);
            loadClinics(serviceId);
        }
    });
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
function loadClinics(serviceIdString) {
    if (serviceIdString) {
        $.ajax({
            url: '/doctors/' + doctorId + '/hospitals?service=' + serviceIdString,
            success: function(res) {
                var $select = $('#clinicId');
                $select.empty();
                var clinics = res.clinics;
                if ($select && clinics) {
                    var listitems = '<option value="">' + window.localizer.localize('controls.selectClinic') + '</option>';
                    for (var i = 0, length = clinics.length; i < length; i++) {
                        var clinic = clinics[i];
                        listitems += '<option value=' + clinic.id + '>' + clinic.name + '</option>';   
                    }
                    $select.append(listitems);
                }
            },
            error: function(res) {
                console.log(res);
            }
        });
    } else {
        $("#clinicId").empty();
    }
}

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