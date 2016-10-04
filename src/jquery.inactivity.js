/*

 jQuery Inactivity plugin 1.3
 The simplest yet effective jQuery idle plugin
 
 https://github.com/afklondon/jquery.inactivity
 
 Available via the MIT license
 by Alexandros Filos K.

*/

(function ($) {
  "use strict";

  // variables
  var timeout;
  var firstEvent = true;
  var settings = {};
  var events = {
    mouseEvents: "mousemove mousedown mousewheel wheel DOMMouseScroll MSPointerDown MSPointerMove",
    keyboardEvents: "keypress keydown keyup",
    touchEvents: "touchstart touchmove touchend"
  };

  $.fn.inactivity = function (opts) {
    
    console.log("I am created");
    
    var $el = $(this);
    
    clear($el);
    
    // when requested to destroy
    if (opts === "destroy")
      return;
    
    // defaults
    settings = $.extend({
      timeout: 3000,
      mouse: true,
      keyboard: true,
      touch: true,
      customEvents: "",
      triggerAll: false
    }, opts);
    
    console.log(settings);
    
    // set listeners
    if (settings.mouse)
      $el.on(events.mouseEvents, onActivity);
    
    if (settings.keyboard)
      $el.on(events.keyboardEvents, onActivity);
    
    if (settings.touch)
      $el.on(events.touchEvents, onActivity);
    
    if (settings.customEvents !== '')
      $el.on(settings.customEvents, onActivity);
  };
  
  function onActivity() {

    window.clearTimeout(timeout);
    timeout = window.setTimeout(onInactivity, settings.timeout);

    if (settings.triggerAll || firstEvent)
      $(document).trigger("activity"); // fire event

    if (firstEvent)
      firstEvent = false;
  };
  
  function onInactivity() {
    
    if (!settings.triggerAll)
      firstEvent = true;
    
    $(document).trigger("inactivity"); // fire event
  };
  
  // clear any event listeners and reset plugin
  function clear($el) {
    
    $el.off(events.mouseEvents);
    $el.off(events.keyboardEvents);
    $el.off(events.touchEvents);
    $el.off(settings.customEvents);
    
    console.log(settings);
    console.log(settings.customEvents);
    
    timeout = undefined;
    firstEvent = false;
  };

})(jQuery);
