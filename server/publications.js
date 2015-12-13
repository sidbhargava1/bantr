Meteor.publish('postData', function() {
  return PostData.find();
});