"use strict";

var apl = new senna.App();

	apl.setBasePath('/');
	apl.addSurfaces('sennastuff');
	apl.addRoutes([
		new senna.Route('contact.html', senna.HtmlScreen),
		new senna.Route('index.html', senna.HtmlScreen),
		new senna.Route('lieux.html', senna.HtmlScreen),
		new senna.Route('meetup.html', senna.HtmlScreen),
		new senna.Route('projets.html', senna.HtmlScreen),
		new senna.Route('xpairs.html', senna.HtmlScreen)
		]);
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