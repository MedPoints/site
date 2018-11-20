$(function() {
    initializeAccordions();
    initializeCarousels();
    initializeCopyButtons();
    initializeMapMarkersToggle();
    initializeFiltersToggle();
    initializeMenuToggle();
    initializeBellToggle();
    initializeAddressMapToggle();
    initializeLocalizationControls();

    $('[data-toggle="tooltip"]').tooltip();
    $('.gallery a.gallery-img').simpleLightbox();

    $("a.delete-parent").click(function(event) {
        event.preventDefault();
        $(this).parent('.parent').remove();
    });
});

$(window).resize(function () {
    repos($('.crop img'))
})

repos($('.crop img'))

function initializeLocalizationControls() {
    var currentLocale = Cookies.get('locale') || 'en';
    var activeLocalizationItem = $('a[data-locale=' + currentLocale + ']').clone();
    activeLocalizationItem.find('.lang-name').remove();
    $('#langMenuItem').html(activeLocalizationItem.html());
}

function initializeAddressMapToggle() {
    $('#addressMap').modal({show:false});
    $('.map-toggle').on('click', function(evt) {
        evt.preventDefault();
        var $target = $(evt.target);
        $('#addressHeader').text($target.data('name'));
        $('#addressSubheader').text($target.text());
        // $('#addressFrame').attr('src', encodeURI($target.attr('href')));
        
        var map = new google.maps.Map(document.getElementById('addressFrame'), {
            zoom: 8,
            center: {lat: -34.397, lng: 150.644}
        });
        geocoder = new google.maps.Geocoder();
        codeAddress(geocoder, map, $target.text());
        
        
        $('#addressMap').modal();
    });
}

function codeAddress(geocoder, map, address) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function initializeAccordions() {
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });
    $( "#accordion2" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion3" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion4" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion5" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#accordion6" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
}

function initializeCarousels() {
    $('.reviews ul').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
     $( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
     $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');

     $('.gallery ul.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            },
            1400:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
     $( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
     $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
}

function initializeCopyButtons() {
    $('.btn-copy1').click(function (evt) {
        var target = $(evt.target);
        $(target).html('<i class="far fa-copy"></i> Copied');
        $(target).addClass('copy-link--copied');
    });
    
    $('.btn-copy2').click(function () {
        if($('.btn-copy2 i').hasClass('fa-copy'))
        {
            $('.btn-copy2').html('<i class="far fa-copy"></i> Copied');
            $('.btn-copy1').html('<i class="far fa-copy"></i> Copy');
        }
        else
        {
            $('.btn-copy2').html('<i class="far fa-copy"></i> Copy');
        }
    });
}

function initializeMapMarkersToggle() {
    $('.btn-map').click(function () {
        if($(this).hasClass('collapsed'))
        {
            $('.btn-map #mapLabel').html(window.localize('common.closeMap'));   
        }
        else
        {
            $('.btn-map #mapLabel').html(window.localize('common.showOnMap'));
        }
    });
}

function initializeFiltersToggle() {
    $('#btn-more').click(function () {
        if($('#btn-more i').hasClass('fa-angle-down'))
        {
            $('#btn-more').html('<i class="fas fa-angle-up"></i> Less filters');
        }
        else
        {
            $('#btn-more').html('<i class="fas fa-angle-down"></i> More filters');
        }
    });
}

function initializeMenuToggle() {
    $('#btn-menu').click(function () {
        if($('#btn-menu i').hasClass('fa-bars'))
        {
            $('#btn-menu').html('<i class="fas fa-times" data-toggle="collapse" data-target="#navbarsExampleDefault"></i><span data-toggle="collapse" data-target="#navbarsExampleDefault"> Close menu</span>');
        }
        else
        {
            $('#btn-menu').html('<i class="fas fa-bars" data-toggle="collapse" data-target="#navbarsExampleDefault"></i><span data-toggle="collapse" data-target="#navbarsExampleDefault"> Open menu</span>');
        }
    });
}

function initializeBellToggle() {
    $('.btn-bell1').click(function () {
        if($('.btn-bell1 i').hasClass('fa-bell'))
        {
            $('.btn-bell1').html('<i class="fas fa-bell-slash text-danger"></i>');
        }
        else
        {
            $('.btn-bell1').html('<i class="fas fa-bell text-success"></i>');
        }
    });
    
    $('.btn-bell2').click(function () {
        if($('.btn-bell2 i').hasClass('fa-bell'))
        {
            $('.btn-bell2').html('<i class="fas fa-bell-slash text-danger"></i>');
        }
        else
        {
            $('.btn-bell2').html('<i class="fas fa-bell text-success"></i>');
        }
    });
}

function repos(imgs) {
    imgs.each(function (i, o) {
        var imgw = $(o).width()
        var boxw = $(o).parent('div').width()
        var imgh = $(o).height()
        var boxh = $(o).parent('div').outerHeight()

        if (imgw > boxw) {
            $(o).css('left', ((imgw / 3) - (boxw / 3)) * -1)
        } else {
            $(o).css('left', 0)
        }

        if (imgh > boxh) {
            $(o).css('top', ((imgh / 3) - (boxh / 3)) * -1)
        } else {
            $(o).css('top', 0)
        }

    })
}

function showCustomErrorModal(titleContent, bodyContent) {
    $('#modalErrorTitle').html(titleContent);
    $('#modalErrorContent').html(bodyContent);
    $('#errorModal').modal('show');
}