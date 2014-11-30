noPreschools = new Mongo.Collection("noPreschool");
percentData = noPreschools.find({DataFormat: "Percent"});

if (Meteor.isClient) {
Meteor.subscribe("noPreschool");

stateData = {}

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
      Meteor.publish("noPreschool", function () {
      return noPreschools.find();
    });
  }



