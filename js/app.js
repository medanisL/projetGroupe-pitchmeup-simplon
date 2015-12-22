"use strict";

var apl = new senna.App();

	apl.setBasePath('/');
	apl.addSurfaces('sennastuff');
	apl.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));

var app = {
	config: {
		url:"https://smp.ovh",
		target:"#main"
	},
	init : function(){
		this.makeTpl();
	},
	makeTpl: function(){
		var tpl = "<p>{{msg}}</p>";
		var output = Mustache.render(tpl, {msg : "Coucous les simploniens !"});
		$("#main").html(output);
	}
};

$(document).ready(function(){
	app.init();
});