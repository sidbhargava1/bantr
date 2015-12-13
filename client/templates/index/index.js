Template.index.events({
  'click input[type=submit]': function(event, template) {
  	// stop the form from submitting
    event.preventDefault();
    var data = $('#postData').val();

    if(data && data !== "") {
      Meteor.call('createNewPost', data);
    }
  }
});