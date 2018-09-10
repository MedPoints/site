$(function () {
    /**
     * Font Sizer helper
     * Initializes sizer elements (<a> elements with the 'sizer') class
     * and implements logic for switching font size across the whole site
     * 
     * Font sizing is applied on the <body> tag by setting the base font size
     * 
     * The selected font size is stored in cookies. 
     */
    var sizerHelper = (function() {
        var SIZER_NAMES = [
            'small',
            'medium',
            'large'
        ];
        var DEFAULT_SIZE = 'medium';
        var FONT_SIZE_COOKIE_NAME = 'fontSize';
        /**
         * An object that maps the sizer element with a
         * particular font size
         */
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
    
        /**
         * Initial font size selection is performed based on a cookie
         * value or the default font size which is stored in the 
         * DEFAULT_SIZE variable
         */
        var cookieValue = Cookies.get(FONT_SIZE_COOKIE_NAME);
        setSize(isFontSize(cookieValue) ? cookieValue : DEFAULT_SIZE);
    
        function setSize(size) {
            var sizerObject = sizers[size];
            if (!sizerObject)
                throw 'No such a sizer object';
            var sizerElement = $(sizers[size].id);
            /**
             * Collects all size classes which except the selected one
             * and removes these classes from the body element
             */
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
            // Adds the 'selected' class to the sizer ement
            selectSizer($(sizerObject.id));
            Cookies.set(FONT_SIZE_COOKIE_NAME, size);
        }
    
        function selectSizer(sizerEl) {
            $("a.sizer").removeClass("selected");
            $(sizerEl).addClass("selected"); 
        }
    
        /**
         * Validates the passed size string
         * @param {string} size 
         */
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
});