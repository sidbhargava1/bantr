Template.index.helpers({
  posts: function() {
    return PostData.find();
  }
});

Template.index.events({
  'click input[type=submit]': function(event, template) {
  	// stop the form from submitting
    event.preventDefault();
    var data = $('#postData').val();

    if(data && data !== "") {
      Meteor.call('createNewPost', data);
      $('#postData').val('');
    }
  }
});