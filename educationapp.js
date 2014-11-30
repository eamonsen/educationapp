
noPreschool = new Mongo.Collection("noPreschool");
percentData = noPreschool.find({DataFormat: "Percent", TimeFrame: "2007-2009"});


if (Meteor.isClient) {
  function tooltipHtml(n, state){ /* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Percent not enrolled in Preschool</td><td>"+(state.Data)+"</td></tr>"+
      "</table>";
  }

Meteor.subscribe("noPreschool");

stateData = {}

Meteor.subscribe("data", function(d){
	percentData.fetch().map(function(state) {
    state.color=d3.interpolate("#ffffcc", "#800026")(state.Data);
    stateData[state.Location]=state
  })
  uStates.draw("#statesvg", stateData, tooltipHtml);
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

