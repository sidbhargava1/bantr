 Router.configure({
	layoutTemplate: 'layout',

	waitOn: function () {
		Meteor.subscribe('postData');
	}
});

Router.route('/', {
  name: 'index'
});