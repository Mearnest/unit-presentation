/**
 * UnitController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	/**
	 * Action blueprints:
     *    `/display/view`
     */
	 
	// Render full page
	view: function (req, res) {
		var page = req.param('page');
		return res.render('unit/index', {  'page': page });
	},
	
	// Render a partial for an ajax call.
	viewAjax: function (req, res) {
		var page = req.param('page');
		return res.render('unit/' + page);
	},


	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to DisplayController)
	 */
	_config: {}
};