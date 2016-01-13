list = new Mongo.Collection('list'); // I guess everything stays this name, variables and collection names.
person = new Mongo.Collection('person');

if (Meteor.isClient) {
  // counter starts at 0

  Template.categories.helpers({ // Reference a template name
      list: function() {
          return list.find({},{sort: {Category: 1}}); //sorts collection
      }
  });
    
  Template.task.helpers({
      safe: function(){
          if (!list){
            return "This is a test!";
          } else {
            return "This is the way!";
          }
      }
  });
    
  Template.body.helpers({
      family: [                 // Dummy array of objects
          {name: "Drew"},       // Objects with Key/Value
          {name: "Jeremy"},
          {name: "Mallory"},
      ]
  });
    
Template.body.helpers({
    person: function () { // The object key referneces the collection, which refnereces the item to be itterated.
        return person.find({});
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
