"use strict";

var apl = new senna.App();

	apl.setBasePath('/');
	apl.addSurfaces('sennastuff');
	apl.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
	