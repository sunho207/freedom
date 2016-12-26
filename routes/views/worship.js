var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var scripts = [{script: '/js/site/worship.js'}];
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'worship';

	// Render the view
	view.render('worship', { scripts: scripts});
};
