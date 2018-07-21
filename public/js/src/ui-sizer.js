var sizerHelper = (function() {
    var SIZER_NAMES = [
        'small',
        'medium',
        'large'
    ];
    var DEFAULT_SIZE = 'medium';
    var FONT_SIZE_COOKIE_NAME = 'fontSize';
    var sizers = {
        small: {
            id: '#small',
            class: 'small'
        },
        medium: {
            id: '#medium',
            class: 'medium'
        },
        large: {
            id: '#large',
            class: 'large'
        }
    };

    for(sizerName in sizers) {
        $(sizers[sizerName].id).on('click', function (event) {
            event.preventDefault();
            setSize(sizerName);
        });
    }
    $("a.sizer").click(function(evt) {
        setSize(evt.target.id);
    });

    var cookieValue = Cookies.get(FONT_SIZE_COOKIE_NAME);
    setSize(isFontSize(cookieValue) ? cookieValue : DEFAULT_SIZE);

    function setSize(size) {
        var sizerObject = sizers[size];
        if (!sizerObject)
            throw 'No such a sizer object';
        var sizerElement = $(sizers[size].id);
        var excludedClasses = Object.keys(sizers).reduce(
            function (accumulator, sizerName) {
                if (sizerName !== size)
                    accumulator.push(sizers[sizerName].class);
                return accumulator;
            },
            []
        ).join(' ');

        $('body').removeClass(excludedClasses);
        $('body').addClass(sizers[size].class);
        selectSizer($(sizerObject.id));
        Cookies.set(FONT_SIZE_COOKIE_NAME, size);
    }

    function selectSizer(sizerEl) {
        $("a.sizer").removeClass("selected");
        $(sizerEl).addClass("selected"); 
    }

    function isFontSize(size) {
        for (var i = 0, length = SIZER_NAMES.length; i < length; i++) {
            if (SIZER_NAMES[i] === size)
                return true;
        }
        return false;
    }

    return {
        setSize: setSize
    };
})();