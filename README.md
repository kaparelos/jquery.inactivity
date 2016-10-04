# jquery.inactivity
The simplest yet effective jQuery idle plugin

Download
--------
* [Uncompressed 1,945 bytes](https://raw.github.com/afklondon/jquery.inactivity/master/src/jquery.inactivity.js)
* [Compressed 1,015 bytes](https://raw.github.com/afklondon/jquery.inactivity/master/src/jquery.inactivity.min.js)

Purpose
-------
Listen for mouse, keyboard, touch and other custom events and fire "activity" and "inactivity" idle events

Usage
-----
Add either the jquery.inactivity.js or jquery.inactivity.min.js along with the jQuery library to your HTML document

```html
<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
<script type="text/javascript" src="jquery.inactivity.min.js"></script>
```

Then call the plugin on the element that you want to attach it

```javascript
// attach to document
$(document).inactivity();
```

You can set your options when you call the plugin for first time and you can also do this later at runtime in the same way

```javascript
$(document).inactivity( {
    timeout: 1000, // the timeout until the inactivity event fire [default: 3000]
    mouse: true, // listen for mouse inactivity [default: true]
    keyboard: false, // listen for keyboard inactivity [default: true]
    touch: false, // listen for touch inactivity [default: true]
    customEvents: "customEventName", // listen for custom events [default: ""]
    triggerAll: true, // if set to false only the first "activity" event will be fired [default: false]
});
```

This is how you handle the "activity" and "inactivity" events 

```javascript
$(document).on("activity", function(){
    // function that fires on activity
});

$(document).on("inactivity", function(){
    // function that fires on inactivity
});
```

And that's how you unattach the script

```javascript
// unattach from document
$(document).inactivity("destroy");
```

Dependencies
-------
jQuery 1.7+, tested with 2.1.4 and 3.0.0

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

Bugs?
-------
Please do [submit a ticket](https://github.com/afklondon/jquery.inactivity/issues/new) if you notice a bug. Thank you :)
