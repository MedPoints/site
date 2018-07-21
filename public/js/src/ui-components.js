$(function() {
    initializeAccordions();
    initializeCarousels();
    initializeCopyButtons();
    initializeMapMarkersToggle();
    initializeFiltersToggle();
    initializeMenuToggle();
    initializeBellToggle();

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
    $('.btn-copy1').click(function () {
        if($('.btn-copy1 i').hasClass('fa-copy'))
        {
            $('.btn-copy1').html('<i class="far fa-copy"></i> Copied');
            $('.btn-copy2').html('<i class="far fa-copy"></i> Copy');
        }
        else
        {
            $('.btn-copy1').html('<i class="far fa-copy"></i> Copy');
        }
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
        if($('.btn-map i').hasClass('fa-map-marker'))
        {
            $('.btn-map').html('<i class="fas fa-map-marker"></i> Close map');
        }
        else
        {
            $('.btn-map').html('<i class="fas fa-map-marker"></i> Show on map');
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
            $('#btn-menu').html('<i class="fas fa-times"></i><span> Close menu</span>');
        }
        else
        {
            $('#btn-menu').html('<i class="fas fa-bars"></i><span> Open menu</span>');
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