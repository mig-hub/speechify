> "The Times is speechless, and it takes three columns to express its speechlessness" -- Winston Churchill

> "Montre au-dehors, toute l'ardeur de ton désir, en sorte 
> qu'elle jaillisse, portant fidèlement l'empreinte de ton âme; non pour que tes paroles 
> fassent mieux connaître ce que nous savons déjà, mais pour que tu t'habitues à dire 
> quelle est ta soif, afin que l'on te verse à boire." -- Dante

WHAT IS SPEECHIFY ?
-------------------

The main idea is to have no more than a nice replacement for browser tooltips generated via the title tag.

HOW TO USE IT ?
---------------

Just add the plugin after the jQuery library, call the function $.speechify() and it's gonna turn all the elements of your page that have got a title tag into a speechified field.

If you use the livequery plugin, speechify will detect it and will take care of new nodes created after the page is loaded. But speechify obviously needs to be loaded after livequery.

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

MAIN DIFFERENCES WITH VERSION 1
-------------------------------

* No need for css and image anymore. Everything is done in the plugin file.
* Speed improvement / Refactoring
* Livequery aware
* Reorganization of the code that will allow things in the future, but force you to trigger speechify with $.speechify()

Only good things really. Yummy!

CAN I HELP ?
------------

Of course you can. Any contribution is considered in order to make this plugin better, more complete or easier to use.

KNOWN ISSUES
------------

It does not mean that you can't use older versions, but Speechify has been tested with :

jQuery 1.3.2
Safari 4.0.2
Firefox 3.0.15
IE8 (puke)

There are CSS3 features (rounded corners) but that should not break the plugin without CSS2.
Another thing is transparency on spikes. I will have a look and see what I can do to make it degrade gracefully when this feature is not supported.
The only known issue is when using it on a textfield on Firefox. No big deal but it shows spike and tooltip at the wrong place when rolling other the top edge. 

COPYRIGHT
---------

Copyright (c) 2009 - 2010 Mickael Riga. See MIT_LICENSE file for details.