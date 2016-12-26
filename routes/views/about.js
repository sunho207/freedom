var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var scripts = [{script: '/js/site/about.js'}];
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	// Render the view
	view.render('about', { scripts: scripts});
};
