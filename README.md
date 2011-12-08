> "The Times is speechless, and it takes three columns to express its speechlessness" -- Winston Churchill

WHAT IS SPEECHIFY ?
-------------------

The main idea is to have no more than a nice replacement for browser tooltips generated via the title tag.

Please note that this version was tested with jQuery 1.6.2

HOW TO USE IT ?
---------------

Just add the plugin after the jQuery library, call the function $.speechify() and it's gonna turn all the elements of your page that have got a title tag into a speechified field.

As opposed to the previous version which was livequery-aware, this version of speechify takes care of non-yet-created elements using jQuery(selector).live().

If you want to decide what is speechified, there is selector version of the function:

  $('.speechify_me').speechify();

See the file example.html for more details.

HOW CAN I CUSTOMIZE IT ?
------------------------

This is very simple. Speechify accepts your css hash as an argument.

 	$.speechify({ fontFamily: 'verdana, sans-serif', fontSize: '10px' });

The default options are:

	color: white, 
	background-color: black, 
	padding: 5px, 
	font-family: sans-serif, 
	font-size: 11px, 
	font-weight: normal,
	border-radius: 5px, 
	-moz-border-radius: 5px, 
	-webkit-border-radius: 5px,

Otherwise, the code of the plugin itself is once again very basic, and would be easy to modify, should you have to.

For the placement of the tooltip, the default position is above the element but still moving horizontally.
I found it is a good option for visibility.

Nevertheless, you can pass the position along with the CSS hash.
This is the pointer offset subhash:

  $.speechify({ fontFamily: 'verdana', pointer_offset: {left: 10, bottom: 10} });

Be careful though, for practicle reason, the vertical offset is given from the bottom, not the top.

MAIN DIFFERENCES WITH VERSION 2
-------------------------------

The difference is that the code has been fully refactored to be more straight forward and uses new features from jQuery 1.4.3

CAN I HELP ?
------------

Of course you can. Any contribution is considered in order to make this plugin better, more complete or easier to use.

KNOWN ISSUES
------------

It does not mean that you can't use older versions, but Speechify has been tested with :

jQuery 1.4.3
Safari 4.0.2
Firefox 3.0.15
IE8 (puke)

There are CSS3 features (rounded corners) but that should not break the plugin without CSS2.
Another thing is transparency on spikes. I will have a look and see what I can do to make it degrade gracefully when this feature is not supported.
The only known issue is when using it on a textfield on Firefox. No big deal but it shows spike and tooltip at the wrong place when rolling other the top edge. 

COPYRIGHT
---------

Copyright (c) 2009 - 2011 Mickael Riga. See MIT_LICENSE file for details.