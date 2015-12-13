PostData = new Mongo.Collection('postData');

Meteor.methods({
  createNewPost: function(data) {
  	var post = {post: data, postDate: new Date().valueOf()}
    PostData.insert(post);
  }
});