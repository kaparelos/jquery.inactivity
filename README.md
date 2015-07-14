# jquery.inactivity
The simplest yet effective jQuery inactivity (idle) plugin

Download
--------
* [Uncompressed ~2 kB](https://raw.github.com/afklondon/jquery.inactivity/master/src/inactivity.js)

Purpose
-------
Listen for mouse, keyboard and other custom events inactivity (idle) and fire global "activity" and "inactivity" events.

Usage
-----
Since this is a very simple plugin, the usage is simple too.

First, add the jquery.inactivity.js to your document along with jQuery library:

```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.inactivity.js"></script>
```

Then, just call the function in the element that you want to track inactivity:

```javascript
// bind to document
$(document).inactivity();

// bind to an element
$("#myElement").inactivity();
```

You can set your own options when you call the plugin for first time or either later on at runtime:

```javascript
$(document).inactivity( {
    interval: 1000, // the timeout until the inactivity event fire [default: 3000]
    mouse: true, // listen for mouse inactivity [default: true]
    keyboard: false, // listen for keyboard inactivity [default: true]
    customEvents: "touchstart touchmove wheel DOMMouseScroll MSPointerDown MSPointerMove", // listen for extra custom events [default: '']
    triggerAll: true, // when set to false only the first activity event will be fired [default: false]
});
```

If you want to handle the "activity" and "inactivity" events here's the way:

```javascript
$(document).on("activity", function(){
    // function that fires on activity
});

$(document).on("inactivity", function(){
    // function that fires on inactivity
});
```

And finally that's how you stop tracking inactivity:

```javascript
// unbind from document
$(document).inactivity("destroy");

// unbind from an element
$("#myElement").inactivity("destroy");
```

Dependencies
-------
jQuery 1.7+ (tested with 2.1.4)

Browser Support
-------
* IE9+
* Firefox
* Chrome
* Safari
* Opera
* iOS Safari
* Chrome Mobile
* IE Mobile
* Opera Mobile
* Opera Mini
* Blackberry Browser

Bug?
-------
Please [submit a ticket](https://github.com/afklondon/jquery.inactivity/issues/new). Thank you :)
