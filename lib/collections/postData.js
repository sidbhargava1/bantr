PostData = new Mongo.Collection('postData');

Meteor.methods({
  createNewPost: function(data) {
  	var post = {post: data, postDate: new Date().valueOf(), agree: 0, disagree: 0, views: 0, shares: 0}
    PostData.insert(post);
  }
});