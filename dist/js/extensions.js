/*
      JQuery Methods
*/

$.fn.extend({

      // Animate element using Animate.css
      animate: function(withName, callback) {

            var animationEnd = (function(el) {
                  var animations = {
                        animation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        MozAnimation: 'mozAnimationEnd',
                        WebkitAnimation: 'webkitAnimationEnd',
                  };

                  for (var t in animations) {
                        if (el.style[t] !== undefined) {
                              return animations[t];
                        }
                  }
            })(document.createElement('div'));

            this.addClass('animated ' + withName).one(animationEnd, function() {
                  $(this).removeClass('animated ' + withName);
                  if (typeof callback === 'function') callback();
            });

            return this;
      },
});
