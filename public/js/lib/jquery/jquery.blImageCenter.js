/**
 * bl-jquery-image-center jQuery Plugin
 *
 * @copyright Boxlight Media Ltd. 2012
 * @license MIT License
 * @description Centers an image by moving, cropping and filling spaces inside it's parent container. Call
 * this on a set of images to have them fill their parent whilst maintaining aspect ratio
 * @author Robert Cambridge
 *
 * Usage: See documentation at http://boxlight.github.com/bl-jquery-image-center
 */
(function($) {
  $.fn.centerImage = function(method, callback) {
    callback = callback || function() {};
    var els = this;
    var remaining = $(this).length;
    method = method == 'inside';

    // execute this on an individual image element once it's loaded
    var fn = function(img) {
      var $img = $(img);
      var $div = $img.parent();
      // parent CSS should be in stylesheet, but to reinforce:
      $div.css({
        overflow: 'hidden',
        position: $div.css('position') == 'absolute' ? 'absolute' : 'relative'
      });

      // temporarily set the image size naturally so we can get the aspect ratio
      $img.css({
        'position':   'static',
        'width':      'auto',
        'height':     'auto',
        'max-width':  '100%',
        'max-height': '100%'
      });

      // now resize
      var div = { w: $div.width(), h: $div.height(), r: $div.width() / $div.height() };
      var img = { w: $img.width(), h: $img.height(), r: $img.width() / $img.height() };
      $img.css({
        'max-width':  'none',
        'max-height': 'none',
        'width':      Math.round((div.r > img.r) ^ method ? '100%' : div.h / img.h * img.w),
        'height':     Math.round((div.r < img.r) ^ method ? '100%' : div.w / img.w * img.h)
      });

      // now center - but portrait images need to be centered slightly above halfway (33%)
      var div = { w: $div.width(), h: $div.height() };
      var img = { w: $img.width(), h: $img.height() };
      $img.css({
        'position': 'absolute',
        'left':     Math.round((div.w - img.w) / 2),
        'top':      Math.round((div.h - img.h) / 3)
      });

      callbackWrapped(img)
    };

    var callbackWrapped = function(img) {
      remaining--;
      callback.apply(els, [ img, remaining ]);
    };

    // iterate through elements
    return els.each(function(i) {
      if (this.complete || this.readyState === 'complete') {
        // loaded already? run fn
        // when binding, we can tell whether image loaded or not.
        // not if it's already failed though :(
        (function(el) {
          // use setTimeout to prevent browser locking up
          setTimeout(function() { fn(el) }, 1);
        })(this);
      } else {
        // not loaded? bind to load
        (function(el) {
          $(el)
            .one('load', function() {
              // use setTimeout to prevent browser locking up
              setTimeout(function() {
                fn(el);
              }, 1);
            })
            .one('error', function() {
              // the image did not load
              callbackWrapped(el)
            })
          .end();

          // IE9/10 won't always trigger the load event. fix it.
          if (navigator.userAgent.indexOf("Trident/5") >= 0 || navigator.userAgent.indexOf("Trident/6")) {
            el.src = el.src;
          }
        })(this);
      }
    });
  };
  // Alias functions which often better describe the use case
  $.fn.imageCenterResize = function(callback) {
    return $(this).centerImage('inside', callback);
  };
  $.fn.imageCropFill = function(callback) {
    return $(this).centerImage('outside', callback);
  };
})(jQuery);