noPreschool = new Mongo.Collection("noPreschool");
percentData = noPreschool.find({DataFormat: "Percent", TimeFrame: "2007-2009"});

if (Meteor.isClient) {
  Template.educationapp.noPreschool = function () {
    return noPreschool.find({});
  }

stateData = {}

Meteor.subscribe("data", function(d){
	console.log("hello");
	console.log(percentData.fetch())
})


percentData.fetch().forEach(function(d) {
   return console.log(d)
  //var low=Math.round(100*Math.random()), 
        //mid=Math.round(100*Math.random()), 
        //high=Math.round(100*Math.random());
      //sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          //avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)}; 

});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
      // code to run on server at startup
      Meteor.publish("data", function () {
	  return percentData;
      });
  });
}
