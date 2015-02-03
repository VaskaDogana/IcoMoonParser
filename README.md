IcoMoonParser
=============

####Simple jquery json parser to visualize icons from the selection.json file provided by IconMoon App.

This plugin was written for a style-guide purpose to show in a simple way all the icons included in the font. In a development environment is always useful to know what icons are included and know the class name of each one without open any source file, especially when the font is updated by many people. This approach has enhanced my workflow a lot and helped UX and Visual designer to reuse icons and being updated on changes.

####Use
The script is wrapped in a plugin for a quick use.

	$('#icons-result').icomoonParser({
		json:'path/to/selection.json'
	});
	
####Demo
http://davidecalignano.it/project/?icomoon-parser